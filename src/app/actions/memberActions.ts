"use server";

import { prisma } from "@/lib/prisma";
import { Member } from "@/generated/prisma";
import { getAuthUserId } from "./authActions";
import { GetMemberParams, PaginatedResponse } from "@/types";
import { addYears } from "date-fns";

export async function getMembers({
  ageRange = "18,100",
  gender= "male,female,non-binary",
  orderBy = "updated",
  withPhoto = "true",
  pageNumber = "1",
  pageSize = "12"
}: GetMemberParams): Promise<PaginatedResponse<Member>> {

  const userId = await getAuthUserId();

  const [minAge, maxAge] = ageRange.split(",")
  const currentDate = new Date();
  const minDob = addYears(currentDate, -maxAge-1);
  const maxDob = addYears(currentDate, -minAge);

  const selectedGender = gender.split(",");

  const page = parseInt(pageNumber);
  const limit = parseInt(pageSize);

  const skip = (page - 1) * limit;

  try {
    const count = await prisma.member.count({
      where: {
        AND: [
          { dateOfBirth: { gte: minDob }},
          { dateOfBirth: { lte: maxDob }},
          { gender: { in: selectedGender }},
          ...(withPhoto === "true" ? [{ image: { not: null }}] : [])
        ],
        NOT: {
          userId: userId
        }
      },
    });

    const members = await prisma.member.findMany({
      where: {
        AND: [
          { dateOfBirth: { gte: minDob }},
          { dateOfBirth: { lte: maxDob }},
          { gender: { in: selectedGender }},
          ...(withPhoto === "true" ? [{ image: { not: null }}] : [])
        ],
        NOT: {
          userId: userId
        }
      },
      orderBy: {
        [orderBy]: "desc"
      },
      skip,
      take: limit
    });

    return {
      items: members,
      totalCount: count
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export async function getMemberById(userId: string) {
  try {
    return prisma.member.findUnique({ where: { userId } });
  } catch (error) {
    console.log(error);
  }
};

export async function getMemberPhotosByUserId(userId: string) {
  const currentUserId = await getAuthUserId();
  const member = await prisma.member.findUnique({
    where: { userId },
    select: {photos: {
      where: currentUserId === userId ? {} : { isApproved: true }
    }},
  });

  if (!member) return [];

  return member.photos;
};

export async function updateLastActive() {
  const userId = await getAuthUserId();

  try {
    const existingMember = await prisma.member.findUnique({
      where: { userId }
    });

    if (!existingMember) {
      console.log(`No member found for userId: ${userId}`);
      return null;
    }
    return prisma.member.update({
      where: { userId },
      data: { updated: new Date() }
    })
  } catch (error) {
    console.log(error);
    throw error;
  }
};

import { PrismaClient } from "../src/generated/prisma";
import { membersData } from "./membersData";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function seedMembers() {
  const promises = membersData.map(async member => prisma.user.create({
    data: {
      email: member.email,
      emailVerified: new Date(),
      name: member.name,
      passwordHash: await hash("password", 10),
      image: member.image,
      profileComplete: true,
      member: {
        create: {
          dateOfBirth: new Date(member.dateOfBirth),
          gender: member.gender,
          name: member.name,
          created: new Date(member.created),
          updated: new Date(member.lastActive),
          description: member.description,
          city: member.city,
          country: member.country,
          image: member.image,
          photos: {
            create: {
              url: member.image,
              publicId: member.image.replace("/images/", "").replace(".jpeg", ""),
              isApproved: true
            }
          }
        }
      }
    }
  }));

  return Promise.all(promises);
};

async function seedAdmin () {
  return prisma.user.create({
    data: {
      email: "admin@admin.com",
      emailVerified: new Date(),
      name: "Admin",
      passwordHash: await hash("password", 10),
      role: "ADMIN"
    }
  });
};

async function main() {
  console.log("Clearing existing data...");

  try {
    await prisma.photo.deleteMany().catch(() => console.log("Photo table doesn't exist yet"));
    await prisma.message.deleteMany().catch(() => console.log("Message table doesn't exist yet"));
    await prisma.token.deleteMany().catch(() => console.log("Token table doesn't exist yet"));
    await prisma.member.deleteMany().catch(() => console.log("Member table doesn't exist yet"));
    await prisma.user.deleteMany().catch(() => console.log("User table doesn't exist yet"));
  } catch {
    console.log("Some tables don't exist yet, continuing with seeding...");
  }

  console.log("Seeding members...");
  await seedMembers();
  
  console.log("Seeding admin...");
  await seedAdmin();
  
  console.log("Seeding completed!");
};

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});

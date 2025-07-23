import { TokenType } from "@/generated/prisma";
import { prisma } from "./prisma";

export async function getTokenByEmail (email: string) {
  try {
    return prisma.token.findFirst({
      where: { email }
    });
  } catch (error) {
    console.log(error);
    throw error;
  };
};

export async function getTokenByToken (token: string) {
  try {
    return prisma.token.findFirst({
      where: { token }
    })
  } catch (error) {
    console.log(error);
    throw error;
  };
};

function generateSecureToken (): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, "0")).join("");
};

export async function generateToken (email: string, type: TokenType) {
  const token = generateSecureToken();
  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24);

  const existingToken = await getTokenByEmail(email);

  if (existingToken) {
    await prisma.token.delete({
      where: { id: existingToken.id }
    })
  };

  return prisma.token.create({
    data: {
      email,
      token,
      expires,
      type
    }
  });
};

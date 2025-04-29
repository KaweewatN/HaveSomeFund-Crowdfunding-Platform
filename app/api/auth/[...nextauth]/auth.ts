import { NextAuthOptions, getServerSession, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma/prismaService";
import argon2 from "argon2";
import { AuthResponse } from "./auth.response.type";
import { useSession } from "next-auth/react";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt" as const,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@doe.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Credentials received:", credentials);

        if (!credentials) return null;
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter email and password");
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
          select: {
            id: true,
            email: true,
            name: true,
            password: true,
            role: true,
          },
        });

        console.log("User fetched from database:", user);

        if (
          user &&
          user.password &&
          (await argon2.verify(user.password, credentials.password))
        ) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } else {
          console.error("Invalid email or password");
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }: { token: any; user: any }) => {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.role = user.role;
      }
      return token;
    },
    session: async ({ session, token }: { session: any; token: any }) => {
      if (session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.role = token.role;
      }
      return session;
    },
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      if (url === "/api/auth/signout") {
        return `${baseUrl}/login`;
      }
      return baseUrl;
    },
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);

// authenticate user, admin, and creator
export async function authenticateUser(): Promise<AuthResponse> {
  const session = await getServerAuthSession();
  if (!session) {
    throw { response: "No session found" };
  }
  return { session, response: "Session found" };
}

// check if user is admin
export async function authenticateAdmin(): Promise<AuthResponse> {
  const session = await getServerAuthSession();
  if (!session) {
    throw { response: "No session found" };
  }
  const SessionUser = session.user as unknown as { role: string };
  if (SessionUser?.role !== "admin") {
    throw { response: "Unauthorized role" };
  }
  return { session, response: "Session found" };
}

// Check user is creator
export async function authenticateCreator(): Promise<AuthResponse> {
  const session = await getServerAuthSession();
  if (!session) {
    throw { response: "No session found" };
  }
  const SessionUser = session.user as unknown as { role: string };
  if (SessionUser?.role !== "creator") {
    throw { response: "Unauthorized role" };
  }
  return { session, response: "Session found" };
}

// get user data
export async function getUser(): Promise<{
  id: string;
  email: string;
  role: string;
}> {
  const session = await getServerAuthSession();
  if (!session) {
    throw new Error("No session found");
  }

  const SessionUser = session.user as unknown as {
    id: string;
    email: string;
    role: string;
  };
  if (!SessionUser?.role || !SessionUser?.id || SessionUser?.email) {
    throw new Error("Invalid session data");
  }

  return {
    id: SessionUser.id,
    email: SessionUser.email,
    role: SessionUser.role,
  };
}

// get user id
export async function getUserID(): Promise<string> {
  const session = await getServerAuthSession();
  if (!session) {
    throw new Error("No session found");
  }
  const SessionUser = session.user as unknown as { id: string };
  return SessionUser?.id; // // further development encrypt user id for security
}

// get user id (client)
export async function getUserIDClient(): Promise<string> {
  const { data: session } = useSession();
  if (!session?.user.id) {
    throw new Error("User ID not found");
  }
  return session.user.id; // further development encrypt user id for security
}

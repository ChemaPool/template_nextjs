import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { JWT } from "next-auth/jwt";
import { Account, Session, User } from "next-auth/core/types";
import { AdapterUser } from "next-auth/adapters";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }: { token: JWT; user: User | AdapterUser; account: Account | null }) {
      if (user) {
        token = { id: user.id, provider: account?.provider, ...token };
      }

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      return { ...session, provider: token?.provider };
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
    signOut: "/login",
  },
};

export default NextAuth(authOptions);

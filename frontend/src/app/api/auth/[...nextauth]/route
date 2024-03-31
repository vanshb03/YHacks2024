import GoogleProvider from "next-auth/providers/google";
import NextAuth, { type NextAuthOptions } from "next-auth";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw Error("No profile.email");
      }

      return true;
    },
  },
};

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: authOptions.providers,
});
export { handler as GET, handler as POST };

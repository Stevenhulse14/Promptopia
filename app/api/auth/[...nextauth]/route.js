// Backend endpoints for NextAuth.js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log({
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
});
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {
    // session callback
    // serverless route which uses something called a lambda function
    return session;
  },
  async signIn({ profile }) {
    return profile;
  },
});

export { handler as GET, handler as POST };

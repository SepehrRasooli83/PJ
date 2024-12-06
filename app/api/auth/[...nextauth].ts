// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { JWT } from 'next-auth/jwt';
// import { User } from '@/models/User';

// console.log("NextAuth API is being called!"); // Add this line for debugging

// const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         phone: { label: 'Phone', type: 'text', placeholder: 'Phone number' },
//         otp: { label: 'OTP', type: 'text', placeholder: 'Enter OTP' }
//       },
//       async authorize(credentials: { phone: string; otp: string } | undefined) {
//         if (!credentials) {
//           return null;
//         }

//         const { phone, otp } = credentials;
//         const user = await User.findOne({ phone });

//         if (!user || user.otp !== otp || (user.otpExpiresAt && user.otpExpiresAt < new Date())) {
//           throw new Error('Invalid or expired OTP');
//         }

//         return { id: user.id, phone: user.phone };
//       }
//     })
//   ],
//   session: {
//     strategy: 'jwt' as const,
//   },
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
//   callbacks: {
//     async jwt({ token, user }: { token: JWT; user?: any }) {
//       if (user) {
//         token.id = user.id;
//         token.phone = user.phone;
//       }
//       return token;
//     },
//     async session({ session, token }: { session: any; token: JWT }) {
//       session.user = {
//         ...session.user,
//         id: token.id as string,
//         phone: token.phone as string,
//       };
//       return session;
//     }
//   }
// };

// export default NextAuth(authOptions);

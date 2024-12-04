import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      phone?: string;
    };
  }

  interface User {
    id: string;
    phone?: string;
    otp?: string;
    otpExpiresAt?: Date;
  }

  interface JWT {
    id: string;
    phone?: string;
    otp?: string;
    otpExpiresAt?: Date;
  }
}

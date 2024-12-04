import { ConnectToDb } from '@/db/ConnectToDb';
import { User } from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  const { phone } = await req.json(); // Extract phone from the request body

  if (!phone) {
    return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
  }

  try {
    // Connect to DB
    await ConnectToDb();

    // Generate OTP and set expiry time
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // OTP valid for 5 minutes

    // Find or create user in the database
    let user = await User.findOne({ phone });

    if (!user) {
      user = new User({ phone });
    }

    // Set OTP and expiry time
    user.otp = otp;
    user.otpExpiresAt = otpExpiresAt;
    await user.save();

    console.log(`Generated OTP for ${phone}: ${otp}`);

    // Uncomment the following when you have an SMS service
    // try {
    //   await axios.post(process.env.SMS_API_URL!, {
    //     apiKey: process.env.SMS_API_KEY,
    //     to: phone,
    //     message: `Your OTP code is ${otp}`,
    //   });
    // } catch (error) {
    //   return NextResponse.json({ error: 'Failed to send OTP via SMS' }, { status: 500 });
    // }

    return NextResponse.json({ message: 'OTP sent successfully' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send OTP' }, { status: 500 });
  }
}

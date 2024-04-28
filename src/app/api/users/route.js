import User from '@/Models/User';
import connectDB from '@/lib/connectDB';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();

  try {
    const users = await User.find({});
    return NextResponse.json({ data: users });
  } catch (error) {
    return NextResponse.json('Error getting users from backend');
  }
}

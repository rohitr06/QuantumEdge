import { NextRequest, NextResponse } from 'next/server';
import { userSchema } from '@/lib/validations';
import { z } from 'zod';

// Mock data - replace with actual database
const users = [
  {
    id: '1',
    email: 'john@example.com',
    name: 'John Doe',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: users,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const validatedData = userSchema.omit({ id: true, createdAt: true, updatedAt: true }).parse(body);
    
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      ...validatedData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    users.push(newUser);
    
    return NextResponse.json({
      success: true,
      data: newUser,
    }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
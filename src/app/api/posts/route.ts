import { getAllPosts } from '@/app/lib/blog';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await getAllPosts(4);
  return NextResponse.json(posts);
}
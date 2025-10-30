import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

// 購入履歴検索API
export async function GET(
  _: Request,
  // { params }: { params: { userId: string } }
  context: { params: Promise<{ userId: string }> }
) {
  // const userId = await params.userId;
  const { userId } = await context.params;

  if (!userId) {
    return NextResponse.json({ error: 'User ID is missing' }, { status: 400 });
  }

  try {
    const purchases = await prisma.purchase.findMany({
      where: {
        userId: userId,
      },
    });

    return NextResponse.json(purchases);
  } catch (err) {
    return NextResponse.json(err);
  }
}

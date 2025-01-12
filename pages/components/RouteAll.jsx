import { NextResponse } from 'next/server';
// Import your database connection

// GET all whiskies
export async function GET() {
  try {
    const whiskies = await db.collection('whiskies').find().toArray();
    return NextResponse.json(whiskies);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch whiskies' },
      { status: 500 }
    );
  }
}

// POST new whisky
export async function POST(request) {
  try {
    const whisky = await request.json();
    const result = await db.collection('whiskies').insertOne(whisky);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create whisky' },
      { status: 500 }
    );
  }
}
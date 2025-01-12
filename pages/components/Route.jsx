import { NextResponse } from 'next/server';
// Import your database connection

// GET single whisky
export async function GET(request, { params }) {
  try {
    const whisky = await db.collection('whiskies').findOne({ 
      _id: new ObjectId(params.id) 
    });
    return NextResponse.json(whisky);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch whisky' },
      { status: 500 }
    );
  }
}

// PUT update whisky
export async function PUT(request, { params }) {
  try {
    const updates = await request.json();
    const result = await db.collection('whiskies').updateOne(
      { _id: new ObjectId(params.id) },
      { $set: updates }
    );
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update whisky' },
      { status: 500 }
    );
  }
}

// DELETE whisky
export async function DELETE(request, { params }) {
  try {
    const result = await db.collection('whiskies').deleteOne({ 
      _id: new ObjectId(params.id) 
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete whisky' },
      { status: 500 }
    );
  }
}
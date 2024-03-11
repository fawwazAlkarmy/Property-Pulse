import prisma from "@/utils/db";
import { NextResponse } from "next/server";

//! GET /api/properties/id

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    const property = await prisma.property.findFirst({
      where: {
        id,
      },
    });
    if (!property)
      return NextResponse.json(
        { message: "Property not found" },
        { status: 404 }
      );

    return NextResponse.json(property, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error fetching property" },
      { status: 500 }
    );
  }
};

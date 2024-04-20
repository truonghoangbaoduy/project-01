import { mongooseConnect } from "@/lib/mongoose";
import { Account } from "@/models/Account";
import { NextResponse } from "next/server";

export async function GET(request) {
  await mongooseConnect();
  const email = request.nextUrl.searchParams.get("email");
  console.log("Request email: ", email);
  const account = await Account.findOne({ email });
  if (account) {
    return NextResponse.json(
      { account },
      {
        status: 200,
      }
    );
  } else {
    return NextResponse.json(
      { message: "Account doesn't exist!" },
      { status: 400 }
    );
  }
}

import { NextResponse } from "next/server";

/**
 * Lane 2 — Challenge 2, "Reasoning & Uncertainty Service"
 * Proves the service is yours: the grader hits this first and checks
 * studentToken against the token you registered on the course platform.
 */
export async function GET() {
  return NextResponse.json({
    ok: true,
    studentToken: process.env.SITE_TOKEN ?? "SITE_TOKEN-env-var-not-set",
    service: "reasoning",
  });
}

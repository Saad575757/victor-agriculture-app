"use server";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

import { contactFormSchema } from "@/lib/validation/contact";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string[]>;
}

const INQUIRY_DIR = path.join(process.cwd(), ".data");
const INQUIRY_FILE = path.join(INQUIRY_DIR, "inquiries.jsonl");

export async function submitContactInquiry(
  values: unknown,
): Promise<ContactFormState> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const inquiry = {
    ...parsed.data,
    submittedAt: new Date().toISOString(),
  };

  try {
    await mkdir(INQUIRY_DIR, { recursive: true });
    await appendFile(INQUIRY_FILE, `${JSON.stringify(inquiry)}\n`, "utf8");
  } catch {
    return {
      status: "error",
      message:
        "We could not record your message right now. Please try again or email us directly.",
    };
  }

  return {
    status: "success",
    message: `Thank you, ${parsed.data.name.split(" ")[0]}. Your inquiry has been recorded and our team will respond within two business days.`,
  };
}

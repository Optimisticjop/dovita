"use server";

import { createClient } from "@/lib/supabase/server";
import { adminSupabase } from "@/lib/supabase/admin";

async function upload(file: File, bucket: string) {
  const supabase = await createClient();

  const extension = file.name.split(".").pop();
  const filename = `${Date.now()}-${crypto.randomUUID()}.${extension}`;

  const { error } = await supabase.storage.from(bucket).upload(filename, file, {
    upsert: false,
  });

  if (error) {
    throw new Error(error.message);
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(filename);

  return data.publicUrl;
}

export async function uploadProductImage(file: File) {
  return upload(file, "product-images");
}

export async function uploadResultImage(file: File) {
  const extension = file.name.split(".").pop();

  const filename = `${Date.now()}-${crypto.randomUUID()}.${extension}`;

  const { error } = await adminSupabase.storage
    .from("results-images")
    .upload(filename, file);

  if (error) {
    throw new Error(error.message);
  }

  const {
    data: { publicUrl },
  } = adminSupabase.storage.from("results-images").getPublicUrl(filename);

  return publicUrl;
}

export async function uploadTestimonialImage(file: File) {
  return upload(file, "testimonial-images");
}

export async function uploadConsultationImage(file: File) {
  const extension = file.name.split(".").pop();

  const filename = `${Date.now()}-${crypto.randomUUID()}.${extension}`;

  const { error } = await adminSupabase.storage
    .from("consultation-images")
    .upload(filename, file);

  if (error) {
    throw new Error(error.message);
  }

  const {
    data: { publicUrl },
  } = adminSupabase.storage.from("consultation-images").getPublicUrl(filename);

  return publicUrl;
}
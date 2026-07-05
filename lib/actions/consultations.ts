"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { adminSupabase } from "@/lib/supabase/admin";

export async function getConsultations() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("consultations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function getConsultation(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("consultations")
    .select(
      `
      *,
      consultation_images(*)
      `,
    )
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

// export async function getConsultation(id: string) {
//   const supabase = await createClient();

//   const { data: consultation, error } = await supabase
//     .from("consultations")
//     .select("*")
//     .eq("id", id)
//     .single();

//   if (error) throw error;

//   const { data: images, error: imageError } = await supabase
//     .from("consultation_images")
//     .select("*")
//     .eq("consultation_id", id);

//   if (imageError) throw imageError;

//   console.log(images);

//   return {
//     ...consultation,
//     consultation_images: images,
//   };
// }

export async function createConsultation(data: {
  full_name: string;
  phone: string;
  email: string;
  age: number;
  gender: string;
  concern: string;
  message: string;
  images: string[];
}) {
  const supabase = await createClient();

  // Create consultation first
  const { data: consultation, error } = await supabase
    .from("consultations")
    .insert({
      full_name: data.full_name,
      phone: data.phone,
      email: data.email,
      age: data.age,
      gender: data.gender,
      concern: data.concern,
      message: data.message,
      status: "Pending",
    })
    .select()
    .single();

  if (error) throw error;

  // Save uploaded images
  if (data.images.length > 0) {
    const rows = data.images.map((url) => ({
      consultation_id: consultation.id,
      image_url: url,
    }));

    const { error: imageError } = await adminSupabase
      .from("consultation_images")
      .insert(rows);

    if (imageError) throw imageError;
  }

  revalidatePath("/admin/consultations");
}

export async function updateConsultationStatus(id: string, status: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("consultations")
    .update({ status })
    .eq("id", id);

  if (error) throw error;

  revalidatePath("/admin/consultations");
}

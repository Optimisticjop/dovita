"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function getTestimonials() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function getTestimonial(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function createTestimonial(data: {
  customer_name: string;
  location: string;
  testimonial: string;
  image: string;
  rating: number;
}) {
  const supabase = await createClient();

  const { error } = await supabase.from("testimonials").insert({
    customer_name: data.customer_name,
    location: data.location,
    testimonial: data.testimonial,
    image: data.image,
    rating: data.rating,
  });

  if (error) throw error;

  revalidatePath("/admin/testimonials");
  revalidatePath("/");
}

export async function updateTestimonial(
  id: string,
  data: {
    customer_name: string;
    location: string;
    testimonial: string;
    image: string;
    rating: number;
  },
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("testimonials")
    .update({
      customer_name: data.customer_name,
      location: data.location,
      testimonial: data.testimonial,
      image: data.image,
      rating: data.rating,
    })
    .eq("id", id);

  if (error) throw error;

  revalidatePath("/admin/testimonials");
  revalidatePath(`/admin/testimonials/edit/${id}`);
  revalidatePath("/");
}

export async function deleteTestimonial(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("testimonials").delete().eq("id", id);

  if (error) throw error;

  revalidatePath("/admin/testimonials");
  revalidatePath("/");
}

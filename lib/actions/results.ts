"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function getResults() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("results")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function getResult(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("results")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function createResult(data: {
  title: string;
  description: string;
  before_image: string;
  after_image: string;
}) {
  const supabase = await createClient();

  const { error } = await supabase.from("results").insert({
    title: data.title,
    description: data.description,
    before_image: data.before_image,
    after_image: data.after_image,
  });

  if (error) throw error;

  revalidatePath("/admin/results");
}

export async function updateResult(
  id: string,
  data: {
    title: string;
    description: string;
    before_image: string;
    after_image: string;
  },
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("results")
    .update({
      title: data.title,
      description: data.description,
      before_image: data.before_image,
      after_image: data.after_image,
    })
    .eq("id", id);

  if (error) throw error;

  revalidatePath("/admin/results");
  revalidatePath(`/admin/results/edit/${id}`);
}

export async function deleteResult(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("results").delete().eq("id", id);

  if (error) throw error;

  revalidatePath("/admin/results");
}

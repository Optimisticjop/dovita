"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function getProducts() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(
      `
      *,
      categories(name)
    `,
    )
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function getProduct(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function createProduct(formData: {
  category_id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}) {
  const supabase = await createClient();

  const { error } = await supabase.from("products").insert(formData);

  if (error) throw error;

  revalidatePath("/admin/products");
}

export async function updateProduct(
  id: string,
  formData: {
    category_id: string;
    name: string;
    price: number;
    description: string;
    image: string;
  },
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("products")
    .update(formData)
    .eq("id", id);

  if (error) throw error;

  revalidatePath("/admin/products");
}

export async function deleteProduct(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) throw error;

  revalidatePath("/admin/products");
}

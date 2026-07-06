"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

type ProductFilters = {
  search?: string;
  category?: string;
  sort?: string;
};

export async function getProducts(filters?: ProductFilters) {
  const supabase = await createClient();

  let query = supabase.from("products").select(`
      *,
      categories(id, name)
    `);

  if (filters?.search) {
    query = query.ilike("name", `%${filters.search}%`);
  }

  if (filters?.category) {
    query = query.eq("category_id", filters.category);
  }

  switch (filters?.sort) {
    case "low":
      query = query.order("price", { ascending: true });
      break;

    case "high":
      query = query.order("price", { ascending: false });
      break;

    default:
      query = query.order("created_at", {
        ascending: false,
      });
  }

  const { data, error } = await query;

  if (error) throw error;

  return data;
}

export async function getProduct(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(
      `
      *,
      categories(id,name)
    `,
    )
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
  revalidatePath("/shop");
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
  revalidatePath("/shop");
}

export async function deleteProduct(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) throw error;

  revalidatePath("/admin/products");
  revalidatePath("/shop");
}

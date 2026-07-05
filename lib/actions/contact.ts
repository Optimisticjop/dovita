"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function createContactMessage(data: {
  full_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const supabase = await createClient();

  const { error } = await supabase.from("contact_messages").insert(data);

  if (error) throw error;
}

export async function getContactMessages() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function getMessage(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function deleteContactMessage(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("contact_messages")
    .delete()
    .eq("id", id);

  if (error) throw error;

  revalidatePath("/admin/messages");
}

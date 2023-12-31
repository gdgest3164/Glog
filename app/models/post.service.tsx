import supabase from "./supabase";

export async function getPosts() {
  return await supabase.from("post").select("*, category(*)").order("created_at", { ascending: false });
}

export async function getPost(id: number) {
  return await supabase.from("post").select("*, category(*)").eq("id", id).single();
}

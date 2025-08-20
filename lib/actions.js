"use server";

import { saveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title")?.toString().trim(),
    summary: formData.get("summary")?.toString().trim(),
    instructions: formData.get("instructions")?.toString() ?? "",
    image: formData.get("image"),
    creator: formData.get("name")?.toString().trim(),
    creator_email: formData.get("email")?.toString().trim(),
  };

  if (!meal.title || !meal.summary || !meal.creator || !meal.creator_email) {
    throw new Error("Missing required fields");
  }

  await saveMeal(meal);
  redirect("/meals");
}

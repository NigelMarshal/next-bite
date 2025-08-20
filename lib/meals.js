import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs/promises";
import path from "node:path";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Database connection failed");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMealBySlug(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  const slug = slugify(meal.title, { lower: true, strict: true });
  const safeInstructions = xss(meal.instructions || "");

  let imagePath = null;
  if (meal.image) {
    const uploadsDir = path.join(process.cwd(), "public", "images");
    await fs.mkdir(uploadsDir, { recursive: true });

    const originalName = meal.image.name || "upload";
    const ext = path.extname(originalName) || ".png";
    const fileName = `${slug}${ext}`;
    const diskPath = path.join(uploadsDir, fileName);

    const buf = Buffer.from(await meal.image.arrayBuffer());
    await fs.writeFile(diskPath, buf);

    imagePath = `/images/${fileName}`;
  }

  const stmt = db.prepare(`
    INSERT INTO meals
      (slug, title, summary, instructions, image, creator, creator_email)
    VALUES
      (@slug, @title, @summary, @instructions, @image, @creator, @creator_email)
  `);

  stmt.run({
    slug,
    title: meal.title,
    summary: meal.summary,
    instructions: safeInstructions,
    image: imagePath,
    creator: meal.creator,
    creator_email: meal.creator_email,
  });
}

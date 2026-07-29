import fs from "fs/promises";
import path from "path";

const file = path.join(process.cwd(), "data", "budget.json");

export async function GET() {
  const data = await fs.readFile(file, "utf8");

  return Response.json(JSON.parse(data));
}

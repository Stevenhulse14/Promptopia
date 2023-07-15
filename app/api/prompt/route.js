import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req) => {
  try {
    await connectToDatabase();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("failed to fetch prompt data", { status: 500 });
  }
};

export const PATCH = async (req) => {};

export const DELETE = async (req) => {};

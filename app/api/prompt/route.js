import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req) => {
  try {
    await connectToDatabase();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {}
};

export const PATCH = async (req) => {
  try {
    await connectToDatabase();
  } catch (error) {
    return new Response("failed to update prompt data", { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
  } catch (error) {
    return new Response("failed to delete prompt", { status: 500 });
  }
};

import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

//read all prompts
export const GET = async (request, { params }) => {
  try {
    await connectToDatabase();
    const prompt = await Prompt.find(params.id).populate("creator");

    if (!prompt) {
      return new Response("prompt not found", { status: 404 });
    }

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("failed to get prompts", { status: 500 });
  }
};

//UPDATE PROMPT
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDatabase();
    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt) {
      return new Response("prompt not found", { status: 404 });
    }

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("failed to update prompt data", { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    await connectToDatabase();
    const prompt = await Prompt.findById(req.params.id);

    if (!prompt) {
      return new Response("prompt not found", { status: 404 });
    }

    await prompt.remove();

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("failed to delete prompt", { status: 500 });
  }
};

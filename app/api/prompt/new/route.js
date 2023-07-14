import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";
export const POST = async (req, res) => {
  const { prompt, userId, tag } = await req.json();
  console.log("hello", req.body);
  try {
    await connectToDatabase();
    const newPrompt = await Prompt.create({
      creator: userId,
      prompt,
      tag,
    });
    await newPrompt.save();
    if (newPrompt) {
      return new Response(JSON.stringify(newPrompt), { status: 201 });
    }
  } catch (error) {
    console.error(error);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};

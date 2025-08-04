'use server';
/**
 * @fileOverview An AI agent for tagging images.
 *
 * - tagImage - A function that generates tags for an image.
 * - TagImageInput - The input type for the tagImage function.
 * - TagImageOutput - The return type for the tagImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TagImageInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "An image to be tagged, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type TagImageInput = z.infer<typeof TagImageInputSchema>;

const TagImageOutputSchema = z.object({
  tags: z.array(z.string()).describe('A list of 3-5 relevant tags for the image.'),
});
export type TagImageOutput = z.infer<typeof TagImageOutputSchema>;

export async function tagImage(input: TagImageInput): Promise<TagImageOutput> {
  return tagImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tagImagePrompt',
  input: {schema: TagImageInputSchema},
  output: {schema: TagImageOutputSchema},
  prompt: `You are an expert image analyst. Your task is to analyze the provided image and generate a list of 3-5 relevant tags that describe its content, style, and subject matter.

Focus on keywords that would be useful for filtering a creative portfolio. Examples: "portrait", "landscape", "urban", "nature", "black and white", "product", "event".

Image to analyze:
{{media url=imageDataUri}}`,
});

const tagImageFlow = ai.defineFlow(
  {
    name: 'tagImageFlow',
    inputSchema: TagImageInputSchema,
    outputSchema: TagImageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

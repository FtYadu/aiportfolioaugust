'use server';
/**
 * @fileOverview A blog post generation AI agent.
 *
 * - generateBlogPost - A function that handles the blog post generation process.
 * - GenerateBlogPostInput - The input type for the generateBlogPost function.
 * - GenerateBlogPostOutput - The return type for the generateBlogPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogPostInputSchema = z.object({
  topic: z.string().describe('The topic for the blog post.'),
});
export type GenerateBlogPostInput = z.infer<typeof GenerateBlogPostInputSchema>;

const GenerateBlogPostOutputSchema = z.object({
  title: z.string().describe('The catchy and relevant title of the blog post.'),
  content: z
    .string()
    .describe('The full content of the blog post in Markdown format. It should be well-structured with headings and paragraphs.'),
  tags: z.array(z.string()).describe('A list of 3-5 relevant tags for the blog post.'),
});
export type GenerateBlogPostOutput = z.infer<typeof GenerateBlogPostOutputSchema>;

export async function generateBlogPost(input: GenerateBlogPostInput): Promise<GenerateBlogPostOutput> {
  return generateBlogPostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogPostPrompt',
  input: {schema: GenerateBlogPostInputSchema},
  output: {schema: GenerateBlogPostOutputSchema},
  prompt: `You are a creative writer specializing in multimedia, technology, and creativity for a professional portfolio blog. Your audience consists of potential clients, collaborators, and peers.

Generate a compelling, well-structured, and insightful blog post about the following topic: {{{topic}}}.

The post should be engaging and reflect expertise in the field. Structure it with a clear introduction, body, and conclusion. Use Markdown for formatting (e.g., use ## for headings).

Your response must be in the specified JSON format.
  `,
});

const generateBlogPostFlow = ai.defineFlow(
  {
    name: 'generateBlogPostFlow',
    inputSchema: GenerateBlogPostInputSchema,
    outputSchema: GenerateBlogPostOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

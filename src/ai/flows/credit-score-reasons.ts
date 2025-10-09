'use server';
/**
 * @fileOverview Fetches and explains the reasons behind a user's credit score.
 *
 * - getCreditScoreReasons - A function that retrieves and explains the reasons for a user's credit score.
 * - CreditScoreReasonsInput - The input type for the getCreditScoreReasons function.
 * - CreditScoreReasonsOutput - The return type for the getCreditScoreReasons function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CreditScoreReasonsInputSchema = z.object({
  userId: z.string().describe('The ID of the user whose credit score reasons are being requested.'),
  onTimeRate: z.number().describe('The on time delivery rate of the user'),
  salesCount: z.number().describe('The number of sales the user has.'),
});
export type CreditScoreReasonsInput = z.infer<typeof CreditScoreReasonsInputSchema>;

const CreditScoreReasonsOutputSchema = z.object({
  reasons: z.array(z.string()).describe('An array of reasons explaining the user\'s credit score.'),
});
export type CreditScoreReasonsOutput = z.infer<typeof CreditScoreReasonsOutputSchema>;

export async function getCreditScoreReasons(input: CreditScoreReasonsInput): Promise<CreditScoreReasonsOutput> {
  return creditScoreReasonsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'creditScoreReasonsPrompt',
  input: {schema: CreditScoreReasonsInputSchema},
  output: {schema: CreditScoreReasonsOutputSchema},
  prompt: `You are an AI assistant that explains the reasons behind a farmer\'s credit score in a farmer co-op. Provide specific and helpful information.

Here are the factors contributing to the credit score:

User ID: {{userId}}
On-Time Delivery Rate: {{onTimeRate}}
Number of Sales: {{salesCount}}

Explain the reasons behind this credit score. Provide at least three reasons in the reasons array. Be specific about how each factor influences the score.`, 
});

const creditScoreReasonsFlow = ai.defineFlow(
  {
    name: 'creditScoreReasonsFlow',
    inputSchema: CreditScoreReasonsInputSchema,
    outputSchema: CreditScoreReasonsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

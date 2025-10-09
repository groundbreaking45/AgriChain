"use server";

import { getCreditScoreReasons, CreditScoreReasonsInput, CreditScoreReasonsOutput } from '@/ai/flows/credit-score-reasons';
import { z } from "zod";

const FormSchema = z.object({
  onTimeRate: z.coerce.number().min(0).max(100),
  salesCount: z.coerce.number().min(0),
});

export async function checkCreditScoreAction(prevState: any, formData: FormData) {
  try {
    const validatedFields = FormSchema.safeParse({
      onTimeRate: formData.get('onTimeRate'),
      salesCount: formData.get('salesCount'),
    });
  
    if (!validatedFields.success) {
      return {
        message: 'Invalid form data.',
        errors: validatedFields.error.flatten().fieldErrors,
        data: null,
      };
    }

    const input: CreditScoreReasonsInput = {
      userId: 'user-123-mock', // In a real app, this would come from the authenticated session
      onTimeRate: validatedFields.data.onTimeRate,
      salesCount: validatedFields.data.salesCount,
    };

    const result: CreditScoreReasonsOutput = await getCreditScoreReasons(input);
    
    // Simple logic to generate a score and grade based on reasons and inputs
    let score = 500;
    if (input.onTimeRate > 95) score += 150;
    else if (input.onTimeRate > 80) score += 75;

    if (input.salesCount > 100) score += 150;
    else if (input.salesCount > 20) score += 75;

    if (result.reasons.some(r => r.toLowerCase().includes('positive'))) score += 50;
    if (result.reasons.some(r => r.toLowerCase().includes('excellent'))) score += 100;
    
    score = Math.min(Math.max(score, 300), 900);
    
    let grade: 'A' | 'B' | 'C' = 'C';
    if (score > 700) grade = 'A';
    else if (score > 600) grade = 'B';

    return {
      message: 'Score calculated successfully.',
      errors: null,
      data: {
        score,
        grade,
        reasons: result.reasons,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred.',
      errors: null,
      data: null,
    };
  }
}

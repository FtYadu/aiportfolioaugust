'use server';

import { promises as fs } from 'fs';
import path from 'path';
import type { PortfolioItem } from './data';

export async function updatePortfolioData(
  updatedItems: PortfolioItem[]
): Promise<{ success: boolean; error?: string }> {
  try {
    const filePath = path.join(process.cwd(), 'Yadu_Projects_Database.json');
    
    // Reconstruct the JSON data in its original format before writing
    const dataToWrite = updatedItems.map(item => ({
        Name: item.Name,
        Status: item.Status,
        Category: item.category,
        Client: item.Client,
        Budget: item.Budget,
        'Start Date': item['Start Date'],
        'End Date': item['End Date'],
        'Cover Image': item['Cover Image'],
        Description: item.description,
        tags: item.tags || [],
    }));

    await fs.writeFile(filePath, JSON.stringify(dataToWrite, null, 2), 'utf8');
    
    return { success: true };
  } catch (error) {
    console.error('Failed to write portfolio data:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
}

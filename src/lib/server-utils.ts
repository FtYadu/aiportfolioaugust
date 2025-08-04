'use server';

export async function urlToDataUri(url: string): Promise<string> {
  if (!url) {
     return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  }
  try {
    const response = await fetch(url, { cache: 'force-cache' });
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText} for URL: ${url}`);
    }
    const blob = await response.blob();
    const buffer = Buffer.from(await blob.arrayBuffer());
    const base64 = buffer.toString('base64');
    return `data:${blob.type};base64,${base64}`;
  } catch (error) {
    console.error(`Error converting URL to data URI for ${url}:`, error);
    // Return a transparent 1x1 pixel as a fallback
    return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  }
}

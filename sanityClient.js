import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '469rh2fi', // Fallback to hardcoded ID
  dataset: 'production', // or your dataset name
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2023-10-01', // Use a specific API version
});

export default client; 
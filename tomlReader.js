import { readFileSync } from 'fs';
import { parse } from '@iarna/toml';

try {
  // Read the TOML file
  const tomlContent = readFileSync('AI_Coding_Style_Guide_prompts.toml', 'utf8');
  
  // Parse the TOML content
  const parsedData = parse(tomlContent);
  
  // Display the parsed data
  console.log('Parsed TOML data:', parsedData);
} catch (error) {
  console.error('Error reading or parsing TOML file:', error.message);
}
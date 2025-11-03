import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';

const MODEL_NAME = 'gemini-2.5-flash'; // Updated to the recommended alias
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  // Simpler model initialization for single-turn calls
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    // topK and topP are optional, removing if not strictly necessary can simplify
    // topK: 1,
    // topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    // ... your existing safety settings are correct ...
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  try {
    // 💡 THE KEY CHANGE: Passing the prompt string directly
    const result = await model.generateContent({
      contents: prompt, // Pass the prompt string directly
      generationConfig,
      safetySettings,
    });

    const response = result.response;
    const responseText = response.text();
    console.log(responseText);

    return responseText;
  } catch (error) {
    console.error('Error generating content:', error);
    return 'Error: Could not get a response from the AI model.';
  }
}

export default runChat;

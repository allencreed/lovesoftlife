
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export async function getArtisanAdvice(prompt: string) {
  if (!API_KEY) return "The Soft Life Guide is resting. Please configure API key.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the Soft Life Guide for lovesoftlife.com. Your tone is like a warm hug—gentle, reassuring, and poetic. You help ambitious but burnt-out individuals find permission to pause. You recommend rituals like digital sunsets, silk masks, and mindful breathing. Keep responses nurturing and concise. Use words like 'breathe', 'glow', 'sanctuary', and 'unwind'.",
      },
    });
    return response.text || "Breathe deeply. I'm having a moment of stillness. How else can I soothe your journey today?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Even guides need a pause. Please ask me again in a moment of clarity.";
  }
}

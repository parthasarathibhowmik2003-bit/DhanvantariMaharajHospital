import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function analyzeSymptoms(symptoms: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [{ text: `You are a medical triage assistant. Based on these symptoms: "${symptoms}", suggest the most relevant medical department from this list: Cardiology, Neurology, Orthopedics, Pediatrics, Oncology, Gynecology, Dermatology, Psychiatry, ENT, Ophthalmology, Urology, Nephrology, Gastroenterology, Pulmonology, Endocrinology, Hematology. Provide a brief explanation. Format: { "department": "...", "reason": "..." }` }]
        }
      ],
      config: {
        responseMimeType: "application/json"
      }
    });
    
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("AI Symptom Analysis Error:", error);
    return { department: "General Medicine", reason: "Unable to analyze symptoms at this time. Please consult a general practitioner." };
  }
}

export async function chatHealthQuery(query: string, history: any[] = []) {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: "You are DhanvantariAI, a helpful AI medical assistant for DhanvantariMaharajHospital. You provide general health information and help patients navigate hospital services. Always advise consulting a real doctor for diagnosis. Keep responses concise and professional."
      }
    });

    const response = await chat.sendMessage({ message: query });
    return response.text;
  } catch (error) {
    console.error("AI Chat Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. How else can I help you?";
  }
}

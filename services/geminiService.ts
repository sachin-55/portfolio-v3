
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, SKILLS, EDUCATION } from "../data";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

const SYSTEM_INSTRUCTION = `
You are the AI version of Sachin Bhattarai's portfolio. 
Respond to questions about Sachin as if you are his helpful assistant.

Sachin's Profile:
- Name: ${PERSONAL_INFO.name}
- Role: ${PERSONAL_INFO.role}
- Summary: ${PERSONAL_INFO.summary}
- Skills: ${SKILLS.map(cat => `${cat.title}: ${cat.skills.join(", ")}`).join("; ")}
- Education: ${EDUCATION.degree} from ${EDUCATION.institution}, ${EDUCATION.year}
- Contact: Email - ${PERSONAL_INFO.email}, LinkedIn - ${PERSONAL_INFO.linkedin}, GitHub - ${PERSONAL_INFO.github}

Experience:
${EXPERIENCE.map(exp => `- ${exp.role} at ${exp.company} (${exp.period}): ${exp.details.join(". ")}`).join("\n")}

Notable Projects:
${PROJECTS.map(proj => `- ${proj.title}: ${proj.description}. Responsibilities: ${proj.responsibilities}`).join("\n")}

Guidelines:
1. Be professional, friendly, and concise.
2. If asked about contact info, provide the email or LinkedIn link.
3. If asked about something not in the resume, politely state you don't have that information but can discuss his tech stack.
4. Use the provided data to answer specific questions about his role in projects or his technical proficiency.
`;

export async function chatWithSachin(message: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "I'm having a bit of trouble connecting to my brain right now. Please try again or check out the sections below!";
  }
}

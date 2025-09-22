import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { name, email, phone, description } = req.body ?? {};

        if (!name || !email || !description) {
            return res.status(400).json({ error: "name, email and description are required" });
        }

        const { data, error } = await resend.emails.send({
            from: "Phantom Dev <onboarding@resend.dev>",
            to: "olasimboolajuwon@gmail.com",
            subject: `New Collab Message! from ${name}`,
            html: `
        <h2>New Inquiry from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Description:</strong> ${description}</p>
      `,
        });
        if (error) {
            console.error("Resend error:", error);
            return res.status(500).json({ error: "Failed to send email" });
        }

        return res.status(200).json({ success: true, id: data?.id });
    } catch (err) {
        console.error("send-email handler error:", err);
        return res.status(500).json({ error: err || "Internal server error" });
    }
}


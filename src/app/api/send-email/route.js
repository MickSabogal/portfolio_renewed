import nodemailer from "nodemailer";
import { generateEmailTemplate } from "./emailTemplate";


export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
            host: "smtp.mail.me.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.ICLOUD_USER,
                pass: process.env.ICLOUD_PASS,
            },
        });

        const htmlMessage = generateEmailTemplate(name, email, message);

        const mailOptions = {
            from: `"${name}" <${process.env.ICLOUD_USER}>`,
            replyTo: email,
            to: "micksabogal666@icloud.com",
            subject: `Nova mensagem do portfólio de ${name}`,
            text: `
        Nome: ${name}
        Email: ${email}
        Mensagem:
        ${message}
      `,
            html: htmlMessage,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        return new Response(
            JSON.stringify({ success: false, message: "Erro ao enviar email." }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

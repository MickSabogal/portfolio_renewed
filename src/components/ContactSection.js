"use client";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
    const { t } = useLanguage();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatus(t.contact.successMessage);
                e.target.reset();
            } else {
                setStatus(t.contact.errorMessage);
            }
        } catch (err) {
            console.error(err);
            setStatus(t.contact.connectionError);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contactos" className="contactos">
            <div className="center-wrap">
                <h2 className="contactos_title">{t.contact.title}</h2>

                <div className="contactos_content">
                    <form className="contactos_form" onSubmit={handleSubmit}>
                        <label>{t.contact.name}</label>
                        <input type="text" name="name" required />

                        <label>{t.contact.email}</label>
                        <input type="email" name="email" required />

                        <label>{t.contact.message}</label>
                        <textarea name="message" required />

                        <button type="submit" disabled={loading}>
                            {loading ? t.contact.sending : t.contact.send}
                        </button>

                        {status && (
                            <p style={{ color: "#21285c", marginTop: "10px" }}>{status}</p>
                        )}
                    </form>
                </div>

                <div className="contactos_buttons">
                    <a href="https://github.com/MickSabogal" target="_blank">
                        <Image src="/assets/github.svg" alt="GitHub" width={85} height={85} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/miguel-alejandro-sabogal-guzman/"
                        target="_blank"
                    >
                        <Image src="/assets/linkedin.svg" alt="LinkedIn" width={85} height={85} />
                    </a>

                    <a href="mailto:miguelsabogal666@icloud.com">
                        <Image src="/assets/envelope.svg" alt="Email" width={85} height={85} />
                    </a>
                </div>
            </div>
        </section>
    );
}

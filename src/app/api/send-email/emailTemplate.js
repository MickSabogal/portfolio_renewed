export function generateEmailTemplate(name, email, message) {
    return `
    <div style="
      background: linear-gradient(135deg, #0f122b, #21285c);
      color: #ffc71e;
      font-family: 'Pixelify Sans', sans-serif;
      padding: 30px;
      border-radius: 20px;
      max-width: 600px;
      margin: 0 auto;
    ">
      <h2 style="text-align: center; color: #f6ff00;">Nova mensagem do portfólio 💌</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <div style="background: #fff; color: #000; padding: 20px; border-radius: 15px; margin-top: 20px;">
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
      <p style="text-align: center; margin-top: 25px; font-size: 14px;">
        ✈️ Mensagem enviada via portfólio de Miguel Sabogal
      </p>
    </div>
  `;
}

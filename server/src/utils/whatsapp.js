import axios from "axios";

const instanceId = process.env.ULTRAMSG_INSTANCE_ID;
const token = process.env.ULTRAMSG_TOKEN;
const phone = process.env.ULTRAMSG_PHONE;
console.log("Phone no:", phone) // Phone number in format: 919876543210 (no + or spaces)

export async function sendMsgToWhatsApp(name, pdfUrl, subject) {
  const message = `Name: ${name}, Pdf URL: ${pdfUrl} Subject: ${subject}`;

  try {
    const res = await axios.post(`https://api.ultramsg.com/${instanceId}/messages/chat`, {
      token,
      to: phone, // Example: 919876543210 (no + or spaces)
      body: message,
      document: pdfUrl,
      filename: `${name}afc.pdf`,
      caption: "Application is attached."
    });
    console.log("✅ WhatsApp message sent:", res.data);
  } catch (err) {
    console.error("❌ Error sending WhatsApp:", err.response?.data || err.message);
  }
}

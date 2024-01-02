import nodemailer from "nodemailer";
// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD,
  },
});

async function handler(req, res) {
  console.log(req);
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      to: "connect@istiaqahmed.me",
      subject: data.subject,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
    };
    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
    res.status(200).json({ message: "Email sent successfully" });
  }
  res.status(500).json({ message: "Bad request" });
}

export default handler;

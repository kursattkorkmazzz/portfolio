"use server";
import nodemailler from "nodemailer";
import validator from "validator";

export default async function sendMail(opts: {
  email: string;
  fullname: string;
  message: string;
}) {
  try {
    const sanitizedInput = sanitizeInput(opts);

    const email_transporter = nodemailler.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      tls: {
        ciphers: "SSLv3",
      },
      requireTLS: false,
      debug: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASS,
      },
    });

    await email_transporter.sendMail({
      from: {
        name: sanitizedInput.fullname,
        address: process.env.EMAIL_USERNAME!,
      },
      to: process.env.EMAIL_USERNAME,
      subject: "[Website] Yeni bir müşteri mesajınız var",
      text: sanitizedInput.message + "\n\n\n" + "From: " + sanitizedInput.email,
    });
  } catch (err: any) {
    console.log(err);
    throw err;
  }
}

function sanitizeInput(opts: {
  email: string;
  fullname: string;
  message: string;
}) {
  // E-posta adresini temizle ve doğrula
  const email = validator.trim(opts.email || "");
  if (!validator.isEmail(email)) {
    throw new Error("Geçersiz e-posta adresi.");
  }

  // İsimde zararlı karakterleri temizle ve uzunluğunu sınırla
  let fullname = validator.trim(opts.fullname || "");
  fullname = validator.escape(fullname).slice(0, 64);
  if (fullname.length < 2) {
    throw new Error("İsim çok kısa.");
  }

  // Mesajı temizle, uzunluğunu sınırla ve zararlı karakterleri kaçır
  let message = validator.trim(opts.message || "");
  message = validator.escape(message).slice(0, 1000);
  if (message.length < 5) {
    throw new Error("Mesaj çok kısa.");
  }

  return { email, fullname, message };
}

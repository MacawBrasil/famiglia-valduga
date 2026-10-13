import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

function booleanSetting(value: string | undefined, fallback: boolean): boolean {
  if (value === undefined || value === "") return fallback;
  if (value === "true") return true;
  if (value === "false") return false;
  throw new Error("As opções SMTP de TLS devem ser true ou false");
}

export function getSmtpOptions(): SMTPTransport.Options {
  const env = process.env;
  const host = env.SMTP_HOST;
  const port = Number(env.SMTP_PORT || 587);
  if (!host) throw new Error("SMTP_HOST não configurado");
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("SMTP_PORT inválido");
  }
  if (Boolean(env.SMTP_USER) !== Boolean(env.SMTP_PASS)) {
    throw new Error("Configure SMTP_USER e SMTP_PASS juntos");
  }
  const secure = booleanSetting(env.SMTP_SECURE, port === 465);
  return {
    host,
    port,
    secure,
    requireTLS: booleanSetting(env.SMTP_REQUIRE_TLS, !secure),
    auth: env.SMTP_USER
      ? { user: env.SMTP_USER, pass: env.SMTP_PASS }
      : undefined,
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 30000,
    disableFileAccess: true,
    disableUrlAccess: true,
  };
}

export async function sendEmail(message: Mail.Options) {
  const env = process.env;
  if (!env.SMTP_FROM) throw new Error("SMTP_FROM não configurado");
  const transport = nodemailer.createTransport(getSmtpOptions());
  const result = await transport.sendMail({ ...message, from: env.SMTP_FROM });
  if (result.rejected.length)
    throw new Error("O servidor SMTP rejeitou destinatários");
  return result;
}

// Uma mensagem por destinatário mantém a privacidade dos endereços.
export async function sendEmailToEach(message: Mail.Options) {
  const recipients = Array.isArray(message.to)
    ? message.to
    : message.to
      ? [message.to]
      : [];
  if (!recipients.length) throw new Error("Destinatário não configurado");
  return Promise.all(recipients.map((to) => sendEmail({ ...message, to })));
}

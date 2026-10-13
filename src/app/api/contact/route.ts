import { sendEmail } from "../../../lib/smtp-mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const res = await req.json();
  try {
    await sendEmail({
      to: "desenvolvimento2@macawbrasil.com.br",

      subject: `Nova mensagem vinda do site Famiglia Valduga - Contato`,
      replyTo: res.email,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="pt">
          <body>
            <div style="margin-left: 20px;margin-right: 20px; font-family: sans-serif;">
              <p><b>Nome:</b> ${res.name}</p>
              <p><b>E-mail:</b> ${res.email}</p>
              <p><b>Telefone:</b> ${res.phone}</p>
              <div style="font-size: 16px;">
                <b>Mensagem:</b><br />
                <p>${res.message}</p>
              </div>
            </div>
          </body>
        </html>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.log(error);
    return new Response("Error", { status: 400 });
  }
}

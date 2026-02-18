import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_PASSWORD);
const from = process.env.RESEND_FROM_EMAIL || 'kontakt@tomaszrosik.pl';
const to = process.env.RESEND_TO_EMAIL || 'tomasz.rosik82@gmail.com';

export const sendMail = async ({
  name,
  message,
}: {
  name: string;
  message: string;
}) => {
  const body = `<div><p>Od: ${name}</p><p>Treść: ${message}</p></div>`;

  try {
    resend.emails.send({
      from,
      to,
      subject: 'Kontakt z portfolio',
      html: body,
    });

    return {
      message: 'Contact request send succesfully',
      status: true,
    };
  } catch (err) {
    console.error(err);
    return {
      message: 'Contact request error',
      status: false,
    };
  }
};

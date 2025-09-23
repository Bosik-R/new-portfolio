import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export const sendMail = async ({
  name,
  body,
}: {
  name: string;
  body: string;
}) => {
  const { NEXT_PUBLIC_SMTP_EMAIL, NEXT_PUBLIC_SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: NEXT_PUBLIC_SMTP_EMAIL,
      pass: NEXT_PUBLIC_SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (err) {
    console.log(err);
    return { message: 'server currently unavailable', status: false };
  }
  const subject = `Contact request send from ${name}`;

  try {
    const response: SMTPTransport.SentMessageInfo = await transport.sendMail({
      to: NEXT_PUBLIC_SMTP_EMAIL,
      subject,
      html: body,
    });
    return {
      message: !!response.accepted
        ? 'Contact request send succesfully'
        : 'Something went wrong, try again later',
      status: !!response.accepted,
    };
  } catch (error) {
    console.log(error);
    return { message: 'server currently unavailable', status: false };
  }
};

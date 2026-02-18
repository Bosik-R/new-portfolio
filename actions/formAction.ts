'use server';

import { sendMail } from '@/lib/sendMail';

export const contactMeAction = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;

  if (name && message) {
    const res: { message: string; status: boolean } = await sendMail({
      name,
      message,
    });

    return res;
  }
};

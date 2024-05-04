'use client';

import { contactMeAction } from '@/actions/formAction';
import { createRef, useState } from 'react';

const ContactForm = () => {
  const [message, setMessage] = useState<string>('message send');

  const formRef = createRef<HTMLFormElement>();

  const send = async (formData: FormData) => {
    const res = await contactMeAction(formData);

    if (res?.status) {
      formRef.current?.reset();
      setMessage(res.message);
    }
  };

  return (
    <form
      ref={formRef}
      action={send}
      className='glass-card px-14 pt-10 pb-16 max-w-[400px] flex flex-col items-center gap-3'>
      <h3 className='font-bold text-grayLight pb-5 text-center'>contact me</h3>
      <div className={`relative pt-6 w-full`}>
        <label
          htmlFor={'name'}
          className='text-base text-grayLight leading-4 px-1 absolute top-0 z-10'>
          {'Name / Company'}
        </label>
        <input
          id={'name'}
          name='name'
          className={
            'text-lg focus:outline-2 focus:outline-grayLight active:outline-grayLight outline rounded-md outline-1 outline-gray-500 px-4 py-3 text-grayLight font-medium w-full bg-transparent'
          }
        />
      </div>
      <div className={`relative pt-6 w-full`}>
        <label
          htmlFor={'message'}
          className='text-base text-grayLight leading-4 px-1 absolute top-0 z-10'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          maxLength={300}
          className={
            'max-h-[400px] min-h-24 text-lg focus:outline-2 focus:outline-grayLight active:outline-grayLight outline rounded-md outline-1 outline-gray-500 px-4 py-3 text-grayLight font-medium w-full  bg-transparent'
          }
        />
      </div>
      <button
        type='submit'
        className='w-full font-semibold tracking-[2px] text-xl text-grayLight rounded-xl px-5 py-2 hover:text-[#040011] border border-grayLight hover:font-extrabold hover:bg-grayLight'>
        send message
      </button>
      {message ? (
        <span className='absolute bottom-3 left-1/2 text-sm -translate-x-1/2 px-4 py-3 text-grayLight bg-green-800 rounded-lg w-max'>
          {message}
        </span>
      ) : null}
    </form>
  );
};

export default ContactForm;

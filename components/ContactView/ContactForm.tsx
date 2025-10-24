'use client';

import { contactMeAction } from '../../actions/formAction';
import { createRef, useState } from 'react';

const ContactForm = () => {
  const [message, setMessage] = useState<string>('');

  const formRef = createRef<HTMLFormElement>();

  const send = async (formData: FormData) => {
    const res = await contactMeAction(formData);

    if (res?.status) {
      formRef.current?.reset();
      setMessage(res.message);
      setTimeout(() => {
        setMessage('');
      }, 2000);
    }
  };

  return (
    <form
      ref={formRef}
      action={send}
      className='px-10 max-w-[400px] flex flex-col items-center gap-5 relative z-50'>
      <h3 className='font-bold text-[#f0f0f0] pb-5 text-center'>contact me</h3>
      <div className={`relative pt-6 w-full`}>
        <label
          htmlFor={'name'}
          className='text-base text-[#f0f0f0] leading-4 px-1 absolute top-0 z-10'>
          {'name / company'}
        </label>
        <input
          id={'name'}
          name='name'
          className={
            'text-lg outline-2 outline-[#f0f0f0] rounded-md px-4 py-3 text-[#f0f0f0] font-medium w-full bg-transparent'
          }
        />
      </div>
      <div className={`relative pt-6 w-full`}>
        <label
          htmlFor={'message'}
          className='text-base text-[#f0f0f0] leading-4 px-1 absolute top-0 z-10'>
          message
        </label>
        <textarea
          id='message'
          name='message'
          maxLength={300}
          className={
            'max-h-[400px] min-h-24 text-lg outline-2 outline-[#f0f0f0] rounded-md px-4 py-3 text-[#f0f0f0] font-medium w-full bg-transparent'
          }
        />
      </div>
      <button
        type='submit'
        className='w-full font-semibold tracking-[2px] text-xl text-[#f0f0f0] rounded-lg px-5 py-2 hover:text-[#040011] border border-[#f0f0f0] hover:font-extrabold hover:bg-[#f0f0f0] duration-300 cursor-pointer'>
        send message
      </button>
      {message ? (
        <span className='absolute bottom-3 left-1/2 text-sm -translate-x-1/2 px-4 py-3 text-[#f0f0f0] bg-green-800 rounded-lg w-max'>
          {message}
        </span>
      ) : null}
    </form>
  );
};

export default ContactForm;

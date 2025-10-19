import ContactDataWithMap from '@/components/ContactView/ContactDataWithMap';
import ContactForm from '@/components/ContactView/ContactForm';
import ContactWrapper from '@/components/ContactView/ContactWrapper';

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactForm />
      <ContactDataWithMap />
    </ContactWrapper>
  );
};

export default Contact;

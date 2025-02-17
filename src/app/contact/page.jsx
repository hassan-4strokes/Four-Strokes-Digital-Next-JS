import ContactHero from "@/components/hero/ContactHero";
import ContactFormSection from "@/components/section/ContactFormSection";
import { contactMetaData } from "@/data/meta/PagesMetaData";

export const metadata = {
  title: contactMetaData.title,
  description: contactMetaData.description,
  keywords: contactMetaData.focusKeyWord,
  alternates: {
    canonical: contactMetaData.canonical
  }
};

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
    </>
  );
};

export default Contact;

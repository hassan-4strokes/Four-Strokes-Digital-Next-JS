import Navbar from "@/utils/navbar/Navbar";
import ContactHero from "@/components/hero/ContactHero";
import ContactFormSection from "@/components/section/ContactFormSection";
import Footer from "@/utils/footer/Footer";
import { contactMetaData } from "@/data/meta/PagesMetaData";

export const metadata = {
  title: contactMetaData.title,
  description: contactMetaData.description,
  keywords: contactMetaData.focusKeyWord,
  alternates: {
    canonical: contactMetaData.canonical,
  },
};

const Contact = () => {
  return (
    <>
      <Navbar pageName={"Contact"} />
      <ContactHero />
      <ContactFormSection />
      <Footer />
    </>
  );
};

export default Contact;

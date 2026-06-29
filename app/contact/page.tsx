import Hero from "@/components/contact/Hero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import BusinessHours from "@/components/contact/BusinessHours";
import Map from "@/components/contact/Map";
import FinalCTA from "@/components/sections/FinalCTA";

export default function ContactPage() {
  return (
    <>
      <Hero />
      <ContactCards />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <BusinessHours />
        </div>
      </section>

      <Map />

      <FinalCTA />
    </>
  );
}

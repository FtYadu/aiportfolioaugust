import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-24 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
            Have a question, a project proposal, or just want to say hello? I'd love to hear from you.
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}

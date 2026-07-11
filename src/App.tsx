import { DemoVideoSection } from "./components/DemoVideoSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IntakeForm } from "./components/IntakeForm";
import { ProductShowcase } from "./components/ProductShowcase";

function App() {
  return (
    <div className="min-h-screen bg-[#0D0F12] relative flex flex-col font-sans text-slate-200 selection:bg-indigo-500/30 selection:text-white">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="grow">
          <Hero />
          <section className="px-4 pb-12">
            <div className="max-w-5xl mx-auto">
              <ProductShowcase />
            </div>
          </section>
          <DemoVideoSection />
          <section className="pb-24 px-4">
            <div className="max-w-7xl mx-auto">
              <IntakeForm />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;

import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { IntakeForm } from "./components/IntakeForm"


function App() {

  return (
    <div className="min-h-screen bg-[#0D0F12] flex flex-col font-sans text-slate-200 selection:bg-indigo-500/30 selection:text-white">
    <Header />
    
    <main className="grow">
      <Hero />
      <section className="pb-24 px-4">
          <div className="max-w-7xl mx-auto">
            <IntakeForm />
          </div>
        </section>
    </main>

    <Footer />
  </div>
  )
}

export default App

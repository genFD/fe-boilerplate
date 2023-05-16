import { Head, Header, Footer } from '@/shared';

export function Home() {
  return (
    <>
      <Head description="Welcome to feedbacks" />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

function Hero() {
  return (
    <div className="mt-auto bg-slate-800 w-full h-8 text-slate-2 dark:text-slate-0 text-12 lg:text-14 font-Ibm">
      Hero
    </div>
  );
}

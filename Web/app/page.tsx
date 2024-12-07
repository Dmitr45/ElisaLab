'use client';
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import { AppContextProvider } from "@/app/context/ContextProvider";
import { Routing } from "@/app/pages/Routing/";



export default function Home() {

  return (
<AppContextProvider>
      <header>
        <Header/>
      </header>
      <main>
          <Routing/>
      </main>
      <footer>
        <Footer/>
      </footer>
</AppContextProvider>
  );
}

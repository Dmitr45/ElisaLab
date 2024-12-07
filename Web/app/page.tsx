'use client';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { AppContextProvider } from "./context/ContextProvider";
import { Routing } from "./pages/Routing/";



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

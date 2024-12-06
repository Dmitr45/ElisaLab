'use client';
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import {AppContextProvider} from "@/app/context/ContextProvider";
// import { Authorization } from "@/app/pages/Auth/";
// import { Registration } from "@/app/pages/Registration/";
import { Start } from "@/app/pages/Start/index";





export default function Home() {


  return (
<AppContextProvider>
      <header>
        <Header/>
      </header>
      <main>
        {/* <Authorization/> */}
        {/* <Registration/> */}
        <Start/>
      </main>
      <footer>
        <Footer/>
      </footer>
</AppContextProvider>
  );
}

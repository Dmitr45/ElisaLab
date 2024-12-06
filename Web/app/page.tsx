'use client';
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import {AppContextProvider} from "@/app/context/ContextProvider";
import { useEffect } from "react";
import { Authorization } from "@/app/pages/auth/";
import { Registration } from "@/app/pages/Registration/"





export default function Home() {

  const style = {
    marginRight: 10,
  }


  return (
<AppContextProvider>
      <header>
        <Header/>
      </header>
      <main>
        <Authorization/>
        {/* <Registration/> */}
      </main>
      <footer>
        <Footer/>
      </footer>
</AppContextProvider>
  );
}

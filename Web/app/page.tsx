'use client';
import Header from "@/app/components/Header/Header"
import {AppContextProvider} from "@/app/context/ContextProvider";
import { useEffect } from "react";
import Authorization from "@/app/pages/auth/";





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
      </main>
      <footer>

      </footer>
</AppContextProvider>
  );
}

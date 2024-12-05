'use client';
import {AppContextProvider} from "@/app/context/ContextProvider";
import { useEffect } from "react";
import Authorization from "@/app/pages/auth/";





export default function Home() {

  const style = {
    marginRight: 10,
  }


  return (
    <div>
      <main>
        <AppContextProvider>
          <Authorization/>
        </AppContextProvider>
      </main>
    </div>
  );
}

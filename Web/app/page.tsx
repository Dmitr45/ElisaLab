'use client';
import {AppContextProvider} from "./context/ContextProvider";
import { createContext, useContext, useState } from "react";
import StartPage from "./components/StartPage/StartPage";




export default function Home() {
  return (
    <div>
      <main>
        <AppContextProvider>
          <StartPage/>
        </AppContextProvider>
      </main>
    </div>
  );
}

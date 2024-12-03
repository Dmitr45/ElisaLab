'use client';
import {AppContextProvider} from "./context/ContextProvider";
import { createContext, useContext, useState } from "react";
import StartPage from "./components/PausePage/StartPage";




export default function Home() {
  const ThemeContext = createContext("darck");

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

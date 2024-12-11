'use client';
import { useState } from "react";
import Countdown from 'react-countdown'; //https://www.npmjs.com/package/react-countdown
import styles from "./styles.module.scss";



type StartTimer = {
  total?: number,
  hours: number,
  minutes: number,
  seconds: number,
  completed: boolean 
  }



export function TimerService(){

const [ deltaTime, setDeltaTime ] = useState<number>(10000000);

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({total, hours, minutes, seconds, completed }: StartTimer) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{total}: {hours}:{minutes}:{seconds}</span>
  }
};



return(
  <>
  <Countdown 
    date={Date.now() + deltaTime}
    renderer={renderer}
  />
  </>
)}
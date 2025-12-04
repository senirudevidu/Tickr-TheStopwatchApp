import React, { useState, useEffect, useRef, createContext } from "react";
import "./Clock.css";
import Button from "./Button.jsx";

export const ButonContext = createContext();

function Clock() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [isRunning]);

  function start() {
    console.log("start clicked");
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    console.log("startTimeRef.current:", startTimeRef.current);
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setIsRunning(false);
    setElapsedTime(0);
  }
  function formatTime() {
    let totalSeconds = Math.floor(elapsedTime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <div className="clock">
      <div className="display">{formatTime(elapsedTime)}</div>

      <div className="btns">
        <div className="start-btn">
          <Button type="Start" onclick={start} />
        </div>
        <div className="stop-btn">
          <Button type="Stop" onclick={stop} />
        </div>
        <div className="reset-btn">
          <Button type="Reset" onclick={reset} />
        </div>
      </div>
    </div>
  );
}
export default Clock;

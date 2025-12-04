import React, { useState, useEffect, useRef, createContext } from "react";
import "./Clock.css";
import Button from "./Button.jsx";
import Lap from "./Lap.jsx";

export const ButonContext = createContext();

function Clock() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
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

  function lap() {
    const newLap = formatTime(elapsedTime);
    setLaps((prevLaps) => [...prevLaps, newLap]);
    console.log("Lap times:", laps);
  }
  function formatTime() {
    let totalSeconds = Math.floor(elapsedTime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
  }

  return (
    <>
      <div className="clock">
        <div className="display">{formatTime(elapsedTime)}</div>

        <div className="btns">
          <div className={`${isRunning ? "lap" : "reset"}-btn`}>
            <Button
              type={isRunning ? "Lap" : "Reset"}
              onclick={isRunning ? lap : reset}
            />
          </div>

          <div className={`${isRunning ? "stop" : "start"}-btn`}>
            <Button
              type={isRunning ? "Stop" : "Start"}
              onclick={isRunning ? stop : start}
            />
          </div>
        </div>
      </div>
      <Lap laps={laps} />
    </>
  );
}
export default Clock;

import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";

interface TimerProps {
  onTimeUp: () => void;
  timerStop: boolean;
}

const Timer: React.FC<TimerProps> = ({ onTimeUp, timerStop }) => {
  const [timeLeft, setTimeLeft] = useState<number>(10 * 60); // 20 минут в секундах
  const timeLeftRef = useRef<number>(20 * 60);

  useEffect(() => {
    timeLeftRef.current = timeLeft;
  }, [timeLeft]);

  useEffect(() => {
    const updateTimer = () => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          onTimeUp();
          return 0;
        } else if (timerStop) {
          return prevTime;
        }
        return prevTime - 1;
      });
    };

    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [timerStop]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  return (
    <Box
      sx={{
        minWidth: "70px",
        height: "30px",
        display: "flex",
        border: "solid 2px black",
        borderRadius: "5px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </Box>
  );
};

export default Timer;

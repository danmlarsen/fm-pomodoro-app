import { useEffect, useRef, useState } from 'react';

export function useTimer(totalTime: number) {
  const [timeleft, setTimeleft] = useState<number>(totalTime * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const startTimeRef = useRef<number | null>(null);
  const elapsedTimeSecondsRef = useRef<number>(0);
  const currentTotaltimeMinutesRef = useRef<number>(totalTime);

  function resetTimer(totalTime: number) {
    startTimeRef.current = null;
    currentTotaltimeMinutesRef.current = totalTime;
    elapsedTimeSecondsRef.current = 0;
    setTimeleft(totalTime * 60);
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedTimeSecondsRef.current;

      interval = setInterval(() => {
        if (startTimeRef.current !== null) {
          const elapsedSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
          const newTimeleft = Math.max(currentTotaltimeMinutesRef.current * 60 - elapsedSeconds, 0);
          setTimeleft(newTimeleft);

          if (newTimeleft === 0) {
            setIsRunning(false);
            if (interval) clearInterval(interval);
          }
        }
      }, 100);
    } else if (!isRunning && startTimeRef.current !== null) {
      elapsedTimeSecondsRef.current = Date.now() - startTimeRef.current;
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  return { timeleft, isRunning, setIsRunning, resetTimer };
}

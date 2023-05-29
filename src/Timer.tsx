import { useState, useEffect } from 'react';
import Clock from './Clock';

type TimerProps = {
    time: number,
    onTimeout: () => void
}

export default function Timer({ time, onTimeout }: TimerProps) {

    const [seconds, setSeconds] = useState(time);

    useEffect(() => {
        if (seconds <= 0) {
            onTimeout();
            return;
        }

        const intervalId = setInterval(() => {
            setSeconds(secs => secs - 1);
        })

        return () => clearInterval(intervalId)
    }, [time])
    

    return (
        <Clock secs={ seconds } />
    )
}


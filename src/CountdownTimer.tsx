import React, {useEffect, useState} from 'react';
import CountdownClock from "./CountdownClock";
import CountdownModes from "./CountdownModes";

interface CountdownTimerProps {
    readonly mode?: CountdownModes;
    onTick?: (timeLeft: number) => void;
}

const CountdownTimer = ({mode = CountdownModes.HOLDING, onTick}: CountdownTimerProps) => {

    const [timeLeft,setTimeLeft] = useState(9);
    useEffect(() => {
       setTimeout(() => {
           if (mode === CountdownModes.COUNTING) {
               const decrementedTimeLeft = timeLeft - 1;
               setTimeLeft(() => {
                   if (onTick) {
                       onTick(decrementedTimeLeft);
                   }
                   return decrementedTimeLeft;
               });
           }
       }, 1000);
    });

    return (
        <CountdownClock timeLeft={timeLeft}/>
    );
};

export default CountdownTimer;

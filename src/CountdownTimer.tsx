import React, {useEffect, useState} from 'react';
import CountdownTimerInterface from "./CountdownTimerInterface";
import CountdownModes from "./CountdownModes";
import CountdownClock from "./CountdownClock";

const CountdownTimer = ({mode = CountdownModes.HOLDING, onTick}: CountdownTimerInterface) => {

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

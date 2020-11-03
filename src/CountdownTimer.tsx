import React, {useEffect, useState} from 'react';
import CountdownTimerInterface from "./CountdownTimerInterface";
import CountdownModes from "./CountdownModes";

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
    const absTimeLeft = Math.abs(timeLeft);
    const hours =  Math.floor((absTimeLeft / (60 * 60)) % 24);
    const minutes = Math.floor((absTimeLeft / 60 ) % 60);
    const seconds = Math.floor(absTimeLeft % 60);
    return (
        <h1 id="countdown">T{timeLeft > 0? '-' : '+'}{hours>9? '':'0'}{hours}:{minutes>9? '':'0'}{minutes}:{seconds>9? '':'0'}{seconds}</h1>
    );
};

export default CountdownTimer;

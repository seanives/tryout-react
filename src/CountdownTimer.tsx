import React, {useEffect, useState} from 'react';
import CountdownClock from "./CountdownClock";
import CountdownModes from "./CountdownModes";

interface CountdownTimerProps {
    readonly mode?: CountdownModes;
    onTick?: (timeLeft: number) => void;
}

const CountdownTimer = ({mode = CountdownModes.HOLDING, onTick}: CountdownTimerProps) => {

    const [timeLeft,setTimeLeft] = useState(9);

    // TODO: implement timer logic here!

    return (
        <CountdownClock timeLeft={timeLeft}/>
    );
};

export default CountdownTimer;

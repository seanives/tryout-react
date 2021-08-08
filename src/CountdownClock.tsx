import React from 'react';

interface CountdownClockProps {
    timeLeft: number;
}

const CountdownClock = ({timeLeft}: CountdownClockProps) => {

    const absTimeLeft = Math.abs(timeLeft);
    const hours =  Math.floor((absTimeLeft / (60 * 60)) % 24);
    const minutes = Math.floor((absTimeLeft / 60 ) % 60);
    const seconds = Math.floor(absTimeLeft % 60);
    return (
        <h1 id="countdown">T{timeLeft > 0? '-' : '+'}{hours>9? '':'0'}{hours}:{minutes>9? '':'0'}{minutes}:{seconds>9? '':'0'}{seconds}</h1>
    );
};

export default CountdownClock;

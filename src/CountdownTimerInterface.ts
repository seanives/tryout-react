import CountdownModes from "./CountdownModes";

interface CountdownTimerInterface {
    readonly mode?: CountdownModes;
    onTick?: (timeLeft: number) => void;
}

export default CountdownTimerInterface
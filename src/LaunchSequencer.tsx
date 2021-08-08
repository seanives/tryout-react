import React, {useState} from 'react';
import RocketLauncher from "./RocketLauncher";
import LaunchCommands from "./LaunchCommands";
import CountdownModes from "./CountdownModes";
import CountdownTimer from "./CountdownTimer";

const LaunchSequencer = () => {

    const [launchCommand, setLaunchCommand] = useState(LaunchCommands.STANDBY);
    const [countdownMode, setCountdownMode] = useState(CountdownModes.HOLDING);

    return (
        <div>
            <CountdownTimer mode={countdownMode}/>
            <RocketLauncher command={launchCommand}/>
        </div>
    );
}

export default LaunchSequencer;

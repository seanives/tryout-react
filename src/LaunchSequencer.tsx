import React from 'react';
import RocketLauncher from "./RocketLauncher";
import LaunchCommands from "./LaunchCommands";
import CountdownModes from "./CountdownModes";
import CountdownTimer from "./CountdownTimer";

class LaunchSequencer extends React.Component<any,{ launchCommand: LaunchCommands, countdownMode: CountdownModes }> {

    constructor(props: any) {
        super(props);
        this.state = {
            launchCommand: LaunchCommands.STANDBY,
            countdownMode: CountdownModes.HOLDING
        };
    }

    render() {
        return (
            <div>
                <CountdownTimer mode={this.state.countdownMode}/>
                <RocketLauncher command={this.state.launchCommand}/>
            </div>
        );
    }
}

export default LaunchSequencer;

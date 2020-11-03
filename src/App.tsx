import React from 'react';
import RocketLauncher from "./RocketLauncher";
import LaunchCommands from "./LaunchCommands";
import CountdownModes from "./CountdownModes";
import CountdownTimer from "./CountdownTimer";

class Button extends React.Component<{
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}> {
    render() {
        return <button onClick={this.props.onClick}>Start</button>;
    }
}

class App extends React.Component<any,{ launchCommand: LaunchCommands, countdownMode: CountdownModes }> {

    constructor(props: any) {
        super(props);
        this.state = {
            launchCommand: LaunchCommands.STANDBY,
            countdownMode: CountdownModes.HOLDING
        };
        this.onTick = this.onTick.bind(this);
    }

    onTick(timeLeft: number) {
        switch(timeLeft) {
            case 3:
                this.setState({launchCommand: LaunchCommands.IGNITION_START});
                break;
            case 0:
                this.setState({launchCommand: LaunchCommands.TAKEOFF});
                break;
        }
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.setState({ countdownMode: CountdownModes.COUNTING })}/>
                <CountdownTimer mode={this.state.countdownMode} onTick={this.onTick} />
                <RocketLauncher command={this.state.launchCommand}/>
            </div>
        );
    }
}

export default App;

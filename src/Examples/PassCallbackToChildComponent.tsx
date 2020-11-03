import React from "react";

/**
 * Tryout React
 *
 * Example of passing an event handler callback to a child component to modify state on the parent
 */
class Button extends React.Component<{
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}> {
    render() {
        return <button onClick={this.props.onClick}>Increment</button>;
    }
}

class App extends React.Component<any,{ counter: number }> {

    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.setState({ counter: this.state.counter + 1 })}/>
                <h1>{this.state.counter}</h1>
            </div>
        );
    }
}

export default App;


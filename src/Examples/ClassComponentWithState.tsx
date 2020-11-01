import React from "react";

/**
 * Tryout React
 *
 * Admittedly contrived example of a class-based component using state
 */
class Hello extends React.Component<any,{ name: string | null }> {

    constructor(props: any) {
        super(props);
        this.state = {
            name: null
        };
    }

    setName(name: string) {
        this.setState({name});
    }

    render(){
        if (this.state.name) {
            return <div>Hello {this.state.name}!</div>
        } else {
            return <button onClick={() => this.setName('Sean')}>Say Hello</button>;
        }
    }
}

export default Hello;
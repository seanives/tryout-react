import React from "react";

/**
 * Tryout React
 *
 * Admittedly contrived example of a class-based component using props
 */
class Hello extends React.Component<{ name?: string }> {

    render(){
        if (this.props.name) {
            return <div>Hello {this.props.name}!</div>
        }
        return <div>Hello Stranger!</div>
    }
}

export default Hello;
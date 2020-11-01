import React from "react";

/**
 * Tryout React
 *
 * Admittedly contrived example of a function-based component using props
 */
function Hello (props: { name?: string }) {
    if (props.name) {
        return <div>Hello {props.name}!</div>;
    }
    return <div>Hello Stranger!</div>;
}

export default Hello;
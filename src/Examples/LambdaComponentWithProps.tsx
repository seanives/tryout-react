import React from "react";

/**
 * Tryout React
 *
 * Example of alternative lambda function syntax for component using props
 */
const Hello = (props: { name?: string }) => (
        props.name?
            <div>Hello {props.name}!</div>
        :
            <div>Hello Stranger!</div>
    );

export default Hello;
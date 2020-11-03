import React, {useState} from "react";

/**
 * Tryout React
 *
 * Admittedly contrived example of a function-based component using state
 */
function Hello () {
    const initialState: { name: string | null } = { name: null };
    const [name, setName] = useState(initialState);

    if (name) {
        return <div>Hello {name}!</div>
    } else {
        return <button onClick={() => setName({name: "Sean"})}>Say Hello</button>;
    }
}

export default Hello;


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./Components/SubComponents/StateProvider";
import reducer, { initialState } from "./Components/SubComponents/Reducer";

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
    , document.getElementById("root"));

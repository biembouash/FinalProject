import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createRoot } from 'react-dom/client';

//Gets the reference to the div with id = 'root' of the index.html
const element: HTMLElement= document.getElementById('root') as HTMLElement ;

//Renders the App
const root = createRoot(element);
root.render(<App />)
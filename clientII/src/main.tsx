import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createRoot } from 'react-dom/client';

const element: HTMLElement= document.getElementById('root') as HTMLElement ;
const root = createRoot(element);
root.render(<App />)
import React from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home'
import App from './components/App'
import ErrorPage from './components/ErrorPage';

import About from './components/About'
import Play from './components/Play'

import Hearts from './components/games/deck/hearts/Hearts'
import Spades from './components/games/deck/spades/Spades'

// import Play from './components/Play'

const appElement = document.getElementById('app');
const root = createRoot(appElement);
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "play",
                element: <Play />
            },
            {
                path: "play/hearts",
                element: <Hearts />
            },
            {
                path: "play/spades",
                element: <Spades />
            }
        ]
    }
])

root.render( <RouterProvider router={router}/>);
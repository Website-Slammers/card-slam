import React from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home'
import App from './components/App'
import ErrorPage from './components/ErrorPage';

import About from './components/About'
// import Play from './components/Play'

import Blackjack from './components/games/deck/blackjack/Blackjack';
import Hearts from './components/games/deck/hearts/Hearts'
import OhHell from './components/games/deck/oh-hell/OhHell';
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
            // {
            //     path: "play",
            //     element: <Play />
            // },
            {
                path: "blackjack",
                element: <Blackjack />
            },
            {
                path: "hearts",
                element: <Hearts />
            },
            {
                path: "oh-hell",
                element: <OhHell />
            },
            {
                path: "spades",
                element: <Spades />
            }
        ]
    }
])

root.render( <RouterProvider router={router}/>);
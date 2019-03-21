import React from 'react';
import Home from './home';
import Head from 'next/head';

const App = () => (
    <div>
        <Head>
            <link rel="stylesheet" href="../static/bulma.css" />
        </Head>
        <Home />
    </div>
);

export default App;
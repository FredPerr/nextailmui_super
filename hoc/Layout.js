import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';

import { mui_theme } from '../helpers/themeMUI';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Layout = ({children}) => {
    return (
        <ThemeProvider theme={mui_theme}>
            <Head>
                <title>Norrep Digital</title>
                <meta name="description" content="Grow your Business with our Digital Marketing Plans and a Customized and Optimized Website." />
                <meta name="keywords" content="grow, digital marketing, optimize, customized website, advertisement"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>

        </ThemeProvider>
    )
}


export default Layout;
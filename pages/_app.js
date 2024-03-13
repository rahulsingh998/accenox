import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";

import Head from "next/head";
import AdminLayout from "@/src/components/_App/Layout";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css";

import '../styles/remixicon.css'
import 'react-tabs/style/react-tabs.css';

// Chat Styles
import '../styles/chat.css'
// Globals Styles
import '../styles/globals.css'
// Rtl Styles
import '../styles/rtl.css'
// Dark Mode Styles
import '../styles/dark.css'
// Left Sidebar Dark Mode Styles
import '../styles/leftSidebarDark.css'
// Theme Styles
import theme from '../styles/theme'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
export default function App({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter()
  const { asPath } = router
  const adminPaths = ['/admin', '/admin/*'];
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);
   if (adminPaths.some(path => router.pathname.match(path))){
    return (
   
         <ThemeProvider theme={theme}>
           <CssBaseline />
           <AdminLayout >
            <Head>
            <link rel="stylesheet" href="/assets/css/admin.css" />
            </Head>
             <Component {...pageProps} />
           </AdminLayout>
         </ThemeProvider>
     );
   } else
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Title */}
        <title>Accenox</title>
        {/* Favicon Icon */}
      </Head>
      {!loaded && <PreLoader />}
      {loaded && <Component {...pageProps} />}
    </Fragment>
  );
}

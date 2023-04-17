import React from "react";
import Foot from "./components/Foot";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Navbar from "./components/Navbar";
import TopNav from "./components/NavTop";
import styles from "./home.module.css"

// import styles from './home.module.css'

export default function home() {
  return (
    <>
    <header>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    </header>
    {/* <body className={styles.body}> */}
    <div className={styles.main}>
      <Navbar></Navbar>
      {/* <TopNav></TopNav> */}
      <Head></Head>
      <div className={styles.border}>i am border</div>
     <Foot></Foot>
     <Footer></Footer>
    </div>
    {/* </body> */}
    </>
  );
}

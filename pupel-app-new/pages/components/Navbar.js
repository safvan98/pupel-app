// import logoImage from "../../src/logo-pepul.png";
// import styles from "./Navbar.module.css";
// import React from "react";
// import { useState } from "react";
// import Image from "next/image";
// // import {logo} from './logo-pepul.png';
// export default function Navbar() {


//   const [isClicked, setIsClicked] = useState(false);

//   console.log(isClicked)
//   return (
//     <div className={styles.nav}>
//       <nav>
//         <div className={styles.container}>
//           <div className={styles.logo}>
//             <a href="#">
//               <Image className={styles.image} src={logoImage} alt="Logo" />
//             </a>
//           </div>
//           <ul className={styles.navLinks}>
     
//             <li className={styles.listItem}>
//               <a href="#">Home</a>
//             </li>
//             <li className={styles.listItem}>
//               <a href="#">Community</a>
//             </li>
//             <li className={styles.listItem}>
//               <a href="#">Creaters</a>
//             </li>
//             <li className={styles.listItem}>
//               <a href="#">Blog</a>
//             </li>
//             <li className={styles.listItem}>
//               <a href="#">Our Vision</a>
//             </li>
//             <li className={styles.listItem}>
//               <a href="#">Investers</a>
//             </li>
//             <li className={styles.listItem}>
//               <a href="#">Contact Us</a>
//             </li>
//           </ul>
//           <div className={styles.burger} onClick={() => setIsClicked(!isClicked)}>
//               <div className={styles.line1}></div>
//               <div className={styles.line2}></div>
//               <div className={styles.line3}></div>
//             </div>
//         </div>
        
//       </nav>
//       {isClicked && (
//         <ul className={styles.collapsed}>
//           <li className={styles.listItem1}>
//               <a href="#">Home</a>
//             </li>
//             <li className={styles.listItem1}>
//               <a href="#">Community</a>
//             </li>
//             <li className={styles.listItem1}>
//               <a href="#">Creaters</a>
//             </li>
//             <li className={styles.listItem1}>
//               <a href="#">Blog</a>
//             </li>
//             <li className={styles.listItem1}>
//               <a href="#">Our Vision</a>
//             </li>
//             <li className={styles.listItem1}>
//               <a href="#">Investers</a>
//             </li>
//             <li className={styles.listItem1}>
//               <a href="#">Contact Us</a>
//             </li>
//         </ul>
//       )}
    
//     </div>
//   );
  
// }

// import logoImage from "../../src/logo-pepul.png";
// import styles from "./Navbar.module.css";
// import React from "react";
// import { useState } from "react";
// import Image from "next/image";

// export default function Navbar() {
//   const [isNavCollapsed, setIsNavCollapsed] = useState(true);

//   const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

//   return (
//     <div className={styles.nav}>
//       <nav>
//         <div className={styles.container}>
//           <div className={styles.logo}>
//             <a href="#">
//               <Image className={styles.image} src={logoImage} alt="Logo" />
//             </a>
//           </div>
//           <button
//             className={`custom-toggler ${styles.toggleButton}`}
//             type="button"
//             aria-expanded={!isNavCollapsed ? true : false}
//             aria-label="Toggle navigation"
//             onClick={handleNavCollapse}
//           >
//             <span
//               className={`navbar-toggler-icon ${
//                 isNavCollapsed ? "" : styles.hidden
//               }`}
//             ></span>
//           </button>
//           <div
//             className={`${styles.navLinks} ${isNavCollapsed ? "" : "active"}`}
//           >
//             <ul>
//               <li className={styles.listItem}>
//                 <a href="#">Home</a>
//               </li>
//               <li className={styles.listItem}>
//                 <a href="#">Community</a>
//               </li>
//               <li className={styles.listItem}>
//                 <a href="#">Creaters</a>
//               </li>
//               <li className={styles.listItem}>
//                 <a href="#">Blog</a>
//               </li>
//               <li className={styles.listItem}>
//                 <a href="#">Our Vision</a>
//               </li>
//               <li className={styles.listItem}>
//                 <a href="#">Investers</a>
//               </li>
//               <li className={styles.listItem}>
//                 <a href="#">Contact Us</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
import logoImage from "../../src/logo-pepul.png";
import styles from "./Navbar.module.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsTransparent(true);
        setTimeout(() => setIsTransparent(false), 100);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.nav} ${isTransparent ? styles.transparent : ""}`}>
      <nav>
        <div className={styles.container}>
          <div className={styles.logo}>
            <a href="#">
              <Image className={styles.image} src={logoImage} alt="Logo" />
            </a>
          </div>
          <ul className={styles.navLinks}>
            <li className={styles.listItem}>
              <a href="#">Home</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Community</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Creators</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Blog</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Our Vision</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Investors</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div
            className={styles.burger}
            onClick={() => setIsClicked(!isClicked)}
          >
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
        </div>
      </nav>
      {isClicked && (
        <ul className={styles.collapsed}>
          <li className={styles.listItem1}>
            <a href="#">Home</a>
          </li>
          <li className={styles.listItem1}>
            <a href="#">Community</a>
          </li>
          <li className={styles.listItem1}>
            <a href="#">Creators</a>
          </li>
          <li className={styles.listItem1}>
            <a href="#">Blog</a>
          </li>
          <li className={styles.listItem1}>
            <a href="#">Our Vision</a>
          </li>
          <li className={styles.listItem1}>
            <a href="#">Investors</a>
          </li>
          <li className={styles.listItem1}>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      )}
    </div>
  );
}

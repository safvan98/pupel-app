// import React from "react";
// import styles from "./Foot.module.css";
// import { useState } from "react";

// export default function Foot() {
//   const [isClicked, setIsClicked] = useState(false);
//   console.log(isClicked);
//   return (
//     <div className={styles.main}>
//       <h1 className={styles.mainHead}> FAQ </h1>
//       <br></br>
//       <div className={styles.faqDiv}>
//         <div className={styles.first}>
//         <a onClick={() => setIsClicked(!isClicked)}>
//           <div className={styles.qOne}>
//             <h3>Is it a replacement for the Tiktok app in India ?</h3>
//           </div>
          
//         </a>
//         {isClicked && (
//           <div className={styles.aOne}>
//             Is it a replacement for the Tiktok app in India ?
//           </div>
//         )}
//         </div>
//         <div className={styles.first}>
//         <a onClick={() => setIsClicked(!isClicked)}>
//           <div className={styles.qOne}>
//             <h3>Is it a replacement for the Tiktok app in India ?</h3>
//           </div>
          
//         </a>
//         {isClicked && (
//           <div className={styles.aOne}>
//             Is it a replacement for the Tiktok app in India ?
//           </div>
//         )}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import styles from "./Foot.module.css";

export default function Foot() {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const questions = [
    "Is it a replacement for the Tiktok app in India?",
    "What features does the app have?",
    "Can I download the app outside of India?",
    "How do I create an account on the app?",
    "Are there any age restrictions for using the app?",
  ];

  const answers = [
    "No, it is not a replacement for Tiktok app in India.",
    "The app allows users to create and share short videos, add filters and effects, and interact with other users.",
    "Currently, the app is only available for download in India.",
    "You can create an account on the app using your phone number or email address.",
    "Users must be at least 13 years old to use the app.",
  ];

  const handleQuestionClick = (index) => {
    setSelectedQuestionIndex(index === selectedQuestionIndex ? null : index);
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.mainHead}>FAQ</h1>
      <br />
      <div className={styles.faqDiv}>
        <div className={styles.faqsMain}>
          {questions.map((question, index) => (
            <div key={index} onClick={() => handleQuestionClick(index)}>
              
              <a  
                className={styles.qOne}
                
              >
                <h3 className={styles.h3}>{question}</h3>
                <h3 className={styles.ind}>{selectedQuestionIndex === index ? "-" : "+"}</h3> 
              </a>
              {selectedQuestionIndex === index && (
                <div className={styles.aOne}>{answers[index]}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

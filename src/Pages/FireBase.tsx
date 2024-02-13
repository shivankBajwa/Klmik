// import { Capacitor } from '@capacitor/core';
// import { useState } from 'react';
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult, Auth } from 'firebase/auth';

// const FireBase = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
// const [verificationId, setVerificationId] = useState('');

// const handleSendOTP = async () => {
//   const auth: Auth = getAuth();

//   // Replace 'recaptcha-container' with the ID of your recaptcha container
//   const recaptchaContainer = document.getElementById('recaptcha-container');

//   if (recaptchaContainer !=null) { // Check if recaptchaContainer is not null
//     const recaptchaVerifier = new RecaptchaVerifier(recaptchaContainer, {
//       size: 'invisible',
//     });

//     try {
//       const confirmationResult: ConfirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
//       setVerificationId(confirmationResult.verificationId);
//     } catch (error) {
//       console.error(error);
//     }
//   } else {
//     console.error('Recaptcha container not found');
//   }
// };
//     // Use verificationId to confirm the OTP
//     // ...
  
//     return (
//       <div>
//         <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//         <button onClick={handleSendOTP}>Send OTP</button>
//         <div id="recaptcha-container"></div>
//       </div>
  
//   )
// }

// export default FireBase
import React from 'react'

export const FireBase = () => {
  return (
    <div>FireBase</div>
  )
}

import { IonButton, IonCard, IonInput, IonText } from '@ionic/react'
import "./LoginPage.css"
import React, { useState } from 'react'
import headerImage from "../../assets/Graphics/loginSvg.svg"
import { OtpInput } from 'reactjs-otp-input';
const LoginPage = () => {
  
  const [otp, setOtp] = useState('');
  const [otpShow, setOtpShow] = useState<boolean>(false);
  const [phoneNoShow, setPhoneNoShow] = useState<boolean>(true);

  // const handleChange = () => setOtp({ '1234567' });
  return (
    <div className='main-body-login'>
    <div className='cardCss '>
    <IonText color="secondary"  className='textCenter' >
        <h3 className='medium-heading' >Welcome to</h3>
        <h1 className='large-heading'>KaryaSync</h1>
      </IonText>

      <div className='image'>
        <img title='loginLogo' alt='Loaing...' src={headerImage} style={{aspectRatio:"3/2"}}/>
      </div>
      {
        phoneNoShow ?  <IonCard>
        <IonText color="primary"  className='textCenter' >
              <p >Login with mobile number</p>
              {/* <p>we will send you an One Time Password (OTP) on this mobile number</p> */}
            </IonText>
            <div className='ion-margin'>
            <IonInput maxlength={10} className=' ' shape='round' label="Phone No" type='number' labelPlacement="floating" fill='outline' placeholder="Enter Phone No." ></IonInput>
            </div>
            <div className='ion-margin'>
            <IonButton type='submit'  onClick={()=>{setOtpShow(true),setPhoneNoShow(false)}} expand="full" shape="round" className='ion-margin-top' color={"secondary"}>Send Otp
           </IonButton>
           </div>
           </IonCard> :null
      }

     {otpShow ? 
        <IonCard >
        <div className='OtpInput'>
       <IonText color="primary"  className='textCenter'>
          <p>Enter your OTP</p>
        </IonText>
        <div className='ion-padding'>
        <OtpInput value={otp} onChange={()=>{}} numInputs={6} separator={<span>-</span>} />
        </div>
        <IonButton type='submit'  onClick={()=>{setOtpShow(false),setPhoneNoShow(true)}} expand="full" shape="round" className='ion-margin-top' color={"secondary"}>Verify
           </IonButton>
        </div>
       </IonCard>
     : null}
  
    </div>
    </div>
  )
}
export default LoginPage;

import {generateTOTP} from './generateTOTP'

export const verifyTOTP = (otp:number, secret:string, algorithm ='sha1', time:number=30000, window:number = 0, otpDigits:number =6) => {
   if (Math.abs(+window) > 10) {
      console.error('Window size is too large');
      return false;
   }

   for (let errorWindow = -window; errorWindow <= +window; errorWindow++) {
      const totp = generateTOTP(secret, algorithm,time, window = errorWindow, otpDigits);
      if (otp === totp) {
         return true;
      }
   }

   return false;
}
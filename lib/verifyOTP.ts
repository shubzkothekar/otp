import {generateTOTP} from './generateTOTP'

export const verifyTOTP = (otp:number, secret:string, algorithm ='SHA-1', time:number=30000, window = 1, otpDigits:number =6) => {
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
import { hmac } from './hmac'
import {dynamicTruncation} from './dynamicTruncation'

export const generateHOTP = ( secret: string, counter: any, algorithm:string = 'sha1', otpDigits : number = 6) => {
    const otp = dynamicTruncation(hmac(secret, counter, algorithm))
    return otp % 10 ** otpDigits;
    
}
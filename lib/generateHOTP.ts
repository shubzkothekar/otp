import { hmac } from './hmac'
import {dynamicTruncation} from './dynamicTruncation'

export const generateHOTP = ( secret: string, counter: any, algorithm:string = 'SHA-1', otpDigits : number = 6) => {
    const otp = dynamicTruncation(hmac(algorithm, secret, counter))
    return otp % 10 ** otpDigits;
    
}
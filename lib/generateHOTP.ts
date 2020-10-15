import { hmac } from './hmac'
import {dynamicTruncation} from './dynamicTruncation'

export const generateHOTP = (algorithm:string, secret: string, counter: any, otpDigits : number = 6) => {
    const otp = dynamicTruncation(hmac(algorithm, secret, counter))
    return otp % 10 ** otpDigits;
    
}
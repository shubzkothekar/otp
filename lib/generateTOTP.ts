import {generateHOTP} from './generateHOTP'
export const generateTOTP = (secret: string, algorithm: string = 'SHA-1', time: number = 30000, window :number= 0, otpDigits: number = 6) => {
    const counter = Math.floor(Date.now() / time);
    return generateHOTP(secret, counter + window, algorithm, otpDigits);
}
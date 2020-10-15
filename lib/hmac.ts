import { createHmac } from 'crypto'
import { decodedSecret } from './decodedSecret'
import {buffer} from './buffer'

export const hmac = ( secret:string,  counter:any, algorithm:string ="sha1") => {
   const decoded =  Buffer.from(decodedSecret(secret))
    const hmac =createHmac(algorithm,decoded);
    hmac.update(buffer(counter));
    const hmacResult = hmac.digest();
    return hmacResult

}
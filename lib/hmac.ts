import { createHmac } from 'crypto'
import { decodedSecret } from './decodedSecret'
import {buffer} from './buffer'

export const hmac = (algorithm:string, secret:string, counter:any) => {
   
    const hmac =createHmac(algorithm, Buffer.from(decodedSecret(secret)));
    hmac.update(buffer(counter));
    const hmacResult = hmac.digest();
    return hmacResult

}
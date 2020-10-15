import { randomBytes } from 'crypto'
import * as base32 from 'hi-base32'

export const generateSecret = (length = 20) => {
   const randomBuffer = randomBytes(length);
   return base32.encode(randomBuffer).replace(/=/g, '');
}
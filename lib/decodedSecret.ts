import * as base32 from 'hi-base32'

export const decodedSecret = (secret:string) => base32.decode.asBytes(secret);
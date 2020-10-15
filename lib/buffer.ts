export const buffer = (counter) => {
    const buffer = Buffer.alloc(8);
for (let i = 0; i < 8; i++) {
   buffer[7 - i] = counter & 0xff;
   counter = counter >> 8;
}
    return buffer
}


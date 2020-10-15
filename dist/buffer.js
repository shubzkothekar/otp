"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buffer = function (counter) {
    var buffer = Buffer.alloc(8);
    for (var i = 0; i < 8; i++) {
        buffer[7 - i] = counter & 0xff;
        counter = counter >> 8;
    }
    return buffer;
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicTruncation = function (hmacValue) {
    var offset = hmacValue[hmacValue.length - 1] & 0xf;
    return (((hmacValue[offset] & 0x7f) << 24) |
        ((hmacValue[offset + 1] & 0xff) << 16) |
        ((hmacValue[offset + 2] & 0xff) << 8) |
        (hmacValue[offset + 3] & 0xff));
};

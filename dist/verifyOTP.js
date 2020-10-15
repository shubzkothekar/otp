"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateTOTP_1 = require("./generateTOTP");
exports.verifyTOTP = function (otp, secret, algorithm, time, window, otpDigits) {
    if (algorithm === void 0) { algorithm = 'sha1'; }
    if (time === void 0) { time = 30000; }
    if (window === void 0) { window = 0; }
    if (otpDigits === void 0) { otpDigits = 6; }
    if (Math.abs(+window) > 10) {
        console.error('Window size is too large');
        return false;
    }
    for (var errorWindow = -window; errorWindow <= +window; errorWindow++) {
        var totp = generateTOTP_1.generateTOTP(secret, algorithm, time, window = errorWindow, otpDigits);
        if (otp === totp) {
            return true;
        }
    }
    return false;
};

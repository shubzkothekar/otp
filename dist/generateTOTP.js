"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateHOTP_1 = require("./generateHOTP");
exports.generateTOTP = function (secret, algorithm, time, window, otpDigits) {
    if (algorithm === void 0) { algorithm = 'sha1'; }
    if (time === void 0) { time = 30000; }
    if (window === void 0) { window = 0; }
    if (otpDigits === void 0) { otpDigits = 6; }
    var counter = Math.floor(Date.now() / time);
    return generateHOTP_1.generateHOTP(secret, counter + window, algorithm, otpDigits);
};

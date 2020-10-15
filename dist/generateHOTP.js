"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hmac_1 = require("./hmac");
var dynamicTruncation_1 = require("./dynamicTruncation");
exports.generateHOTP = function (secret, counter, algorithm, otpDigits) {
    if (algorithm === void 0) { algorithm = 'sha1'; }
    if (otpDigits === void 0) { otpDigits = 6; }
    var otp = dynamicTruncation_1.dynamicTruncation(hmac_1.hmac(secret, counter, algorithm));
    return otp % Math.pow(10, otpDigits);
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateTOTP_1 = require("./generateTOTP");
var verifyOTP_1 = require("./verifyOTP");
var secret = "RIRSUWWDSUBDAGK75Z7OKVWACHCITQBY";
console.log("TOTP : " + generateTOTP_1.generateTOTP(secret));
console.log(verifyOTP_1.verifyTOTP(923620, secret));

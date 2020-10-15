"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var base32 = __importStar(require("hi-base32"));
exports.generateSecret = function (length) {
    if (length === void 0) { length = 20; }
    var randomBuffer = crypto_1.randomBytes(length);
    return base32.encode(randomBuffer).replace(/=/g, '');
};

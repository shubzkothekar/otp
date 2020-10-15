"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var decodedSecret_1 = require("./decodedSecret");
var buffer_1 = require("./buffer");
exports.hmac = function (secret, counter, algorithm) {
    if (algorithm === void 0) { algorithm = "sha1"; }
    var decoded = Buffer.from(decodedSecret_1.decodedSecret(secret));
    var hmac = crypto_1.createHmac(algorithm, decoded);
    hmac.update(buffer_1.buffer(counter));
    var hmacResult = hmac.digest();
    return hmacResult;
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var fs_1 = __importDefault(require("fs"));
var verifyToken = function (token, pubKey) { return jsonwebtoken_1.verify(token, pubKey); };
var readPublicKeyUsingPath = function (keyPath) {
    return fs_1.default.readFileSync(keyPath);
};
var getCheckerUsingKey = function (pubKey) { return function (token) {
    return verifyToken(token, pubKey);
}; };
var getCheckerUsingKeyPath = function (keyPath) {
    return getCheckerUsingKey(readPublicKeyUsingPath(keyPath));
};
exports.default = getCheckerUsingKeyPath;

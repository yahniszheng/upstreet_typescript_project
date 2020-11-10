"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var KYC_CHECK_1 = require("./KYC_CHECK");
// jest framework not working locally, so implementing manually, 
var test_valid_input = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, error_1, res1, error_2, res2, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, KYC_CHECK_1.kyc_check("1985-12-12", "aaa", "aaa", "aaa", "NSW")];
            case 1:
                res = _a.sent();
                if (res["kycResult"] === true || res["kycResult"] === false) {
                    console.log("test_valid_input 1 passed");
                }
                else {
                    console.log("test_valid_input 1 failed");
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                if (error_1.name == "VerifyDocumentError") {
                    console.log("test_valid_input 2 passed");
                }
                else {
                    console.log("test_valid_input 2 failed");
                }
                ;
                return [3 /*break*/, 3];
            case 3:
                _a.trys.push([3, 5, , 6]);
                return [4 /*yield*/, KYC_CHECK_1.kyc_check("1985-12-12", "aaa", "aaa", "aaa", "NSW", undefined, "2020-12-12")];
            case 4:
                res1 = _a.sent();
                if (res1["kycResult"] === true || res1["kycResult"] === false) {
                    console.log("test_valid_input 2 passed");
                }
                else {
                    console.log("test_valid_input 2 failed");
                }
                return [3 /*break*/, 6];
            case 5:
                error_2 = _a.sent();
                if (error_2.name == "VerifyDocumentError") {
                    console.log("test_valid_input 2 passed");
                }
                else {
                    console.log("test_valid_input 2 failed");
                }
                return [3 /*break*/, 6];
            case 6:
                _a.trys.push([6, 8, , 9]);
                return [4 /*yield*/, KYC_CHECK_1.kyc_check("1985-12-12", "aaa", "aaa", "aaa", "NSW", "yyy", "2020-12-12")];
            case 7:
                res2 = _a.sent();
                if (res2["kycResult"] === true || res2["kycResult"] === false) {
                    console.log("test_valid_input 3 passed");
                }
                else {
                    console.log("test_valid_input 3 failed");
                }
                return [3 /*break*/, 9];
            case 8:
                error_3 = _a.sent();
                if (error_3.name == "VerifyDocumentError") {
                    console.log("test_valid_input 2 passed");
                }
                else {
                    console.log("test_valid_input 2 failed");
                }
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
var test_invalid_date = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, error_4, res, error_5, res, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, KYC_CHECK_1.kyc_check("19851212", "aaa", "aaa", "aaa", "NSW")];
            case 1:
                res = _a.sent();
                console.log("test_invalid_date 1 failed");
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                if (error_4.name == "DateFormatError" && error_4.message == "date_of_birth is in wrong format") {
                    console.log("test_invalid_date 1 passed");
                }
                else {
                    console.log("test_invalid_date 1 failed");
                }
                return [3 /*break*/, 3];
            case 3:
                _a.trys.push([3, 5, , 6]);
                return [4 /*yield*/, KYC_CHECK_1.kyc_check("1985-aa-12", "aaa", "aaa", "aaa", "NSW")];
            case 4:
                res = _a.sent();
                console.log("test_invalid_date 2 failed");
                return [3 /*break*/, 6];
            case 5:
                error_5 = _a.sent();
                if (error_5.name == "DateFormatError" && error_5.message == "date_of_birth is in wrong format") {
                    console.log("test_invalid_date 2 passed");
                }
                else {
                    console.log("test_invalid_date 2 failed");
                }
                return [3 /*break*/, 6];
            case 6:
                _a.trys.push([6, 8, , 9]);
                return [4 /*yield*/, KYC_CHECK_1.kyc_check("1985-11-12", "aaa", "aaa", "aaa", "NSW", "aaa", "aaa")];
            case 7:
                res = _a.sent();
                console.log("test_invalid_date 3 failed");
                return [3 /*break*/, 9];
            case 8:
                error_6 = _a.sent();
                if (error_6.name == "DateFormatError" && error_6.message == "expiry_date is in wrong format") {
                    console.log("test_invalid_date 3 passed");
                }
                else {
                    console.log("test_invalid_date 3 failed");
                }
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
// Can't test VerifyDocumentError as i don't know what might trigger this error.
test_valid_input();
test_invalid_date();

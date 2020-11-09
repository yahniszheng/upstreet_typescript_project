"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.kyc_check = void 0;
var fetch = require("node-fetch");
var VerifyDocumentError = /** @class */ (function (_super) {
    __extends(VerifyDocumentError, _super);
    function VerifyDocumentError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = "VerifyDocumentError";
        return _this;
    }
    return VerifyDocumentError;
}(Error));
var DateFormatError = /** @class */ (function (_super) {
    __extends(DateFormatError, _super);
    function DateFormatError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "DateFormatError";
        return _this;
    }
    return DateFormatError;
}(Error));
var kyc_check = function (date_of_birth, firstname, lastname, licence_number, state, middlename, expiry_date) { return __awaiter(void 0, void 0, void 0, function () {
    var date_format, url, api_key, body_data, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                date_format = new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$');
                if (!date_format.test(date_of_birth)) { // data validation
                    throw new DateFormatError("date_of_birth is in wrong format");
                }
                if (expiry_date) {
                    if (!date_format.test(expiry_date)) {
                        throw new DateFormatError("expiry_date is in wrong format");
                    }
                }
                url = "https://australia-southeast1-reporting-290bc.cloudfunctions.net/driverlicence";
                api_key = "03aa7ba718da920e0ea362c876505c6df32197940669c5b150711b03650a78cf";
                body_data = {
                    "birthDate": date_of_birth,
                    "givenName": firstname,
                    "middleName": middlename ? middlename : "",
                    "familyName": lastname,
                    "licenceNumber": licence_number,
                    "stateOfIssue": state,
                    "expiryDate": expiry_date ? expiry_date : ""
                };
                return [4 /*yield*/, fetch(url, {
                        method: 'POST',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'include',
                        headers: {
                            'token': api_key,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body_data)
                    })
                        .then(function (response) {
                        console.log(response);
                        if (!response.ok) {
                            throw new VerifyDocumentError("D", "Document Error");
                        }
                        response.json();
                        return response;
                    })["catch"](function (error) {
                        throw new Error(error);
                    })];
            case 1:
                response = _a.sent();
                ;
                if (response["verificationResultCode"] == "D") {
                    throw new VerifyDocumentError("D", "Document Error");
                }
                else if (response["verificationResultCode"] == "S") {
                    throw new VerifyDocumentError("S", "Server Error");
                }
                if (response["verificationResultCode"] == "Y") {
                    return [2 /*return*/, { kycResult: true }];
                }
                return [2 /*return*/, { kycResult: false }];
        }
    });
}); };
exports.kyc_check = kyc_check;

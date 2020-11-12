import {kyc_check } from "../src/KYC_CHECK";

// jest framework not working locally, so implementing manually, 

const test_valid_input = async () => {
    try {
        const res = await kyc_check("1985-12-12", "aaa", "aaa", "aaa", "NSW");
        if (res["kycResult"] === true || res["kycResult"] === false) {
            console.log("test_valid_input 1 passed");
        } else {
            console.log("test_valid_input 1 failed");
        }
    }     
    catch (error) { // Because the api is giving non-deterministc result, have to catch the error in order to test it.
        if (error.name == "VerifyDocumentError") {
            console.log("test_valid_input 2 passed");
        } else {
            console.log("test_valid_input 2 failed");
        };
    }
    try {
        const res1 = await kyc_check("1985-12-12", "aaa", "aaa", "aaa", "NSW", undefined, "2020-12-12");
        if (res1["kycResult"] === true || res1["kycResult"] === false) {
            console.log("test_valid_input 2 passed");
        } else {
            console.log("test_valid_input 2 failed");
        }
    } 
    catch (error) {
        if (error.name == "VerifyDocumentError") {
            console.log("test_valid_input 2 passed");
        } else {
            console.log("test_valid_input 2 failed");
        }
    }
    try {
        const res2 = await kyc_check("1985-12-12", "aaa", "aaa", "aaa", "NSW", "yyy", "2020-12-12");
        if (res2["kycResult"] === true || res2["kycResult"] === false) {
            console.log("test_valid_input 3 passed");
        } else {
            console.log("test_valid_input 3 failed");
        }
    }
    catch (error) {
        if (error.name == "VerifyDocumentError") {
            console.log("test_valid_input 2 passed");
        } else {
            console.log("test_valid_input 2 failed");
        }
    }
}

const test_invalid_date = async () => {
    try {
        const res = await kyc_check("19851212", "aaa", "aaa", "aaa", "NSW");
        console.log("test_invalid_date 1 failed");
    } 
    catch (error) {
        if (error.name == "DateFormatError" && error.message == "date_of_birth is in wrong format") {
            console.log("test_invalid_date 1 passed");
        } else {
            console.log("test_invalid_date 1 failed");
        }
    }

    try {
        const res = await kyc_check("1985-aa-12", "aaa", "aaa", "aaa", "NSW");
        console.log("test_invalid_date 2 failed");
    } 
    catch (error) {
        if (error.name == "DateFormatError" && error.message == "date_of_birth is in wrong format") {
            console.log("test_invalid_date 2 passed");
        } else {
            console.log("test_invalid_date 2 failed");
        }
    }

    try {
        const res = await kyc_check("1985-11-12", "aaa", "aaa", "aaa", "NSW", "aaa", "aaa");
        console.log("test_invalid_date 3 failed");
    } 
    catch (error) {
        if (error.name == "DateFormatError" && error.message == "expiry_date is in wrong format") {
            console.log("test_invalid_date 3 passed");
        } else {
            console.log("test_invalid_date 3 failed");
        }
    }
}

// Can't test VerifyDocumentError as i don't know what might trigger this error.

test_valid_input();
test_invalid_date();
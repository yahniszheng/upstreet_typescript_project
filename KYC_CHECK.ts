type State = "NSW" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "ACT" | "NT";


interface KYC_Result {
    kycResult: boolean;
}

class VerifyDocumentError extends Error {
    code: String;
    constructor(code, message) {
      super(message);
      this.code = code;
      this.name = "VerifyDocumentError";
    }
}

class DateFormatError extends Error {
    constructor(message) {
      super(message);
      this.name = "DateFormatError";
    }
}

const kyc_check = async (date_of_birth: string, firstname: string, lastname: string, licence_number: string,
     state: State, middlename?: string, expiry_date?: string) : Promise<KYC_Result> =>  {
    const date_format = new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$');
    if (!date_format.test(date_of_birth)) { // data validation
        throw new DateFormatError("date_of_birth is in wrong format");
    }
    if (expiry_date) {
        if (!date_format.test(expiry_date)) {
            throw new DateFormatError("expiry_date is in wrong format");
        }
    }

    const url = "https://australia-southeast1-reporting-290bc.cloudfunctions.net/driverlicence";
    const api_key = "03aa7ba718da920e0ea362c876505c6df32197940669c5b150711b03650a78cf"; // Note: these should be kept in a more secret place
                                                                                        // may be in environment variable or in backend server.
    const body_data = {
        "birthDate" : date_of_birth,
        "givenName" : firstname,
        "middleName" : middlename ? middlename : "",
        "familyName" : lastname,
        "licenceNumber" : licence_number,
        "stateOfIssue" : state,
        "expiryDate" : expiry_date ? expiry_date : ""
        }  

    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json',
        'token': api_key
        },
        body: JSON.stringify(body_data) // body data type must match "Content-Type" header
    })
        .then(response => response.json())
        .catch(error => {
            throw new Error(error);
          });;              
    if (response["verificationResultCode"] == "D") {
        throw new VerifyDocumentError("D", "Document Error");
    } else if (response["verificationResultCode"] == "S") {
        throw new VerifyDocumentError("S", "Server Error");
    }
    if (response["verificationResultCode"] == "Y") {
        return {kycResult: true};
    }
    return {kycResult: false};
}

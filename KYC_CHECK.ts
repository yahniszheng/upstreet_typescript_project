type State = "NSW" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "ACT" | "NT";

interface KYC_Result {
    kycResult: boolean;
}

class VerifyDocumentError extends Error {
    constructor(message) {
      super(message);
      this.name = "VerifyDocumentError";
    }
}

class DateFormatError extends VerifyDocumentError {
    constructor(message) {
      super(message);
      this.name = "DateFormatError";
    }
}

function kyc_check(date_of_birth: string, firstname: string, lastname: string, licence_number: number,
     state: State, middlename?: string, expiry_date?: string) : KYC_Result {
    
    return {kycResult: false};
}

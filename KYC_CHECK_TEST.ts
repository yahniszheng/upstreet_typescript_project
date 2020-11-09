import { kyc_check } from "./KYC_CHECK";

// const kyc_check = async (date_of_birth: string, firstname: string, lastname: string, licence_number: string,
//     state: State, middlename?: string, expiry_date?: string) 

const test1 = async () => {
    const res = await kyc_check("1985-12-12", "aaa", "aaa", "aaa", "NSW");
    console.log(res["kycResult"]);
}

test1();

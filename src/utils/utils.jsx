/**
 * 휴대폰번호에 하이픈 추가하는 메서드
 * @param phoneNo 
 * @returns 
 */
export function addHyphenToPhoneNo(phoneNo){
    
    let number=phoneNo;

    if (!phoneNo) {
        return "";
    }
    
    if (phoneNo.length>11) {
        number=phoneNo.slice(0,13);
    }

    return number
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
}
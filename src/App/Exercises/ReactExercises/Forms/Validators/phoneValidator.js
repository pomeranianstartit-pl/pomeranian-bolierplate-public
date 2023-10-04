    // EU prefixes
    const euPrefixes = ["+32", "+33", "+34", "+36", "+39", "+43", "+44", "+45", "+46", "+47", "+48", "+49"];


export  function validatePhoneNumber(phoneNumber) {
    
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    let prefix = "";
    if (cleanedPhoneNumber.startsWith("+")) {
        prefix = cleanedPhoneNumber.slice(0, 3); 
        if (!euPrefixes.includes(prefix)) {
            return false; 
        }
    }

    const digitsOnly = cleanedPhoneNumber.slice(prefix.length);

    if (digitsOnly.length !== 9) {
        return false;
    }

    const formattedPhoneNumber = `(${prefix}${digitsOnly.slice(0, 2)}) ${digitsOnly.slice(2, 5)} ${digitsOnly.slice(5)}`;

    return {
        isPhoneValid: true,
        formattedPhoneNumber: formattedPhoneNumber
    };

}


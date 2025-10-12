
export function validStafffService(inputValue: string):{
        isValid: boolean;
        errors: string[];
} {
    let isValid = true;
    const errors: string[] = [];


    if(inputValue.trim().length < 3) {
        isValid = false;
        errors.push("Invalid search. Requires atleast 3 characters.");
    }

    return {isValid, errors};
}
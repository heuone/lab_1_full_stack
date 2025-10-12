import { useState } from "react";
import { validStafffService } from "../services/validStaffService"; 


export function useEntryForm(objectValues: any) {
  const [formData, setFormData] = useState(objectValues);
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((previousState: any) => ({
      ...previousState,
      [name]: value
    }));
  };

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault(); 
    console.log(formData);

    const { isValid, errors } = validStafffService(formData.name);
    if(!isValid) {
        setErrors(errors);
        return;
    };
  };

    return { 
        formData, 
        handleInputChange, 
        handleSubmit,
        errors
    };
}

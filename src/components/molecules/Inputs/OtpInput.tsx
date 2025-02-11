import React, { AllHTMLAttributes, useState } from "react";
import { OtpInputStyle, OtpInputWrapper } from "./style";

// Type defination
interface Props extends AllHTMLAttributes<HTMLInputElement> {
  $label?: string;
}

// Component
const OtpInput: React.FC<Props> = () => {
  // State
  const [values, setValues] = useState<string[]>(["", "", "", ""]);

  // Methods
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputValue = event.target.value;

    // Allow only one digit (0-9)
    if (/^\d?$/.test(inputValue)) {
      const prevValues = [...values];
      prevValues[index] = inputValue;
      setValues(prevValues);
    }
  };

  // Data to display
  return (
    <OtpInputWrapper>
      {values?.map((val, i) => (
        <OtpInputStyle
          key={i}
          onChange={(e) => handleChange(e, i)}
          value={values[i]}
        />
      ))}
    </OtpInputWrapper>
  );
};

export default OtpInput;

import React, { AllHTMLAttributes, useState } from "react";
import {
  LabelStyle,
  PasswordCtaStyle,
  TextInputStyle,
  TextInputWrapperStyle,
  Wrapper,
} from "./style";
import { EmailIcon, EyeIcon, LockIcon, UserIcon } from "components/atom/SvgIcon";

// Type defination
interface Props extends AllHTMLAttributes<HTMLInputElement> {
  $label?: string;
  $type?: string;
}

// Component
const TextInput: React.FC<Props> = (props) => {
  // Props
  const { $label, $type, name, type, className, ...otherProps } = props;

  // State
  const [isPassword, setIsPassword] = useState<boolean>(
    type === "password" ? true : false
  );

  //   Methods
  const handleTypeToggle = () => {
    setIsPassword(!isPassword);
  };

  // Data to display
  return (
    <Wrapper className={className}>
      {$label && <LabelStyle htmlFor={name}>{$label}</LabelStyle>}
      <TextInputWrapperStyle
        className={`${type === "text" || !type ? "no-space" : ""} ${$type ? "space":""}`}
      >
        {$type === "user" && <UserIcon />}
        {type === "email" && <EmailIcon />}
        {type === "password" && <LockIcon />}
        <TextInputStyle
          {...otherProps}
          name={name}
          type={isPassword ? "password" : "text"}
          id={name}
        />
        {type === "password" && (
          <PasswordCtaStyle onClick={handleTypeToggle}>
            <EyeIcon />
          </PasswordCtaStyle>
        )}
      </TextInputWrapperStyle>
    </Wrapper>
  );
};

export default TextInput;

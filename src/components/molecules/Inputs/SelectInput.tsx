/** @format */

import React, { AllHTMLAttributes, useState } from "react";
import {
  LabelStyle,
  SelectInputStyle,
  TextInputWrapperStyle,
  Wrapper,
} from "./style";
import { LocationIcon } from "components/atom/SvgIcon";

// Type defination
interface Props extends AllHTMLAttributes<HTMLSelectElement> {
  $label?: string;
  $options?: any[];
  $handleChange: (name: any, e: any) => void;
}

// Component
const SelectInput: React.FC<Props> = (props) => {
  // State
  const [selected, setSelected] = useState<boolean>(false);

  // Props
  const {
    $label,
    $options,
    $handleChange,
    name,
    type,
    className,
    placeholder,
    ...otherProps
  } = props;

  // Data to display
  return (
    <Wrapper className={className}>
      {$label && <LabelStyle htmlFor={name}>{$label}</LabelStyle>}
      <TextInputWrapperStyle>
        <LocationIcon />

        <SelectInputStyle
          {...otherProps}
          name={name}
          id={name}
          $selected={selected}
          onChange={(e) => {
            $handleChange(name, e.currentTarget.value);
            setSelected(true);
          }}
        >
          <option value="" disabled selected>
            {placeholder}
          </option>

          {$options?.map((option, index) => (
            <option key={index} value={option?.id}>
              {option?.label}
            </option>
          ))}
        </SelectInputStyle>
      </TextInputWrapperStyle>
    </Wrapper>
  );
};

export default SelectInput;

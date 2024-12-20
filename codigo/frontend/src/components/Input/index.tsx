import { FormLabel, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { KeyboardEventHandler, ReactNode } from "react";

interface InputProps {
  placeholder: string;
  icon?: ReactNode;
  label?: string;
  value?: string;
  onChangeInput: Function;
  style?: {
    marginLeft?: string;
    inputTextColor?: string;
    labelColor?: string;
    inputBgColor?: string;
    marginBottom?: string;
    marginRight?: string;
  };
  type: string;
  required?: boolean;
  validate?: boolean;
  maxLength?: number;
  id?: string;
  onKeyDown?: (e:KeyboardEvent) => void; 
}

const InputComponent = ({
  label,
  placeholder,
  icon,
  value,
  onChangeInput,
  style,
  type,
  required,
  validate,
  maxLength,
  id,
  onKeyDown
}: InputProps) => {
  return (
    <>
      <FormLabel color={style?.labelColor} fontSize="15px" fontWeight="light">
        {label}
      </FormLabel>
      <InputGroup
        backgroundColor={style?.labelColor}
        height="40px"
        ml={style?.marginLeft}
        mb={style?.marginBottom}
        mr={style?.marginRight}
        rounded="md"
      >
        <InputLeftAddon children={icon} />
        <Input
          maxLength={maxLength ? maxLength : undefined}
          isInvalid={validate}
          required={required}
          type={type}
          placeholder={placeholder}
          color={style?.inputTextColor}
          backgroundColor={style?.inputBgColor}
          _placeholder={{
            color: style?.inputTextColor,
          }}
          value={value}
          id={id}
          onChange={(e) => onChangeInput(e)}
          onKeyDown={(e: any) => onKeyDown? onKeyDown(e) : undefined} 
        />
      </InputGroup>
    </>
  );
};

export default InputComponent;

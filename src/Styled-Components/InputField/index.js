import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { RequiredLabel } from "../labels";
import InputFieldErrorIcon from "../Icons/InputFieldErrorIcon";
import InputFieldHiddenIcon from "../Icons/InputFieldHiddenIcon";
import InputFieldUnhiddenIcon from "../Icons/InputFieldUnhiddenIcon";
import InputFieldSuccessIcon from "../Icons/InputFieldSuccessIcon";

import {
  InputFieldContainer,
  InputFieldErrorContainer,
  InputFieldHiddenContainer,
  InputFieldSuccessContainer,
} from "./style";

const RequiredInputField = ({ placeholder, value }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const getClassname = () => {
    if (success) {
      return {
        class: "InputSuccess",
        icon: <InputFieldSuccessIcon />,
      };
    } else if (error) {
      return {
        class: "InputError",
        icon: <InputFieldErrorIcon />,
      };
    } else {
      return {
        class: "",
        icon: "",
      };
    }
  };

  const getInputClassAndIcon = getClassname();
  return (
    <InputFieldContainer
      className={getInputClassAndIcon && getInputClassAndIcon.class}
    >
      <p
        onClick={() => {
          setError(false);
          setSuccess(false);
        }}
      >
        Normal
      </p>
      <p
        onClick={() => {
          setError(true);
          setSuccess(false);
        }}
      >
        Error
      </p>
      <p
        onClick={() => {
          setError(false);
          setSuccess(true);
        }}
      >
        Success
      </p>
      <RequiredLabel label="Label" />
      <TextField
        placeholder={placeholder}
        value={value}
        InputProps={{
          endAdornment: getInputClassAndIcon && getInputClassAndIcon.icon,
        }}
      />
    </InputFieldContainer>
  );
};

const InputField = ({ placeholder, value }) => {
  return (
    <InputFieldContainer>
      <TextField placeholder={placeholder} value={value} />
    </InputFieldContainer>
  );
};

const RichTextEditorInputField = ({ placeholder, value }) => {
  return (
    <InputFieldContainer>
      <RequiredLabel label="Label" />
      <TextField placeholder={placeholder} value={value} />
    </InputFieldContainer>
  );
};

const RequiredInputFieldError = () => {
  return (
    <InputFieldErrorContainer>
      <RequiredLabel label="Label" />
      <TextField
        placeholder="Form"
        InputProps={{
          endAdornment: <InputFieldErrorIcon />,
        }}
      />
    </InputFieldErrorContainer>
  );
};

const RequiredInputFieldSuccess = () => {
  return (
    <InputFieldSuccessContainer>
      <RequiredLabel label="Label" />
      <TextField
        placeholder="Form"
        InputProps={{
          endAdornment: <InputFieldSuccessIcon />,
        }}
      />
    </InputFieldSuccessContainer>
  );
};

const HiddenInputField = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <InputFieldHiddenContainer>
      <TextField
        placeholder="Form"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        type={show ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? <InputFieldUnhiddenIcon /> : <InputFieldHiddenIcon />}
            </InputAdornment>
          ),
        }}
      />
    </InputFieldHiddenContainer>
  );
};

const UnhiddenInputField = ({ placeholder }) => {
  return (
    <InputFieldHiddenContainer>
      <TextField placeholder={placeholder} />
    </InputFieldHiddenContainer>
  );
};

export {
  RequiredInputField,
  InputField,
  RequiredInputFieldError,
  RequiredInputFieldSuccess,
  HiddenInputField,
  UnhiddenInputField,
  RichTextEditorInputField,
};

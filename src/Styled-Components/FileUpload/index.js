import * as React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { RequiredLabel } from "../labels";
import {
  FileUploadContainer,
  FileUploadDisabledWrapper,
  FileUploadErrorWrapper,
  FileUploadWrapper,
} from "./style";
import FileUploadIcon from "../Icons/FileUploadIcon";
import FileUploadErrorIcon from "../Icons/FileUploadErrorIcon";

// const Input = styled("input")({
//   display: "none",
// });
const FileUpload = () => {
  const [fileName, setFileName] = useState("Upload a file");
  const [error, setError] = useState(false);

  return (
    <FileUploadContainer>
      <RequiredLabel label="Upload File" />
      <FileUploadWrapper className={error === true ? "FileUploadError" : ""}>
        <div>{fileName}</div>

        <Button variant="contained" component="label">
          {error === true ? <FileUploadErrorIcon /> : <FileUploadIcon />}
          Choose
          <input
            type="file"
            hidden
            onChange={(e) => {
              if (e.target.files[0].size > 52428800.0) {
                setError(true);
              } else {
                setFileName(e.target.files[0].name);
              }
            }}
          />
        </Button>
      </FileUploadWrapper>
    </FileUploadContainer>
  );
};

const FileUploadError = () => {
  const [fileName, setFileName] = useState("Upload a file");

  return (
    <FileUploadContainer>
      <RequiredLabel label="Upload File" />
      <FileUploadErrorWrapper>
        <div>{fileName}</div>

        <Button variant="contained" component="label">
          <FileUploadErrorIcon />
          Choose
          <input
            type="file"
            hidden
            onChange={(e) => {
              setFileName(e.target.files[0].name);
            }}
          />
        </Button>
      </FileUploadErrorWrapper>
    </FileUploadContainer>
  );
};

const FileUploadDisabled = () => {
  const [fileName, setFileName] = useState("Upload a file");

  return (
    <FileUploadContainer>
      <RequiredLabel label="Upload File" />
      <FileUploadDisabledWrapper>
        <div>{fileName}</div>

        <Button variant="contained" component="label">
          <FileUploadIcon />
          Choose
          <input
            disabled
            type="file"
            hidden
            onChange={(e) => {
              setFileName(e.target.files[0].name);
            }}
          />
        </Button>
      </FileUploadDisabledWrapper>
    </FileUploadContainer>
  );
};

export { FileUpload, FileUploadError, FileUploadDisabled };

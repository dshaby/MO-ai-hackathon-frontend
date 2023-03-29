import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

const StyledFileUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  }

  const handleUpload = () => {
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    // Make an API call to upload the file
    // axios.post('/api/upload', formData);
  }

  return (
    <StyledFileUpload>
      <InputWrapper>
        <Input type="file" onChange={handleFileInput} />
        {selectedFile ? selectedFile.name : 'Choose a file'}
      </InputWrapper>
      <Button onClick={handleUpload}>Upload</Button>
    </StyledFileUpload>
    );
  }
export default FileUpload

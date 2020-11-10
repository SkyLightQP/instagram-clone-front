import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UploadButton from '../../../atomics/Button/UploadButton';

const InputContainer = styled.section`
  border-top: 1.5px solid rgba(222, 222, 222, 0.8);
  margin-top: 4px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 14px;
  line-height: 18px;
  min-height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RepleForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  position: relative;
`;

const Input = styled.input`
  font-size: inherit;
  line-height: 18px;
  width: 100%;
  height: 18px;
  max-height: 80px;
  outline: none;
  border: none;
  resize: none;
  color: rgb(38, 38, 38);
`;

const RepleInput: React.FC = () => {
  const [reple, setReple] = useState('');
  const [isInputValueLoading, setInputValueLoading] = useState(false);

  const onRepleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReple(e.target.value);
  };

  useEffect(() => {
    if (reple) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [reple]);

  return (
    <InputContainer>
      <RepleForm>
        <Input placeholder="댓글 달기..." onChange={onRepleInputChange} value={reple} />

        <UploadButton loading={isInputValueLoading} className="upload" type="submit">
          게시
        </UploadButton>
      </RepleForm>
    </InputContainer>
  );
};

export default RepleInput;

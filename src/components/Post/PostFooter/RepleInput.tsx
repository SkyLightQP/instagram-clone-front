import React from 'react';
import styled from 'styled-components';

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

const TextArea = styled.textarea`
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

const RepleSubmitBtn = styled.button`
  font-size: 14px;
  line-height: 18px;
  box-sizing: border-box;
  font-weight: 600;
  text-align: center;
  color: rgb(0, 149, 246);
  background: none;
  border: none;
  display: inline;
  padding: 0;
  margin: 0;
  position: relative;
  width: 30px;
`;

const RepleInput: React.FC = () => {
  return (
    <InputContainer>
      <RepleForm>
        <TextArea
          aria-label="댓글 달기..."
          placeholder="댓글 달기..."
          autoComplete="off"
          autoCorrect="off"
        />
        <RepleSubmitBtn className="upload" type="submit">
          게시
        </RepleSubmitBtn>
      </RepleForm>
    </InputContainer>
  );
};

export default RepleInput;
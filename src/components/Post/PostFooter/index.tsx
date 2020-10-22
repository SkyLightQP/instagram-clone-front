import React from 'react';
import styled from 'styled-components';
import AttributeContainer from '../../Attribute';
import LikeCount from '../../LikeCount';
import PostContent from './PostContent';

const PostFooterContainer = styled.div`
  width: 100%;
`;

const Preview = styled.div`
  padding: 0 16px;
  font-size: 14px;
`;

const RepleBox = styled.div``;

const RepleAllButton = styled.div`
  margin-bottom: 4px;
  & * {
    text-decoration: none;
    color: rgb(142, 142, 142);
    line-height: inherit;
  }
`;

const RepleContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: #262626;
  & .writter {
    font-weight: bold;
  }
  & .text {
    overflow-wrap: break-word;
  }
`;

const TimeTable = styled.div`
  margin-bottom: 4px;
  padding-left: 16px;
  & * {
    color: rgb(142, 142, 142);
    margin-bottom: 5px;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 10px;
  }
`;

const RepleInput = styled.section`
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

const PostFooter: React.FC = () => {
  return (
    <PostFooterContainer>
      <AttributeContainer />

      <LikeCount count={123} />

      <Preview>
        <PostContent writer="홍길동">
          테스트 내용. 가나다라마바사아자차카타파하 ABCDEFG 1234
        </PostContent>

        <RepleBox>
          <RepleAllButton>
            <a href="#">
              댓글 <span>100</span>개 미리보기
            </a>
          </RepleAllButton>

          <RepleContent>
            <span className="writter">abcd</span>
            &nbsp;
            <span className="text">치즈</span>
          </RepleContent>

          <RepleContent>
            <span className="writter">qpeo</span>
            &nbsp;
            <span className="text">우효</span>
          </RepleContent>
        </RepleBox>
      </Preview>

      <TimeTable>
        <a href="#">3시간전</a>
      </TimeTable>

      <RepleInput>
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
      </RepleInput>
    </PostFooterContainer>
  );
};

export default PostFooter;
import React from 'react';
import styled from 'styled-components';
import Like from '../../atomics/Attributes/Like';
import Comment from '../../atomics/Attributes/Comment';
import Share from '../../atomics/Attributes/Share';
import Bookmark from '../../atomics/Attributes/Bookmark';

const AttributeBoxStyle = styled.section`
  padding-left: 0.5rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: row;
`;

interface AttributeProps {
  readonly postId: string;
  readonly clickCallback: () => void;
}

const AttributeContainer: React.FC<AttributeProps> = ({ postId, clickCallback }) => {
  return (
    <AttributeBoxStyle>
      <Like postId={postId} clickCallback={clickCallback} />
      <Comment />
      <Share />
      <Bookmark />
    </AttributeBoxStyle>
  );
};

export default AttributeContainer;

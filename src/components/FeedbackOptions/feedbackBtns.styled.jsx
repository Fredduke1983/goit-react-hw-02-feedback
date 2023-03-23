import styled from '@emotion/styled';

const FeedbackBtnsStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const FeedbackBtnsTitle = styled.h1`
  display: flex;
  justify-content: center;
  color: red;
`;
const FeedbackBtns = styled.button`
  width: 150px;
  height: 40px;
  margin-right: 6px;
  transition: box-shadow 1s cubic-bezier(0.19, 1, 0.22, 1),
    color 1s cubic-bezier(0.19, 1, 0.22, 1),
    background-color 2s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    background-color: black;
    color: aliceblue;
    cursor: pointer;
    box-shadow: 1px 1px 1px black;
  }
`;

export { FeedbackBtnsTitle, FeedbackBtns, FeedbackBtnsStyle };

import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <TitleWrapper>
      <div>Official Fall Fest Website</div>
      <div>Coming Soon</div>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: white;
  padding-top: 25vh;
  font-size: 64px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export default App;

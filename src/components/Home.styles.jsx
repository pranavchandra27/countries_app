import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.bg};
  padding-top: 60px;
  min-height: calc(100vh- 80px);

  .spinner {
    height: calc(100vh - 80px);
    margin-top: 150px;
  }
`;

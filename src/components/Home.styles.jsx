import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.bg};
  padding-top: 60px;
  transition: background 0.1s ease;
  min-height: 100vh;

  .spinner {
    height: calc(100vh - 80px);
    margin-top: 150px;
  }
`;

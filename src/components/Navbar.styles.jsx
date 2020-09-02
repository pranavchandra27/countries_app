import styled from "styled-components";

export const Nav = styled.nav`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.elements};
  position: relative;

  .container {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    color: ${({ theme }) => theme.text};

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  .theme-switch {
    padding: 8px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    border: none;
    outline: none;
    background: #fff;
    border-radius: 5px;
    cursor: pointer;
    background: ${({ theme }) => theme.elements};
    color: ${({ theme }) => theme.text};

    :hover {
      background: ${({ theme }) => theme.bg};
    }

    .icon {
      margin-right: 5px;
      display: flex;
      align-items: center;
    }
  }
`;

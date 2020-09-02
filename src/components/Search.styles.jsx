import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  form {
    height: 55px;
    background: ${({ theme }) => theme.elements};
    display: flex;
    align-items: center;
    max-width: 480px;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);

    span {
      font-size: 20px;
      color: ${({ theme }) => theme.text};
      margin-top: 5px;
      padding: 0 30px;

      @media (max-width: 768px) {
        padding: 0 20px;
      }
    }

    input {
      width: 100%;
      border: none;
      outline: none;
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) => theme.text};
      background: transparent;

      ::placeholder {
        color: ${({ theme }) => theme.text};
      }
    }
  }

  select {
    width: 198px;
    height: 55px;
    padding: 0 24px;
    background: ${({ theme }) => theme.elements};
    outline: none;
    border: none;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    margin-left: 1rem;

    @media (max-width: 500px) {
      margin: 1.5rem 0 0 0;
    }
  }
`;

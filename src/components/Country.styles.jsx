import styled from "styled-components";

export const Wrapper = styled.div`
  width: 20%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background: ${({ theme }) => theme.elements};
  overflow: hidden;
  transition: background 0.1s ease;
  cursor: pointer;
  margin-right: 6.66%;
  margin-bottom: 70px;

  :nth-child(4n) {
    margin-right: 0px;
  }

  @media (max-width: 1200px) {
    width: 22%;
    margin-right: 3%;
    margin-bottom: 3%;
  }

  @media (max-width: 1024px) {
    width: 30%;
    margin-right: 5%;
    margin-bottom: 5%;

    :nth-child(4n) {
      margin-right: 5%;
    }

    :nth-child(3n) {
      margin-right: 0px;
    }
  }

  @media (max-width: 768px) {
    width: 45%;
    margin-right: 10%;
    margin-bottom: 10%;

    :nth-child(3n) {
      margin-right: 10%;
    }

    :nth-child(2n) {
      margin-right: 0px;
    }
  }
  @media (max-width: 500px) {
    width: 80%;
    margin-bottom: 10%;
    margin-right: 0;

    :nth-child(3n) {
      margin-right: 0px;
    }
  }

  .flag {
    width: 100%;
    object-fit: cover;
    height: 160px;
  }

  .country {
    padding: 29px 23px;

    .name {
      font-size: 18px;
      color: ${({ theme }) => theme.text};
    }

    .country-info {
      margin-top: 23px;

      p {
        font-size: 16px;
        margin-bottom: 8px;
        color: ${({ theme }) => theme.text};
        span {
          font-weight: bold;
        }
      }
    }
  }
`;

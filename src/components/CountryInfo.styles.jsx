import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.bg};
  padding: 60px 0;
  min-height: calc(100vh - 80px);

  .go_back {
    padding: 6px 40px 6px 30px;
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.elements};
    border: none;
    outline: none;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
    cursor: pointer;
    span {
      font-size: 22px;
      margin-right: 10px;
    }
  }

  .country {
    margin-top: 60px;
    width: 100%;
    display: flex;

    @media (max-width: 900px) {
      flex-direction: column;
    }

    .flag {
      width: 40%;
      display: grid;
      place-items: center;

      @media (max-width: 900px) {
        width: 100%;
      }

      img {
        width: 80%;

        @media (max-width: 768px) {
          width: 100%;
        }
      }
    }

    .country_info {
      width: 50%;
      margin-left: 10%;

      @media (max-width: 1024px) {
        margin-left: 5%;
      }
      @media (max-width: 900px) {
        width: 80%;
        margin: 50px auto 0 auto;
      }
      @media (max-width: 768px) {
        width: 100%;
      }

      .name {
        color: ${({ theme }) => theme.text};
      }

      .details {
        margin-top: 25px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        text-align: left;
        @media (max-width: 768px) {
          flex-direction: column;
        }

        .region_details {
          width: 50%;
          text-align: left;

          P {
            font-size: 16px;
            margin-bottom: 10px;
            color: ${({ theme }) => theme.text};
            span {
              font-weight: bold;
              margin-right: 5px;
            }
          }

          @media (max-width: 768px) {
            :nth-child(2) {
              margin-top: 20px;
            }
          }
        }
      }

      .borders {
        margin-top: 25px;
        display: flex;
        flex-wrap: wrap;
        .title {
          font-weight: bold;
          color: ${({ theme }) => theme.text};

          @media (max-width: 768px) {
            width: 100%;
          }
        }

        .border {
          background: ${({ theme }) => theme.elements};
          box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
          margin-left: 10px;
          padding: 5px 10px;
          border-radius: 5px;
          color: ${({ theme }) => theme.text};

          @media (max-width: 768px) {
            margin-top: 10px;
          }
        }
      }
    }
  }
`;

import styled from 'styled-components';

const NewsletterWrapper = styled.div`
  position: relative;
  background: linear-gradient(
    -139deg,
    rgb(122,207,162) 0%,
    rgb(81,183,157) 100%
  );
  padding: 44px 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 80px;
  @media (max-width: 1220px) {
    padding: 35px 40px;
  }
  @media (max-width: 575px) {
    padding: 35px 20px;
  }
  @media (max-width: 990px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const FormLoader = styled.div`
    div.loader-container:first-child {
        width: inherit;
        height: inherit;
    }
`;

export const ContactFormInputs = styled.div`
  display: flex;
  flex-direction:column;
`

export const ContactFormWrapper = styled.div`

  .email_input {
    flex-grow: 1;
    margin-right: 20px;

    @media (max-width: 575px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
    &.is-material {
      &.is-focus {
        label {
          font-size: 14px;
          color: #fff;
        }
        .highlight {
          background: #fff;
          height: 1px;
        }
      }
    }

    .highlight {
      background: rgba(255, 255, 255, 0.4);
    }

    input {
      background: transparent;
      font-size: 16px;
      font-weight: 400;
      color: #fff;
      padding: 10px 0;
      border-color: #dadada;
      @media (max-width: 575px) {
        height: 48px;
      }
    }

    label {
      font-size: 17px;
      color: #fff;
      font-weight: 400;
      top: 5px;
      pointer-events: none;
    }
  }
`;


export default NewsletterWrapper;

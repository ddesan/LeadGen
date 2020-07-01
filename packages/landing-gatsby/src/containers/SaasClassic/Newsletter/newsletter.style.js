import styled from 'styled-components';
import Box from "reusecore/src/elements/Box";

const NewsletterWrapper = styled.div`
  & > div.cta-bottom {
    @media (min-width: 990px) {
      display: none;
    }
  }
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
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const FormLoader = styled.div`
    
    & > div.loader-container > div {
        width: 30px;
        height: 30px;
    }
`;

export const ContactFormInputs = styled.div`
  display: flex;
  flex-direction:column;
  flex: 1 1 300px;
`

export const ContactFormWrapper = styled.div`

  max-width: 300px;
  width: 100%;
  display: flex;

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

export const CallToActionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > div.cta-header {
    max-width: 300px;
    margin-bottom: 20px;
   @media (max-width: 990px) {
      p {  display: none; }
    }
  }
  
  & > div.cta-button {
   @media (max-width: 990px) {
      display: none;
    }
  }
`

export const NewsletterColumn = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  & > div.cta-button-bottom {
   @media (min-width: 990px) {
      display: none;
    } 
  }
`

export default NewsletterWrapper;

import styled from 'styled-components';

export const Wrapper = styled.div`
  .categoryName {
    margin: 5px;
  }
  .card {
    margin-bottom: 20px;
    text-align: center;

    .card-title {
      font-size: 16px
      display: block;
      text-overflow: ellipsis;
      word-wrap: break-word;
      overflow: hidden;
      max-height: 3.6em;
      line-height: 1.2em;
    }
    
    .price {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.015em;
      color: #000000;
    }
    
    &:hover {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;
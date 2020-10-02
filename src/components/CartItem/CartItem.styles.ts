import styled from 'styled-components';

export const Wrapper = styled.div`
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #f6f6f6;
  margin-bottom: 30px;
  
  .photo {
    padding: 10px 0 10px 10px;
  }
  h5 {
    margin-bottom: 50px;
  }
  
  .items-quantity {
    
    img{
      cursor: pointer;
      margin-top: -5px;
    }
    span {
      margin: 0 10px 0 10px;
      font-size: 20px;
      font-weight: bold;
    }
  }
  
  
  button {
    background: none;
    color: #BDBDBD;
    border: none;
    padding: 0;
    font: inherit;
    margin-right: 20px;
    
    img {
      margin-top: -6px;
    }
  }
`;
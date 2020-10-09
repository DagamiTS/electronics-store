import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding: 20px;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #ebebeb;
  margin-bottom: 40px;
  
  .row:nth-child(odd) {
    background-color: rgba(148,148,153,.1);
  }
  
  h2 {
    margin-bottom: 25px;
  }
  
  span {
    line-height: 30px;
  }
`;
import styled from 'styled-components';

export const Wrapper = styled.div`
  img {
    height: 60px;
  }
  
  a {
    color: #fff;
    text-decoration: underline;
    
    &: hover {
      text-decoration: none;
    }
  }
  
  span {
    color: #fff;
    opacity: 0.6;
  }
`;
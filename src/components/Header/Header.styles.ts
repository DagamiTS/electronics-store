import styled from 'styled-components';

export const Wrapper = styled.div`
  ul {
    list-style-type: none;
    
    li {
      cursor: pointer;
      color: #e5e5e5;
    }
  }

  @media(max-width: 576px) {
    form {
      display: none;
    }
  }
`;
import styled from 'styled-components';

export const Wrapper = styled.div`
  .sort-wrapper {
    position: relative;
  }
  .sort-text {
    margin-top: 10px;
    
    svg {
      transform: rotate(180deg);
      &.rotated { // показует что у svg есть дополнительный класс
        transform: rotate(0deg);
      }
    }
    span {
      border-bottom: 1px dotted;
      cursor: pointer;
      user-select: none;
    }
  }
  .sort-popup {
    position: absolute;
    right: -20px;
    z-index: 9999;
    margin-top: 15px;
    background-color: #fff;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    overflow: hidden;
    width: 130px;
    
    ul {
      list-style-type: none;
      overflow: hidden;
      padding-left: 0;
      margin: 0;
      
      li {
        padding: 12px 20px;
        cursor: pointer;
        text-align: right;

        &.active,
        &:hover {
          background: rgba(254, 95, 30, 0.05);
        }

        &.active {
          font-weight: bold;
          color: $orange;
        }
      }
    }
  }
`;
import styled from 'styled-components';

export const Transaction = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 750px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0px 2px 10px 0px #68696980;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;

  th {
    padding-top: 15px;
    padding-bottom: 15px;
    color: #fff;
    background-color: #21bac8;
    text-transform: uppercase;
  }

  th:not(:last-child) {
    border-right: 1px solid #fff;
  }

  td {
    padding-top: 15px;
    padding-bottom: 15px;
    color: #4f5353;
  }

  tr:nth-child(2n) {
    background-color: #e5eef1;
  }

  tr:not(:last-child) {
    border-bottom: 1px solid #c8d1d6;
  }

  td:nth-child(1) {
    text-transform: capitalize;
  }

  td:not(:last-child) {
    border-right: 1px solid #c8d1d6;
  }
`;

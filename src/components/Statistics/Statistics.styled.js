import styled from 'styled-components';

export const StatCard = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  padding-top: 30px;
  width: 400px;
  background-color: #fff;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 2px 10px 0px #68696980;
  overflow: hidden;
`;

export const StatTitle = styled.h2`
  margin-bottom: 30px;
`;

export const StatList = styled.ul`
  display: flex;
  color: #fff;
`;

export const StatItem = styled.li`
  padding-top: 15px;
  padding-bottom: 15px;
  width: calc(100% / 5);
  background-color: #aac0be;
`;

export const StatLabel = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export const StatPercentage = styled.span`
  font-size: 18px;
`;

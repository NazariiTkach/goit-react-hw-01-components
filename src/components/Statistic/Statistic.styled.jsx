import styled from '@emotion/styled';

const StatisticSection = styled.section`
  display: block;
  margin: 40px;
  text-align: center;
  width: 600px;
  box-shadow: 1px 2px 10px -4px rgba(66, 68, 90, 1);
`;
const StatisticTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 32px;
  background-color: snow;
  width: 100%;
  height: 72px;
`;
const StatisticList = styled.ul`
  display: flex;
  justify-content: space-around;
`;
const StatisticListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 88px;
  color: snow;
  text-shadow: 1px 1px 1px rgba(66, 68, 90, 1);
  &:nth-of-type(1) {
    background-color: #3a7ab9;
  }
  &:nth-of-type(2) {
    background-color: #900c3f;
  }
  &:nth-of-type(3) {
    background-color: #39869b;
  }
  &:nth-of-type(4) {
    background-color: #6d399b;
  }
  &:nth-of-type(5) {
    background-color: #9b3949;
  }
`;
const StatisticLabel = styled.p`
  display: block;
  font-size: 22px;
  margin-bottom: 8px;
`;
const StatisticPercent = styled.p`
  display: block;
  font-size: 28px;
  font-weight: 600;
`;

export {
  StatisticSection,
  StatisticTitle,
  StatisticList,
  StatisticListItem,
  StatisticLabel,
  StatisticPercent,
};
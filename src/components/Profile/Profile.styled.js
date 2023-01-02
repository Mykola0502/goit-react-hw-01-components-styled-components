import styled from 'styled-components';

export const User = styled.div`
  margin: 0 auto 30px auto;
  padding-top: 30px;
  width: 300px;
  background-color: #fff;
  border: 2px solid #cfd8e0;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0px 3px 10px 0px #68696980;
`;

export const Description = styled.div`
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  margin-bottom: 20px;
  width: 120px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
  background-color: #dae8e9;
`;

export const UserName = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
`;

export const UserTag = styled.p`
  margin-bottom: 15px;
  color: #a7a7a7;
  font-weight: 500;
`;

export const UserLocation = styled.p`
  color: #a7a7a7;
  font-weight: 500;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  background-color: #e2eaee;
  border-top: 2px solid #cfd8e0;
`;
export const StatsCard = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  width: calc(100% / 3);

  & + & {
    border-left: 2px solid #cfd8e0;
  }
`;
export const StatsLabel = styled.span`
  margin-bottom: 5px;
  display: block;
  color: #a7a7a7;
  font-weight: 500;
  text-align: center;
`;
export const StatsQuantity = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

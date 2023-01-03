import styled from 'styled-components';

export const User = styled.div`
  margin: 0 auto 30px auto;
  padding-top: 30px;
  width: 300px;
  background-color: ${props => props.theme.colors.white};
  border: ${props => `2px solid ${props.theme.colors.borderColor}`};
  border-radius: 5px;
  text-align: center;
  box-shadow: ${({ theme }) =>
    `${theme.spacing(0)} ${theme.spacing(1)} ${theme.spacing(
      3
    )} ${theme.spacing(0)} ${theme.colors.shadowColor}`};
`;

export const Description = styled.div`
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  margin-bottom: ${props => props.theme.spacing(5)};
  width: 120px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
  background-color: ${props => props.theme.colors.greyBackgroundColor};
`;

export const UserName = styled.p`
  margin-bottom: 15px;
  font-size: ${props => props.theme.spacing(5)};
  font-weight: 700;
`;

export const UserTag = styled.p`
  margin-bottom: 15px;
  color: ${props => props.theme.colors.primaryTextColor};
  font-weight: 500;
`;

export const UserLocation = styled.p`
  color: ${props => props.theme.colors.primaryTextColor};
  font-weight: 500;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.greyBackgroundColor};
  border-top: ${props => `2px solid ${props.theme.colors.borderColor}`};
`;
export const StatsCard = styled.li`
  padding-top: ${props => props.theme.spacing(5)};
  padding-bottom: ${props => props.theme.spacing(5)};
  width: calc(100% / 3);

  & + & {
    border-left: ${props => `2px solid ${props.theme.colors.borderColor}`};
  }
`;
export const StatsLabel = styled.span`
  margin-bottom: ${props => props.theme.spacing(1)};
  display: block;
  color: ${props => props.theme.colors.primaryTextColor};
  font-weight: 500;
  text-align: center;
`;
export const StatsQuantity = styled.span`
  font-size: ${props => props.theme.spacing(4)};
  font-weight: 700;
`;

import styled from 'styled-components';

export const Friend = styled.li`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 10px 0px #68696980;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const FriendStatus = styled.span`
  display: inline-flex;
  width: 20px;
  height: 20px;
  background-color: ${props => {
    return props.status ? '#008000' : '#ff0000';
    // if (props.isOnline) {
    //   return '#008000';
    // }
    // return '#ff0000';
  }};
  border-radius: 50%;
`;

export const FriendAvatar = styled.img`
  width: 70px;
  border: 2px solid #e3e5ef;
  border-radius: 10px;
  overflow: hidden;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

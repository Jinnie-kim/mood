import styled from '@emotion/styled';

export const MypageLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 900px;
  height: 300px;
  margin: 200px auto 0;
  padding: 20px;
  border: 1px solid hsla(242, 100%, 70%, 1);
  border-radius: 20px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.44);
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const UserImage = styled.img`
  width: auto;
  height: 250px;
  border-radius: 20px;
`;

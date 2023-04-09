import styled from '@emotion/styled';

export const ToppageLayout = styled.section`
  display: flex;
  flex-direction: column;
  width: 900px;
  margin: 100px auto 0;
  padding: 20px;
  border: 1px solid hsla(242, 100%, 70%, 1);
  border-radius: 20px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.44);
`;

export const TopItemLayout = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TopItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
`;

export const TopItemLists = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 400px;
  height: 100%;
  text-align: left;
`;

export const TopItemList = styled.li`
  color: #293852;
  padding-bottom: 5px;
  border-bottom: 1px solid hsla(242, 100%, 70%, 1);
`;

export const TermButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const TermButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 5px;
  border: 1px solid hsla(340, 100%, 76%, 1);
  border-radius: 10px;
  background-color: transparent;
  box-shadow: -2px 1px 5px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  &:hover {
    background-color: hsla(343, 100%, 76%, 1);
    color: aliceblue;
  }
  &:focus {
    color: aliceblue;
    background-color: hsla(343, 100%, 76%, 1);
  }
`;

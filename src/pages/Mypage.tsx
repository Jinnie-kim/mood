import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tokenAction } from '../store/token-slice';
import { getUserProfile } from '../api/user';
import { MypageLayout, InfoBox, UserImage } from '../style/Mypage.styled';

interface tokenType {
  token: { accessToken: string };
}

const MyPage = () => {
  const [userData, setUserData] = useState<UserProfile>();
  const dispatch = useDispatch();
  const accessToken = useSelector((state: tokenType) => state.token.accessToken);

  useEffect(() => {
    if (accessToken) {
      getUserProfile(accessToken).then((res) => {
        setUserData(res);
      });
      return;
    }
    if (localStorage.getItem('accessToken') !== null) {
      dispatch(tokenAction.getToken(localStorage.getItem('accessToken')));
    }
  }, [accessToken]);

  return (
    <MypageLayout>
      <InfoBox>
        <UserImage src={userData?.images[0].url} alt="profile-picture" />
        <div>
          <h1>{userData?.display_name}</h1>
          <ul>
            <li>Member: {userData?.id}</li>
            <li>Membership: {userData?.product}✨</li>
            <li>Email: {userData?.email}</li>
            <li>Service Country: {userData?.country}🇰🇷</li>
            <li>
              <a href={userData?.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                스포티파이 웹으로 열기🧚🏻‍♂️
              </a>
            </li>
          </ul>
        </div>
      </InfoBox>
    </MypageLayout>
  );
};

export default MyPage;

import { useEffect, useState } from 'react';
import { useToken, useGetToken } from '../store/store';
import { getUserProfile } from '../api/user';
import { MypageLayout, InfoBox, UserImage } from '../style/Mypage.styled';

const MyPage = () => {
  const token = useToken();
  const getToken = useGetToken();
  const [userData, setUserData] = useState<UserProfile>();

  useEffect(() => {
    if (token) {
      getUserProfile(token).then((res) => {
        setUserData(res);
      });
      return;
    }
    if (localStorage.getItem('accessToken') !== null) {
      getToken(localStorage.getItem('accessToken') as string);
    }
  }, [token]);

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

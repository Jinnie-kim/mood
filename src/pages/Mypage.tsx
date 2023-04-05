const MyPage = () => {
  console.log(localStorage.getItem('accessToken'));
  return <h1>this is MyPage page</h1>;
};

export default MyPage;

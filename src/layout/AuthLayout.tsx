import useAuth from '../hooks/useAuth';
import MenuBar from '../component/MenuBar';

interface GeneralLayoutProps {
  children: React.ReactNode;
  code: string;
}

const AuthLayout: React.FC<GeneralLayoutProps> = ({ children, code }) => {
  const accessToken = useAuth(code);
  return (
    <>
      {children}
      <MenuBar />
    </>
  );
};

export default AuthLayout;

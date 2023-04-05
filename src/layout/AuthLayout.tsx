import MenuBar from '../component/MenuBar';
interface GeneralLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <MenuBar />
    </>
  );
};

export default AuthLayout;

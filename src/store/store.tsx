import { useState, createContext, useContext } from 'react';

const TokenContext = createContext<string | null>(null);
const GetTokenContext = createContext<(token: string | null) => void>(() => {});

export const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <TokenContext.Provider value={token}>
      <GetTokenContext.Provider value={setToken}>{children}</GetTokenContext.Provider>
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  const token = useContext(TokenContext);
  return token;
};

export const useGetToken = () => {
  const getToken = useContext(GetTokenContext);
  return getToken;
};

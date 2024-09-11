import useTokenRefresh  from '../redux/hooks/useTokenRefresh'; // Asumsi hook berada di folder hooks

const TokenRefreshProvider = ({ children }: { children: React.ReactNode }) => {
  useTokenRefresh(); // Memanggil hook untuk auto-refresh token

  return <>{children}</>; // Menampilkan komponen anak-anak
};

export default TokenRefreshProvider;

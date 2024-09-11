import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../slices/authSlice"; // contoh aksi Redux

const useTokenRefresh = () => {
  const dispatch = useDispatch();
  const refreshToken = async () => {
    try {
      const response = await axios.post('/auth/refresh-token', {
        refreshToken: localStorage.getItem('refreshToken'),
      });
      const newAccessToken = response.data.accessToken;
      dispatch(setToken(newAccessToken));
      localStorage.setItem('accessToken', newAccessToken); // Update local storage
    } catch (error) {
      console.error("Failed to refresh token:", error);
      // Redirect ke login jika gagal refresh
      window.location.href = "/login";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refreshToken();
    }, 6 * 60 * 1000); // 6 menit = 360.000 ms
    return () => clearInterval(interval); // Hapus interval saat komponen di-unmount
  }, []);

  return null; // Tidak perlu return apa pun karena hanya side effect
};

export default useTokenRefresh;

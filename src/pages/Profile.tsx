import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { setIMG } from '../redux/slices/authSlice';
import Swal from 'sweetalert2';

interface PayloadInterface extends JwtPayload {
  email: string;
  id: number;
}

interface ProfileData {
  fullname: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  image?: File | string;
}

const Profile = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const tokenPayload = jwtDecode<PayloadInterface>(token);

  const [profileData, setProfileData] = useState<ProfileData>({
    fullname: '',
    email: '',
    phone: '',
    password: '',
    address: '',
    image: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/users/${tokenPayload.id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const { fullname, email, phone, address, image } = response.data.data[0];
        setProfileData({ fullname, email, phone, password: '', address, image });
        dispatch(setIMG(image));
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfileData();
  }, [tokenPayload.id, token, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setProfileData((prev) => ({
        ...prev!,
        image: files[0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(profileData).forEach(([key, value]) => {
      if (key === 'image' && value instanceof File) {
        formData.append(key, value);
      } else if (key !== 'password' || value) {
        formData.append(key, value.toString());
      }
    });

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_REACT_APP_API_URL}/users/${tokenPayload.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      dispatch(setIMG(response.data.data.image));
      Swal.fire('Success', 'Profile updated successfully', 'success');
    } catch (error) {
      Swal.fire('Error', 'Profile update failed', 'error');
      console.error('Error updating user:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="md:px-16 md:py-8 flex flex-col gap-4 p-4">
      <h5 className="text-2xl md:text-5xl font-bold">Profile</h5>
      <section className="flex flex-col md:flex-row gap-4">
        <div className="profile-user flex h-fit flex-col md:basis-1/5 border-2 rounded-lg p-4">
          <div className="flex flex-col items-center gap-4">
            <div className="font-bold text-2xl">{profileData.fullname}</div>
            <div className="text-gray-400">{profileData.email}</div>
            <img
              className="h-[200px] w-[200px] object-cover rounded-full"
              src={
                profileData.image instanceof File
                  ? URL.createObjectURL(profileData.image)
                  : profileData.image
              }
              alt="Profile"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="upload-photo"
            />
            <label htmlFor="upload-photo" className="item h-10 w-full bg-oren rounded-lg font-bold text-center cursor-pointer">
              Upload New Photo
            </label>
          </div>
        </div>
        <div className="profile-update-form h-fit md:w-full border-2 rounded-lg font-medium">
          <form className="flex flex-col gap-4 w-full p-8" onSubmit={handleSubmit}>
            {['fullname', 'email', 'phone', 'password', 'address'].map((field) => (
              <div key={field} className="item-form gap-4">
                <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  className="border-2 w-full rounded-lg h-10 p-4"
                  type={field === 'password' ? 'password' : 'text'}
                  name={field}
                  value={profileData[field as keyof ProfileData] as string}
                  onChange={handleChange}
                  placeholder={`Enter your ${field}`}
                />
              </div>
            ))}
            <button className="item h-10 w-full bg-oren rounded-lg" type="submit">
              Update Profile
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Profile;

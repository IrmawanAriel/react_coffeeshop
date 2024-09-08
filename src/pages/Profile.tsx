import React, { useState } from 'react';
import axios from 'axios';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { setIMG } from '../redux/slices/authSlice';

interface payloadInterface extends JwtPayload {
    email: string;
    id: number;
}

interface ProfileData {
    fullname: string;
    email: string;
    phone: string;
    password: string;
    address: string;
    image: any;
}

const Profile = () => {
    const { token, image } = useSelector((state: RootState) => state.auth);
    const tokenPayload = jwtDecode<payloadInterface>(token);
    const [profileImage, setProfileImage] = useState<File | null>(null);

    const [profileData, setProfileData] = useState<ProfileData>({
        fullname: '',
        email: '',
        phone: '',
        password: '',
        address: '',
        image: null
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setProfileData({
            ...profileData,
            [id]: value
        });
    };

    const handleImageUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setProfileImage(file);
            setProfileData({
                ...profileData,
                image: file
            });
        }
    };

    const UpdateUserFunction = async () => {
        try {
            const formData = new FormData();
            formData.append('fullname', profileData.fullname);
            formData.append('email', profileData.email);
            formData.append('phone', profileData.phone);
            formData.append('password', profileData.password);
            formData.append('address', profileData.address);
            if (profileData.image) {
                formData.append('image', profileData.image);
            }

            await axios.put(`${import.meta.env.VITE_REACT_APP_API_URL}/users/${tokenPayload.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                setIMG(profileData.image)
            })
            .catch((error) => {
                console.log(error);
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        UpdateUserFunction();
        console.log('Updated Profile Data:', profileData);
        console.log('Updated Profile image:', profileImage);
    };

    return (
        <main className="md:px-16 md:py-8 flex flex-col gap-4 p-4">
            <h5 className="text-2xl md:text-5xl font-bold">Profile</h5>
            <section className="flex flex-col md:flex-row gap-4">
                <div className="profile-user flex h-fit flex-col md:basis-1/5 border-2 rounded-lg p-4">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex basis-1/4 w-full flex-col gap-1 items-center">
                            <div className="font-bold text-2xl">
                                {profileData.fullname}
                            </div>
                            <div className="text-gray-400">
                                {profileData.email}
                            </div>
                        </div>
                        <div className="basis-2/2 px-4">
                            <img 
                                className="h-[200px] w-[200px] object-cover rounded rounded-full" 
                                src={profileImage ? URL.createObjectURL(profileImage) : `${import.meta.env.VITE_REACT_APP_API_URL}/${image}`} 
                                alt="Profile" 
                            />
                        </div>
                        <div className="basis-1/4 flex flex-col gap-2">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                                id="upload-photo"
                            />
                            <label htmlFor="upload-photo" className="item h-10 w-full rounded-lg bg-oren font-bold text-center cursor-pointer">
                                Upload New Photo
                            </label>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <p className="text-gray-400">Science</p>
                                <p>20 January 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-update-form h-fit md:w-full border-2 rounded-lg font-medium">
                    <form className="flex flex-col gap-4 w-full p-8" onSubmit={handleSubmit}>
                        <div className="item-form gap-2">
                            <label htmlFor="fullname">Full Name</label><br /><br />
                            <input
                                className="fullname border-2 w-full rounded-lg h-10 p-4"
                                type="text"
                                id="fullname"
                                value={profileData.fullname}
                                onChange={handleChange}
                                placeholder="Enter Your Full Name"
                            />
                        </div>
                        <div className="item-form gap-4">
                            <label htmlFor="email">Email</label><br /><br />
                            <input
                                className="email border-2 w-full rounded-lg h-10 p-4"
                                type="email"
                                id="email"
                                value={profileData.email}
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                            />
                        </div>
                        <div className="item-form gap-4">
                            <label htmlFor="phone">Phone</label><br /><br />
                            <input
                                className="phone border-2 w-full rounded-lg h-10 p-4"
                                type="text"
                                id="phone"
                                value={profileData.phone}
                                onChange={handleChange}
                                placeholder="Enter Your Phone Number"
                            />
                        </div>
                        <div className="item-form gap-4">
                            <label htmlFor="password">Password</label><br /><br />
                            <input
                                className="password border-2 w-full rounded-lg h-10 p-4"
                                type="password"
                                id="password"
                                value={profileData.password}
                                onChange={handleChange}
                                placeholder="Enter Your Password"
                            />
                        </div>
                        <div className="item-form gap-4">
                            <label htmlFor="address">Address</label><br /><br />
                            <input
                                className="address border-2 w-full rounded-lg h-10 p-4"
                                type="text"
                                id="address"
                                value={profileData.address}
                                onChange={handleChange}
                                placeholder="Enter Your Address Again"
                            />
                        </div>
                        <button className="item h-10 w-full rounded-lg bg-oren" type="submit">
                            Update Profile
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Profile;

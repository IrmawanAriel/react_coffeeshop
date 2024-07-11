import React, { useState } from 'react';
import GaluhWizardImage from '../images/GaluhWizard.png';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        fullname: 'galuh wizard',
        email: 'gahuls@gmail.com',
        phone: '',
        password: '',
        address: ''
    });

    const [profileImage, setProfileImage] = useState(GaluhWizardImage);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setProfileData({
            ...profileData,
            [id]: value
        });
    };

    const handleImageUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const files = e.target.files;
        if (files && files[0]) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        

        console.log('Updated Profile Data:', profileData);
        console.log('Updated Profile Data:', profileImage);
    };

    return (
        <main className="md:px-16 md:py-8 flex flex-col gap-4 p-4">
            <h5 className="text-2xl md:text-5xl font-bold">
                Profile
            </h5>
            
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
                            <img className=" h-[200px] w-[200px] object-cover rounded rounded-full" src={profileImage} alt="Profile" />
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
                                <p className="text-gray-400">
                                    Science
                                </p>
                                <p>
                                    20 January 2022
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="profile-update-form h-fit md:w-full border-2 rounded-lg font-medium">
                    <form className="flex flex-col gap-4 w-full p-8" onSubmit={handleSubmit}>
                        <div className="item-form gap-2">
                            <label htmlFor="fullname">Full Name</label><br /><br />
                            <input
                                className="fullname border-2 w-full rounded-lg h-10"
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
                                className="email border-2 w-full rounded-lg h-10"
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
                                className="phone border-2 w-full rounded-lg h-10"
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
                                className="password border-2 w-full rounded-lg h-10"
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
                                className="address border-2 w-full rounded-lg h-10"
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

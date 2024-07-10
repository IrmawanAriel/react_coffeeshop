import React from 'react';

type ModalContentProps = {
    onClose: React.MouseEventHandler<HTMLButtonElement>;
    onAgree: React.MouseEventHandler<HTMLButtonElement>; 
};


const ModalContent: React.FC<ModalContentProps> = ({ onClose ,onAgree}) => {
return  <div className="show fixed z-50 inset-0 bg-black bg-opacity-50 modal-bg justify-center items-center ">
        <div className="bg-white p-6 rounded shadow-lg max-w-md uw:max-w-2xl w-3/4 tbt:w-full text-center absolute w-250 top-50 left-1/2 transform -translate-x-1/2 bottom-70">
        <h2 className="text-sm tbt:text-2xl uw:text-4xl font-semibold mb-4">Confirm Log Out</h2>
        <p className="text-xs xsm:text-sm tbt:text-base uw:text-2xl mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-center">
            <button onClick={onAgree} className="text-xs tbt:text-base uw:text-2xl bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-4 py-2 rounded mr-2">
            Log Out
            </button>
            <button onClick={onClose} className="text-xs tbt:text-base uw:text-2xl bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white px-4 py-2 rounded">
            Cancel
            </button>
        </div>
        </div>
        </div>;
};

export default ModalContent;

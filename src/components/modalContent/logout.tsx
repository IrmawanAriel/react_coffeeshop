import React from 'react';

type ModalContentProps = {
    onClose: React.MouseEventHandler<HTMLButtonElement>;
    onAgree: React.MouseEventHandler<HTMLButtonElement>; 
};


const ModalContent: React.FC<ModalContentProps> = ({ onClose ,onAgree}) => {
return  <div className="modal p-4 gap-2 flex justify-evenly items-center shadow-md bg-white border-2 border-gray-200 rounded-lg absolute w-250 top-70 left-1/2 transform -translate-x-1/2 bottom-70">
            <div>I'm a modal dialog</div>
            <div className='flex flex-row gap-2'>
                <button className='bg-blue-300 p-2' onClick={onAgree}>Yes</button>
                <button className='bg-red-300 p-2' onClick={onClose}>No</button>
            </div>
        </div>;
};

export default ModalContent;

import { createPortal } from 'react-dom';
import ModalContent from './modalContent/logout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInState } from './context/SignInToken';

export default function PortalExample() {
  const { deleteToken } = useSignInState();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Pindahkan useNavigate ke dalam komponen

  const handleAgree = () => {
    deleteToken();
    setShowModal(false);
    navigate('home'); // Contoh navigasi ke halaman utama setelah logout
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className='px-4 py-2 text-sm bg-red-500 hover:bg-red-800 w-full text-left'>
        <p>Logout</p>
      </button>

      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} onAgree={handleAgree} />,
        document.getElementById('modal-root')!
      )}
    </>
  );
}

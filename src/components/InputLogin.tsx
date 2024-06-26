import React, { ChangeEvent, useState } from 'react';
import axios from 'axios'; 
import emailIcon from "../icons/email.png";
import passwordIcon from "../icons/password.png";

interface email {
  email: {
    email: string;
    password: string;
  }
}
interface pass {
  password: string
}

type InputProps = {
  img: {
    src: string;
    alt: string;
  };
  input: {
    type: string;
    name: string;
    placeholder: string;
  };
  label: string;
  isToggler?: boolean;
  onTogglerHandler?: (e: React.MouseEvent) => void;
};

const [email, setEmail] = useState<email>();
// const [password, setPassword] = useState();

function InputLogin(props: InputProps) {
  const { img, input, label} = props;

  const handleSubmit = async () => {
    try {
      const response = await axios.post('', {
        email
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  function onInputChange(e: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <form onSubmit={handleSubmit} className="flex-form flex flex-col gap-4 font-semibold">
          <img src={img.src} alt={img.alt} />
          <label htmlFor={input.name}>{label}</label>
          <div className="flex flex-row gap-2 border-2 rounded rounded-lg items-center p-2">
            <img className="h-4" src={img.src} alt={img.alt} />
            <input type={input.type} 
              name={input.name} 
              placeholder={input.placeholder} 
              onChange={onInputChange} 
            />
          </div>
          <label htmlFor='password'>{label}</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={onInputChange}
          />
      <button className="item font-semibold border-2 bg-oren w-full rounded rounded-lg" type="submit">
        Login
      </button>
    </form>
  );
}

export default InputLogin;

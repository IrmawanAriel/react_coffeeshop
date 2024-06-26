import axios from "axios";
import { ChangeEventHandler } from "react";

type InputProps = {
  img: {
    src: string;
    alt: string;
  };
  input: {
    onChange: ChangeEventHandler<HTMLInputElement>;
    type: string;
    name: string;
    placeholder: string;
    value: string;
  };
  label: string;
  isToggler?: boolean;
  onTogglerHandler?: (e: React.MouseEvent) => void;
};

function Input(props: InputProps) {
  const { img, input, label} = props;

  return (
    <>
      <div className="item-form flex flex-col gap-4 font-semibold ">
        <label htmlFor={input.name}>{label}</label>
          <div className="flex flex-row gap-2 border-2 rounded rounded-lg items-center p-2">
            <img className="h-4" src={img.src} alt={img.alt} />
            <input type={input.type} 
            id={input.name} 
            name={input.name} 
            value={input.value} 
            placeholder={input.placeholder} 
            onChange={input.onChange}/>
          </div>
      </div>
    </>
  );
}

export default Input;

import { ButtonHTMLAttributes, FC } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   text: string;
}
const Button: FC<ButtonProps> = ({ text }) => {
   return <label className="btn btn-primary drawer-button">{text}</label>;
};
export default Button;

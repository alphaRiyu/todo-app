import { KeyboardEvent } from 'react';
import './InputField.css';

interface InputFieldProps {
    className?: string;
    inputRef: React.RefObject<HTMLInputElement>;
    onEnter?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({className, inputRef, onEnter}) => {

    const classes = `input_field ${className}`;

    const handleOnEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (onEnter && event.key === 'Enter') {
            onEnter();
        }
    }

    return <input type='text' ref={inputRef} className={classes} onKeyDown={handleOnEnter} />

}

export default InputField;
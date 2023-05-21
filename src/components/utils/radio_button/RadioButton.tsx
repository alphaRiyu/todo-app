import './RadioButton.css';

interface RadioButtonProps {
    id: string;
    value: string;
    label: string;
    checked: boolean;
    onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({id, value, label, checked, onChange}) => {

    const handleOnChange = () => {
        onChange(value)
    }

    return (
        <label htmlFor={id}>
            <input 
                type='radio'
                id={id}
                value={value}
                checked={checked}
                onChange={handleOnChange}
            />
            {label}
        </label>
    )

}

export default RadioButton;
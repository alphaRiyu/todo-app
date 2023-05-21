interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({className, children, onClick}) => {

    const classes = `button ${className}`;

    const handleOnClick = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <button className={classes} onClick={handleOnClick}>
            {children}
        </button>
    )

}

export default Button;
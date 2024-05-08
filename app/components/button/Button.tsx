type ButtonType = {
    title: string;
    onClick: () => void;
}

const Button: React.FC<ButtonType> = ({
    title,
    onClick
}) => {
    return(
        <button onClick={onClick}>{title}</button>
    )
}

export default Button
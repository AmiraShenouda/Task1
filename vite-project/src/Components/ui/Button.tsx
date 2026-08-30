type ButtonProps = {
  text: string;
  onClick: () => void;
  variant: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

const Button = ({
  text,
  onClick,
  variant,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variant}`}
    >
      {text}
    </button>
  );
};

export default Button;
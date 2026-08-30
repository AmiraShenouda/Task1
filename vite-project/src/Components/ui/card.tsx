import { ReactNode } from "react";

type CardProps = {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
};

const Card = ({
  title,
  description,
  image,
  children,
}: CardProps) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} />}

      <h2>{title}</h2>
      <p>{description}</p>

      {children}
    </div>
  );
};

export default Card;
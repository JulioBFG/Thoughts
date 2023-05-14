import { CardProps } from "./types";

const Card = ({ title, description, buttonContent }: CardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{buttonContent}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

import { CardProps } from "./types";

const Card = ({ title, description, onButtonClick }: CardProps) => {
  return (
    <div className="flex items-center gap-5">
      <div className="card w-48 bg-base-100 shadow-xl">
        <div className="p-2 flex gap-10 h-12 items-center mx-auto">
          <h2 className="">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <button className="btn btn-square" onClick={onButtonClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default Card;

import { CardProps } from "./types";
import TextBox from "../TextBox/TextBox";

const Card = ({ title, description}: CardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-0 flex rounded-2xl">
      <div className="card-body rounded">
        <h2 className="card-title">{title}</h2>
        {description && (
          <p>{description}</p>
        )}
        <TextBox/>
        <div className="card-actions justify-end flex">
          <button className="btn btn-secondary rounded-md">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

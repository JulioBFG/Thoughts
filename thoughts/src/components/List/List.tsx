import Card from "../Card/Card";
import TextBox from "../TextBox/TextBox";
import { useState } from "react";

const List = () => {
  const [textBoxOpen, setTextBoxOpen] = useState(false);
  const handleTextBoxClick = () => {
    return setTextBoxOpen(!textBoxOpen);
  };

  return (
    <div className="container m-8 flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Card
          title="23/02"
          description="14T"
          onButtonClick={handleTextBoxClick}
        />
        {textBoxOpen && (
          <>
            <TextBox />
            <button className="btn btn-square">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </button>
          </>
        )}
      </div>
      <div className="flex flex-row gap-4">
        <Card
          title="23/02"
          description="14T"
          onButtonClick={handleTextBoxClick}
        />
        {textBoxOpen && <TextBox />}
      </div>
    </div>
  );
};

export default List;

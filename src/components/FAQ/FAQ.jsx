import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const FAQ = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="faq" onClick={() => setIsExpanded(!isExpanded)}>
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isExpanded && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;

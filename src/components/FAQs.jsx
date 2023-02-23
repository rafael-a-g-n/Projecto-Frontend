import { useEffect, useState } from "react";
import SectionHead from "./SectionHead";
import FAQ from "./FAQ/FAQ";
import { FaQuestion } from "react-icons/fa";

const FAQs = () => {
  const [faqs, setFaqs] = useState();

  useEffect(() => {
    fetch("/api/faqs.json")
      .then((response) => response.json())
      .then((data) => setFaqs(data));
  }, []);

  if (faqs === undefined) return null;

  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead icon={<FaQuestion />} title="FAQs" />
        <div className="faqs__wrapper">
          {faqs.map(({ id, question, answer }) => {
            return <FAQ key={id} question={question} answer={answer} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

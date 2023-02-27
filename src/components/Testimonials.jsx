import { useEffect, useState } from "react";
import SectionHead from "./SectionHead";
import Card from "./Cards/Card";
import { ImQuotesLeft } from "react-icons/im";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/api/testimonials.json")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
      });
  }, []);

  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex(() => index - 1);
    if (index === 0) {
      setIndex(testimonials.length - 1);
    }
  };

  const nextTestimonial = () => {
    setIndex(() => index + 1);
    if (index === testimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <>
      {testimonials && testimonials.length && (
        <section className="testimonials">
          <div className="container testimonials__container">
            <SectionHead
              icon={<ImQuotesLeft />}
              title="Testemunhos"
              className="testimonials__head"
            />
            <Card className="testimonial">
              <div className="testimonial__avatar">
                <img
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                />
              </div>
              <blockquote>
                <p className="testimonial__quote">{`"${testimonials[index].quote}"`}</p>
              </blockquote>
              <p className="testimonial__name">{testimonials[index].name}</p>
              <small className="testimonial__title">
                {testimonials[index].occupation}
              </small>
            </Card>
            <div className="testimonials__btn-container">
              <button
                type="button"
                className="testimonials__btn"
                aria-label="anterior"
                onClick={prevTestimonial}
              >
                <AiOutlineLeft />
              </button>
              <button
                type="button"
                className="testimonials__btn"
                aria-label="próximo"
                onClick={nextTestimonial}
              >
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Testimonials;

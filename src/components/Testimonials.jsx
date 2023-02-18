import { useState } from "react";
import SectionHead from "./SectionHead";
import Card from "./Cards/Card";
import { ImQuotesLeft } from "react-icons/im";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Testimonials = () => {
  const [testimonials] = useState([
    {
      name: "Leonor Teles",
      quote:
        "A Coruja, um centro de estudos de excelência com nota 5. Tem excelentes instalações, excelentes profissionais, excelente ambiente. Só tenho bem a dizer nestes 3 anos que o meu filho a frequenta. Recomendo vivamente!!",
      occupation: "Mãe",
      avatar: "/images/avatar1.jpg",
    },
    {
      name: "Luis Vinhais",
      quote:
        "Eles fazem um acompanhamento que nunca tinha visto em qualquer outro centro de estudos. Os professores são simpáticos e acompanham de perto a evolução dos alunos. Recomendo 10/10...",
      occupation: "Estudante 12º ano",
      avatar: "/images/avatar2.jpg",
    },
    {
      name: "Bruno Costa",
      quote:
        "Foram uma peça fundamental no meu estudo para os Exames Nacionais...",
      occupation: "Estudante 12º ano",
      avatar: "/images/avatar3.jpg",
    },
    {
      name: "Joana Ponga",
      quote:
        "São excelentes profissionais e conseguem explicar de forma descomplicada...",
      occupation: "Estudante 11º ano",
      avatar: "/images/avatar4.jpg",
    },
    {
      name: "Madalena Silva",
      quote:
        "Ajudam-me imenso não só a compreender e a reavivar as matérias mas também a manter o foco...",
      occupation: "Estudante 11º ano",
      avatar: "/images/avatar5.jpg",
    },
  ]);

  const [index, setIndex] = useState(0);

  const { name, quote, occupation, avatar } = testimonials[index];

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
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testemunhos"
          className="testimonials__head"
        />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <blockquote>
            <p className="testimonial__quote">{`"${quote}"`}</p>
          </blockquote>
          <h5>{name}</h5>
          <small className="testimonial__title">{occupation}</small>
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
  );
};

export default Testimonials;

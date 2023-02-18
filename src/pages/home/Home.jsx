import FAQs from "../../components/FAQs";
import MainHeader from "../../components/MainHeader";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import Values from "../../components/Values";
import "./home.css";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Services />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default Home;

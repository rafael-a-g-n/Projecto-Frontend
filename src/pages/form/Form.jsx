import { useState } from "react";
import Card from "../../components/Cards/Card";
import Header from "../../components/Header";

import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    idcard: "",
    nif: "",
    address: "",
    city: "",
    code: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const zipCodeRegex = /^\d{4}-\d{3}?$/;
    const contactRegex = /^(?:[92]\d{2}(?:\s?\d{3}){2})$/;

    if (!values.name) {
      errors.name = "Nome em falta!";
    }

    if (!values.birthday) {
      errors.birthday = "Data de nascimento em falta!";
    }

    if (!values.idcard) {
      errors.idcard = "Número de CC em falta!";
    } else if (values.idcard.length !== 8) {
      errors.idcard = "O número do CC tem de ter 8 dígitos";
    }

    if (!values.nif) {
      errors.nif = "Número de CC em falta!";
    } else if (values.nif.length !== 9) {
      errors.nif = "O número do CC tem de ter 9 dígitos";
    }

    if (!values.address) {
      errors.address = "Morada em falta!";
    }

    if (!values.city) {
      errors.city = "Localidade em falta!";
    }

    if (!values.code) {
      errors.code = "Código postal em falta!";
    } else if (!zipCodeRegex.test(values.code)) {
      errors.code = "Utilize o formato pedido!";
    }

    if (!values.phone) {
      errors.phone = "Contacto em falta!";
    } else if (values.phone.length < 9 || values.phone.length > 9) {
      errors.phone = "O contacto tem de ter 9 dígitos";
    } else if (!contactRegex.test(values.phone)) {
      errors.phone = "O número de contacto não é válido";
    }

    if (!values.email) {
      errors.email = "Email em falta!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email não é válido!";
    }

    return errors;
  };

  return (
    <div className="master_wrapper">
      <Header title="Formulário" image="/images/header_bg_5.jpg">
        Pensar sem aprender torna-nos caprichosos, e aprender sem pensar é um
        desastre.
      </Header>
      <div className="form-subtitle">
        <h3>Informação Do Aluno</h3>
      </div>
      <div className="container form__container">
        <div className="form__left">
          <div className="form__image">
            <img src="/images/back-to-school.jpg" alt="material escolar" />
          </div>
        </div>
        <div className="form__right">
          <Card className="form__form">
            <form onSubmit={handleSubmit} className="form">
              <div className="form-box">
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="ex. José António Silva"
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && (
                  <p className="form-error">{formErrors.name}</p>
                )}
              </div>
              <div className="form-box ">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="ex. antonio@mail.pt"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <p className="form-error">{formErrors.email}</p>
                )}
              </div>
              <div className="form-column">
                <div className="form-box">
                  <label htmlFor="contact">Contacto</label>
                  <input
                    id="contact"
                    type="number"
                    name="phone"
                    placeholder="Numero de contacto"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {formErrors.phone && (
                    <p className="form-error">{formErrors.phone}</p>
                  )}
                </div>
                <div className="form-box">
                  <label htmlFor="birthday">Data de Nascimento</label>
                  <input
                    id="birthday"
                    type="date"
                    name="birthday"
                    placeholder="Data de nascimento"
                    value={formData.birthday}
                    onChange={handleChange}
                  />
                  {formErrors.birthday && (
                    <p className="form-error">{formErrors.birthday}</p>
                  )}
                </div>
              </div>
              <div className="form-column">
                <div className="form-box">
                  <label htmlFor="cc">Cartão de cidadão</label>
                  <input
                    id="cc"
                    type="number"
                    name="idcard"
                    placeholder="Número de CC"
                    value={formData.idcard}
                    onChange={handleChange}
                  />
                  {formErrors.idcard && (
                    <p className="form-error">{formErrors.idcard}</p>
                  )}
                </div>
                <div className="form-box">
                  <label htmlFor="nif">NIF</label>
                  <input
                    id="nif"
                    type="number"
                    name="nif"
                    placeholder="Número Id. Fiscal"
                    value={formData.nif}
                    onChange={handleChange}
                  />
                  {formErrors.nif && (
                    <p className="form-error">{formErrors.nif}</p>
                  )}
                </div>
              </div>

              <div className="form-box">
                <label htmlFor="address">Morada</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Endereço postal"
                  value={formData.address}
                  onChange={handleChange}
                />
                {formErrors.address && (
                  <p className="form-error">{formErrors.address}</p>
                )}
              </div>
              <div className="form-column">
                <div className="form-box">
                  <label htmlFor="city">Localidade</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Cidade"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {formErrors.city && (
                    <p className="form-error">{formErrors.city}</p>
                  )}
                </div>
                <div className="form-box">
                  <label htmlFor="code">Código Postal</label>
                  <input
                    id="code"
                    name="code"
                    placeholder="ex. 1750-240"
                    value={formData.code}
                    onChange={handleChange}
                  />
                  {formErrors.code && (
                    <p className="form-error">{formErrors.code}</p>
                  )}
                </div>
              </div>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="form-success">
                  <p>Formulário enviado</p>
                </div>
              ) : (
                <button type="submit">Enviar</button>
              )}
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Form;

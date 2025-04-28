import React, { useState, FormEvent } from 'react';
import './Contacto.css';

interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

function Contacto() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    };

  
  };

  return (
    <div className="container-contacto">
      <h1 className="title-nuestrosservicios">Contacto</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <div>
            <label htmlFor="firstName">NOMBRE:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="lastName">APELLIDO:</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="company">EMPRESA:</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">EMAIL:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="phone">TELÉFONO/CELULAR:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
        </div>
        <div style={{width:"75%", marginTop:"10px"}}>
          <label htmlFor="message">MENSAJE:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required />
        </div>
        <button
          style={{
            marginTop: "20px",
            backgroundColor: "#a6a6a6",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
            fontSize: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}
          type="submit"
        >
          ENVIAR
        </button>
      </form>
    </div>
  );
}

export default Contacto;

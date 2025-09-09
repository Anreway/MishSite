import React, { useState } from 'react';

const ContactCard = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    agreement: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
  };

  return (
    <div 
      className="contact-card"
      style={{
        backgroundColor: data.backgroundColor,
        '--glow-color': data.glowColor
      }}
    >
      <div className="contact-card__content">
        <div className="contact-card__text-section">
          <h2 className="contact-card__title">{data.title}</h2>
          <p className="contact-card__subtitle">{data.subtitle}</p>
          <p className="contact-card__description">{data.description}</p>
        </div>

        <div className="contact-card__form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__field">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleInputChange}
                className="contact-form__input"
                required
              />
            </div>

            <div className="contact-form__field">
              <input
                type="tel"
                name="phone"
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={handleInputChange}
                className="contact-form__input"
                required
              />
            </div>

            <div className="contact-form__field">
              <input
                type="email"
                name="email"
                placeholder="E-mail (необязательно)"
                value={formData.email}
                onChange={handleInputChange}
                className="contact-form__input"
              />
            </div>

            <div className="contact-form__field">
              <textarea
                name="message"
                placeholder="Сообщение (необязательно)"
                value={formData.message}
                onChange={handleInputChange}
                className="contact-form__textarea"
                rows="4"
              />
            </div>

            <div className="contact-form__agreement">
              <label className="contact-form__checkbox">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleInputChange}
                  required
                />
                <span className="contact-form__checkmark"></span>
                <span className="contact-form__agreement-text">
                  Отправляя запрос, вы даете согласие на обработку персональных данных и автоматически 
                  соглашаетесь с нашей <a href="#" className="contact-form__link">Политикой конфиденциальности</a>
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              className="contact-form__submit"
              disabled={!formData.agreement}
            >
              Отправить
            </button>
          </form>
        </div>
      </div>

      <div className="contact-card__footer">
        <div className="contact-card__company">
          <img 
            src={data.logo} 
            alt={data.companyName} 
            className="contact-card__logo"
          />
          <div className="contact-card__company-info">
            <span className="contact-card__company-name">{data.companyName}</span>
            <span className="contact-card__company-description">{data.companyDescription}</span>
            <span className="contact-card__company-address">{data.companyInfo.address}</span>
          </div>
        </div>
        
        <div className="contact-card__contacts">
          <div className="contact-card__contact-group">
            {data.contacts.phones.map((phone, index) => (
              <a key={index} href={`tel:${phone.replace(/\D/g, '')}`} className="contact-card__contact">
                {phone}
              </a>
            ))}
          </div>
          <div className="contact-card__contact-group">
            {data.contacts.emails.map((email, index) => (
              <a key={index} href={`mailto:${email}`} className="contact-card__contact">
                {email}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

import React, { useState } from 'react';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  hidePhone: boolean;
  infernalOption: boolean;
}

interface FormProps {
  onSubmit: (formData: FormData) => void;
}

const PersonalForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hidePhone: false,
    infernalOption: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} id="Question_form">
      <label htmlFor="firstName" className="headings">First Name*</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        className="question_text_input"
        required
      /><br /><br />

      <label htmlFor="lastName" className="headings">Last Name*</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        className="question_text_input"
        required
      /><br /><br />

      <label htmlFor="email" className="headings">Email*</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="question_text_input"
        required
      /><br /><br />


      <label htmlFor="phone" className="headings">
        <div className='phone-inside'>
            <div><span>Phone Number</span></div>
            <div className="options">
            <label htmlFor="hidePhone" className="option">
              Hide
              <input
                type="checkbox"
                id="hidePhone"
                name="hidePhone"
                checked={formData.hidePhone}
                onChange={handleInputChange}
              />
            </label>
            <label htmlFor="infernalOption" className="option">
              Internal
              <input
                type="checkbox"
                id="infernalOption"
                name="infernalOption"
                checked={formData.infernalOption}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="question_text_input"
        required
      /><br /><br />    

      <input type="submit" value="Submit" />
    </form>
  );
};

export default PersonalForm;

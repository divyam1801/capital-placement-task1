import React, { useState } from 'react';
import "./personalforminitial.css"
import AddPersonalQuestion from './addquestionpersonal';
export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    nationality: string;
    residence: string;
    ID: string;
    DOB: string;
    gender: string;

    hidePhone: boolean;
    hideNationality: boolean;
    hideResidence: boolean;
    hideID: boolean;
    hideDOB: boolean;
    hideGender: boolean;

    hideInternalPhone: boolean;
    hideInternalNationality: boolean;
    hideInternalResidence: boolean;
    hideInternalID: boolean;
    hideInternalDOB: boolean;
    hideInternalGender: boolean;

}

interface FormProps {
    onSubmit: (formData: FormData) => void;
}

const PersonalInfoInitial: React.FC<FormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        residence: '',
        ID: '',
        DOB: '',
        gender: '',
        nationality: '',
        hidePhone: false,
        hideNationality: false,
        hideResidence: false,
        hideID: false,
        hideDOB: false,
        hideGender: false,
        hideInternalPhone: false,
        hideInternalNationality: false,
        hideInternalResidence: false,
        hideInternalID: false,
        hideInternalDOB: false,
        hideInternalGender: false
        
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
        <div className='personal'>
            <div className="cyan-ribbon">Upload Cover Image</div>
            <form onSubmit={handleSubmit} id="Question_form">
                <label htmlFor="firstName" className="headings">
                    First Name
                </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="question_text_input"
                    required
                />

                <label htmlFor="lastName" className="headings">
                    Last Name
                </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="question_text_input"
                    required
                />

                <label htmlFor="email" className="headings">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="question_text_input"
                    required
                />

                <div>
                    <div className="horizontal-row">
                        <label className="headings hideable" >Phone Number</label>
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
                        <label htmlFor="hideInternalPhone" className="option">
                            Internal
                            <input
                                type="checkbox"
                                id="hideInternalPhone"
                                name="hideInternalPhone"
                                checked={formData.hideInternalPhone}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    {!formData.hidePhone && (
                        <>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="question_text_input"
                            />
                        </>
                    )}
                </div>

                <div>
                    <div className="horizontal-row">
                        <label className="headings hideable" >Nationality</label>
                        <label htmlFor="hidePhone" className="option">
                            Hide
                            <input
                                type="checkbox"
                                id="hideNationality"
                                name="hideNationality"
                                checked={formData.hideNationality}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label htmlFor="hideInternalNationality" className="option">
                            Internal
                            <input
                                type="checkbox"
                                id="hideInternalNationality"
                                name="hideInternalNationality"
                                checked={formData.hideInternalNationality}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    {!formData.hideNationality && (
                        <>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.nationality}
                                onChange={handleInputChange}
                                className="question_text_input"
                            />
                        </>
                    )}
                </div>

                <div>
                    <div className="horizontal-row">
                        <label className="headings hideable" >Current Residence</label>
                        <label htmlFor="hideResidence" className="option">
                            Hide
                            <input
                                type="checkbox"
                                id="hideResidence"
                                name="hideResidence"
                                checked={formData.hideResidence}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label htmlFor="internalOption" className="option">
                            Internal
                            <input
                                type="checkbox"
                                id="hideInternalResidence"
                                name="hideInternalResidence"
                                checked={formData.hideInternalResidence}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    {!formData.hideResidence && (
                        <>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.residence}
                                onChange={handleInputChange}
                                className="question_text_input"
                            />
                        </>
                    )}
                </div>

                <div>
                    <div className="horizontal-row">
                        <label className="headings hideable" >ID Number</label>
                        <label htmlFor="hideID" className="option">
                            Hide
                            <input
                                type="checkbox"
                                id="hideID"
                                name="hideID"
                                checked={formData.hideID}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label htmlFor="hideInternalID" className="option">
                            Internal
                            <input
                                type="checkbox"
                                id="hideInternalID"
                                name="hideInternalID"
                                checked={formData.hideInternalID}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    {!formData.hideID && (
                        <>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.ID}
                                onChange={handleInputChange}
                                className="question_text_input"
                            />
                        </>
                    )}
                </div>

                <div>
                    <div className="horizontal-row">
                        <label className="headings hideable" >Date of Birth</label>
                        <label htmlFor="hideDOB" className="option">
                            Hide
                            <input
                                type="checkbox"
                                id="hideDOB"
                                name="hideDOB"
                                checked={formData.hideDOB}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label htmlFor="internalOption" className="option">
                            Internal
                            <input
                                type="checkbox"
                                id="hideInternalDOB"
                                name="hideInternalDOB"
                                checked={formData.hideInternalDOB}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    {!formData.hideDOB && (
                        <>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.DOB}
                                onChange={handleInputChange}
                                className="question_text_input"
                            />
                        </>
                    )}
                </div>

                <div>
                    <div className="horizontal-row">
                        <label className="headings hideable" >Gender</label>
                        <label htmlFor="hideGender" className="option">
                            Hide
                            <input
                                type="checkbox"
                                id="hideGender"
                                name="hideGender"
                                checked={formData.hideGender}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label htmlFor="internalOption" className="option">
                            Internal
                            <input
                                type="checkbox"
                                id="hideInternalGender"
                                name="hideInternalGender"
                                checked={formData.hideInternalGender}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    {!formData.hideGender && (
                        <>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className="question_text_input"
                            />
                        </>
                    )}
                </div>

            </form>


            <AddPersonalQuestion />

        </div>
    );
};

export default PersonalInfoInitial;
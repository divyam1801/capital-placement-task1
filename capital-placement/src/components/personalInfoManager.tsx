// PersonalInfoManager.tsx
import React, { useState } from 'react';
import PersonalInfoQuestionsList from './personalInfoQuestionsList';
import PersonalInfoQuestion from './personalInfoQuestion';
import PersonalInfoForm from './personalInfo';

interface PersonalInfoManagerProps {
  // setPersonalInformation: React.Dispatch<React.SetStateAction<PersonalInfoQuestion[]>>;
}

const PersonalInfoManager: React.FC<PersonalInfoManagerProps> = () => {
  const [personalInfoQuestions, setPersonalInfoQuestions] = useState<PersonalInfoQuestion[]>([]);

  // Function to toggle the 'internal' property of a question
  const toggleInternal = (id: string) => {
    const updatedQuestions = personalInfoQuestions.map((question) => {
      if (question.id === id) {
        return { ...question, internal: !question.internal };
      }
      return question;
    });
    setPersonalInfoQuestions(updatedQuestions);
    // setPersonalInformation(updatedQuestions);
  };

  // Function to toggle the 'hidden' property of a question
  const toggleHidden = (id: string) => {
    const updatedQuestions = personalInfoQuestions.map((question) => {
      if (question.id === id) {
        return { ...question, hidden: !question.hidden };
      }
      return question;
    });
    setPersonalInfoQuestions(updatedQuestions);
    // setPersonalInformation(updatedQuestions);
  };

  return (
    <>
    <PersonalInfoForm />
    <PersonalInfoQuestionsList questions={personalInfoQuestions} />
    </>
  );
};

export default PersonalInfoManager;

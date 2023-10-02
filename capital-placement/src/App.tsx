import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import SideBar from './components/sidebar';
import Header from './components/header';
import ImageUploadPreview from './components/imageUpload';
import QuizCreator from './components/quizCreator';
import PersonalForm, { FormData } from './components/personalforminitial';

function App() {
  const [image, setImage] = useState<File | null>(null);

  const [applicationForm, setApplicationForm] = useState({
    coverImage: image,
    // ... other form sections
  });

  const handleFormSubmit = (formData: FormData) => {
    console.log(formData);
  }

  const GetData = (data: any) => {
    setImage(data);
    console.log(data);
  }

  const PushData = () => {
    axios.put('http://localhost:3000/api/1/{program_id}/programs/', applicationForm)
      .then((response) => {
        console.log('PUT request successful');
        console.log('Response:', response.data);
      })
      .catch((error) => {
        console.error('Error making PUT request:', error);
      });
  }

  return (
    <div id="OuterCover">
      <SideBar />
      <div id='main_body'>
        <button id='Add_option' onClick={PushData}>Submit</button>
        <Header />
        <ImageUploadPreview GetData={GetData}/>
        <PersonalForm onSubmit={handleFormSubmit} />
        <QuizCreator />
      </div>
    </div>
  )
}

export default App;
import { Fragment } from 'react';
import './App.css';
import AccordionSection from './components/AccordionSection/AccordionSection.jsx';
import { useState } from "react";
import AccordionPics from './components/AccordionPics/AccordionPics.jsx';


function App() {
  const [chosenSection, setChosenSection] = useState(2);

  const accordionArr = [
    {
      title: "How many team members can I invite?",
      subText: "You can invite unlimited team members.",
      id: 1,
    },
    {
      title: "What is the maximum file upload size?",
      subText: "No more than 2GB. All files in your account must fit your allotted storage space.",
      id: 2,
    },
    {
      title: "How do I reset my password?",
      subText: "You can click on reset password button.",
      id: 3,
    },
    {
      title: "Can I cancel my subscription?",
      subText: "Yes, you can cancel your subscription at any moment.",
      id: 4,
    },
    {
      title: "Do you provide additional support?",
      subText: "Yes we do additional support.",
      id: 5,
    },
  ];

  return (
    <div className='body-container'>

          <div className='main-container'>
          < AccordionPics />

            <div className='accordion-main-div'>
            <h1>FAQ</h1>
            {accordionArr.map((item) => {
              return (
              <Fragment key={item.id}>
              <AccordionSection  
                title={item.title} 
                subText={item.subText} 
                id={item.id}
                chosenSection={chosenSection}
                setChosenSection={setChosenSection}
              />
              </Fragment>
              );
            })}
            </div>

      </div>
    </div>
  );
}

export default App;

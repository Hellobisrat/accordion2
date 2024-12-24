import { useState } from 'react';
import './App.css';
import data from './data'
import SingleQuestion from './Questions'

function App() {
  const [questions,setQuestions] = useState(data);
  return (
    <div className="bg-slate-600  text-red-400 flex-col justify-center  ">
      <h3 className='flex justify-center mb-2 p-3 font-bold text-white'>questions and answers about login</h3>
      <section className='flex-col justify-center text-center ' >
        {questions.map((question)=>{
          return (
            <SingleQuestion key={question.id} {...question}></SingleQuestion>
          )
        })}
      </section>
     <p className='flex justify-center mb-5 p-6 text-white'> Accordion 2 start</p> 
      
    </div>
  );
}

export default App;

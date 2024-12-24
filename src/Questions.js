import React, {useState} from "react";
import  {AiOutlineMinus, AiOutlinePlus,AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

const Question = ({title,info})=>{
  const [showInfo,setShowInfo]= useState(false);
  const [like,setLike]=useState(false)
  const [count,setCount]=useState(0)

  const toggleLike =()=>{
    setLike(!like)
    
      like? setCount(count+1):setCount(count-1)
    
  }
  const handleCount =()=>{
   
  }
  return (
    <article className="container flex justify-center text-center p-4  m-2 bg-blue-100  rounded mx-auto  relative">
      <header className=" mb-2 px-2 flex-col">
        <h4 className="mb-2 text-black-200">{title}</h4>
        <button className="bg-slate-100 rounded-md"
         onClick={()=>setShowInfo(!showInfo)}>
          {showInfo?<AiOutlineMinus/>:<AiOutlinePlus/>}

         </button>
         <button onClick={toggleLike} className="absolute top-0 right-0 mt-3 mr-3 ">
         {
          like?<AiFillHeart/>:< AiOutlineHeart/>
         }{count}
         </button>
         

        </header>
     {showInfo && <p className="text-blue-400 flex-col mt-2 justify-center">{info}</p>}
    </article>
  )
}

export default Question;
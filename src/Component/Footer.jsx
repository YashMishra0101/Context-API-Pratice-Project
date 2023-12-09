import React,{useContext} from 'react'
import { BlogsContext } from '../Context/BlogsContext'

function Footer() {
  const {pageNo , setPageNo}=useContext(BlogsContext)

 
  const increment=()=>{
    pageNo >= 6 ? setPageNo(6) : setPageNo(pageNo + 1)
  };
 
  const decrement=()=>pageNo >= 2 && pageNo <=6 ? setPageNo(pageNo - 1) : setPageNo(1);


  return (
    <div className='z-30 w-full flex justify-center gap-8 bottom-0 fixed mt-6 py-4 bg-white shadow-xl'>
     <button className='border-2 p-1 rounded-md bg-gray-400 px-5'onClick={increment}>Next</button>
     <p className='border-2 font-bold p-1 rounded-md px-5'>Page No: {pageNo} of 6</p>
     <button className='border-2 p-1 rounded-md bg-gray-400 px-5'onClick={decrement}>Previous</button>
    </div>
  )
}

export default Footer
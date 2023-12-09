import React from 'react';
import { useContext } from 'react';
import { BlogsContext } from '../Context/BlogsContext';
import Loader from '../Loader';

function Blogs() {
  const { loading, post } = useContext(BlogsContext);

  return (
    <div className='mb-[5rem] mt-16 -z-30 '>
      {
        loading ? <Loader/> :
        post.map((info , index) =>( 
          <div className='text-center p-2 mx-4' key={index}>
            <h3 className='font-bold mt-6'>{info.title}</h3>
            <p className='text-lg text-green-700 underline'>{info.author}</p>
            <p className='text-lg text-green-700 underline' >{info.date}</p>
            <p className='text-gray-500 font-mono mt-2'>{info.content}</p>
           <div className='mt-3'>
             {
               info.tags.map( (tag, index) =>( 
               <span key={index} className="text-blue-700 underline font-bold text-base">
                 {` #${tag}`}
               </span>))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Blogs;





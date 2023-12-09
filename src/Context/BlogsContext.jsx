import React, { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { baseUrl } from "../Url";

export const BlogsContext = createContext(null);

const Context = ({ children }) => {
  const [loading, isLoading] = useState(true);
  const [post, setPost] = useState()
  const [pageNo, setPageNo] = useState(1);
  const [totalpages, setTotalPages] = useState();

  const fetchData = async (pageNum) => {
    try {
      isLoading(true);
      const fetch = await axios.get(`${baseUrl}?page=${pageNum}`);
      const response = fetch.data.posts;
      setPost(response); 
      console.log("In context", response);
    } catch (error) {
      console.log("Error in API:", error);
    }
    isLoading(false);
  };

  useEffect(() => {
    fetchData(pageNo);
  }, [pageNo]);

  const values = {
    loading,
    isLoading,
    post,
    setPost,
    pageNo,
    setPageNo,
    totalpages,
    setTotalPages,
  };

  return (
    <BlogsContext.Provider value={values}>
      {children}
    </BlogsContext.Provider>
  );
};

export default Context;

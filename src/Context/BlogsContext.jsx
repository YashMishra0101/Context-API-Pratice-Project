import React, { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { baseUrl } from "../API";

export const BlogsContext = createContext();

const Context = ({ children }) => {
  const [loading, isLoading] = useState(true);
  const [post, setPost] = useState();
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const fetchData = async (pageNum) => {
      try {
        const fetch = await axios.get(`${baseUrl}?page=${pageNum}`);
        console.log("Api Data:- ", fetch.data);
        const response = fetch.data.posts;
        setPost(response);
        console.log("Posts In API :-", response);
      } catch (error) {
        console.log("Error in API:", error);
      } finally {
        isLoading(false);
      }
    };
    fetchData(pageNo);
  }, [pageNo]);

  const values = {
    loading,
    isLoading,
    post,
    setPost,
    pageNo,
    setPageNo,
  };

  return (
    <BlogsContext.Provider value={values}>{children}</BlogsContext.Provider>
  );
};

export default Context;

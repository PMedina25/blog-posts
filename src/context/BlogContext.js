import React, { createContext, useReducer } from "react";

const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    case "delete_blogpost":
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };

  const deleteBlogPost = (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };

  const boundActions = { addBlogPost, deleteBlogPost };

  return (
    <BlogContext.Provider value={{ data: blogPosts, ...boundActions }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

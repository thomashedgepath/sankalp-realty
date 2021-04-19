import React from "react";
import ContactForm from "../contact-page/form";

const form = {
  // We can add a name to identify it later.
  name: "form",

  // We can add a priority so it executes before or after other processors.
  priority: 10,

  // Only process the node it if it has class 'form-container'.
  test: ({ node }) => node.props.className.includes("form-subject-field"),

  processor: ({ node, state }) => {
    // If the image is inside a <noscript> tag, we don't want to process it.

    
    node.props.value = state.theme.currentPropertyName
    console.log(node.props.value)

    return node;
  },
};

export default form;


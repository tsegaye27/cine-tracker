import { useState } from "react";

export default function TextExpander({ children }) {
  const [collapsedNumOfWords, setCollapsedNumOfWords] = useState(0);
  const [expandButtonText, setExpandButtonText] = useState("Show More");
  const [collapseButtonText, setCollapseButtonText] = useState("Show Less");
  const [buttonColor, setButtonColor] = useState("#000");

  return <div></div>;
}

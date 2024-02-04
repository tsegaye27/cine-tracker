import { useState } from "react";

export default function TextExpander({
  children,
  collapsedNumWords = 5,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  expand = false,
  className = "",
  color = "red",
}) {
  const [isCollapsed, setIsCollapsed] = useState(expand);
  const btnStyle = {
    cursor: "pointer",
    color,
  };
  const displayText =
    children.split(" ").slice(0, collapsedNumWords).join(" ") + `...`;
  // console.log(words);
  return (
    <div className={className}>
      {isCollapsed ? children : displayText}
      <span>
        <button style={btnStyle} onClick={() => setIsCollapsed((c) => !c)}>
          {isCollapsed ? collapseButtonText : expandButtonText}
        </button>
      </span>
      {/* <button onClick={() => setIsCollapsed((c) => !c)}>
        {isCollapsed ? collapseButtonText : expandButtonText}
      </button> */}
    </div>
  );
}

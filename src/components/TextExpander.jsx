import { useState } from "react";

export default function TextExpander({
  children,
  collapsedNumWords = 5,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  expand = false,
  className = "",buttonColor
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
    <div>
      <p>
        {isCollapsed ? children : displayText}
        <span>
          <button style={btnStyle} onClick={() => setIsCollapsed((c) => !c)}>
            {isCollapsed ? collapseButtonText : expandButtonText}
          </button>
        </span>
      </p>
      {/* <button onClick={() => setIsCollapsed((c) => !c)}>
        {isCollapsed ? collapseButtonText : expandButtonText}
      </button> */}
    </div>
  );
}

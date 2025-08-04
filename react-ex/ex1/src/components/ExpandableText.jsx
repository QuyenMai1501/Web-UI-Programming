import { useState } from "react";

const ExpandableText = ({ children, maxChars = 100 }) => {
  const [expanded, setExpanded] = useState(false);

  if (children.length <= maxChars) {
    return <div>{children}</div>;
  }

  return (
    <div>
        <h2>Expandable Text</h2>
      {expanded ? children : children.slice(0, maxChars) + "..."}
      <button style={{ marginLeft: 8 }} onClick={() => setExpanded((e) => !e)}>
        {expanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;

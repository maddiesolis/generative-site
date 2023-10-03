import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";

const PageContainerDiv = styled.div`
  margin: 1rem;
`;

export const Layout1 = () => {
  const [randomColor, setRandomColor] = useState("");

  const colors = useMemo(() => ["pink", "blue", "green", "yellow"], []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setRandomColor(colors[randomIndex]);
  }, [colors]); // Include 'colors' in the dependency array

  return (
    <div style={{ background: randomColor }}>
      hello there little lad
    </div>
  );
};

export const Layout2 = () => {
  return (
    <PageContainerDiv>
    <div
      style={{
        display:"grid",
        gridTemplateColumns: "40% 60%" 
      }}
    >
        <button>button</button>
        <button>button</button>
        <button>button</button>
    </div>
    </PageContainerDiv>
  )
}

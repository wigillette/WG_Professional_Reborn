import React, { useState, useRef, useEffect } from "react";
import Grow from "@mui/material/Grow";
import "./FadeInSection.css";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => setVisible(entries[0].isIntersecting));
    
    observer.observe(domRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <Grow in={isVisible}>
      <div ref={domRef}>
        {props.children}
      </div>
    </Grow>
  );
}

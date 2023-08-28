import { useRef, useState } from "react";
import "./styles.css";

function Li({ className }: { className: string }) {
  let ref = useRef<HTMLLIElement>(null);
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <li
        className={className}
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          console.log("hi");
          ref.current?.classList.add("big");
          setIsOpen(true);
        }}
        style={{ position: "relative" }}
      >
        <button
          style={{
            display: isOpen ? "inline" : "none",
            position: "absolute",
            fontSize: "16px",
            right: "4px",
            background: "transparent",
            border: "none"
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("hi");

            ref.current?.classList.remove("big");
            setIsOpen(false);
          }}
        >
          x
        </button>
      </li>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <ul>
        <Li className="green"></Li>
        <Li className="red"></Li>
        <Li className="blue"></Li>
        <Li className="yellow"></Li>
        <Li className="green"></Li>
        <Li className="red"></Li>
        <Li className="blue"></Li>
        <Li className="yellow"></Li>
        <Li className="green"></Li>
        <Li className="red"></Li>
        <Li className="blue"></Li>
        <Li className="yellow"></Li>
        <Li className="blue"></Li>
      </ul>
    </div>
  );
}

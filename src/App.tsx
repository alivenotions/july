import { useRef, useState } from "react";
import "./styles.css";
// @ts-ignore
import img1 from "./compressed/1.jpg";
// @ts-ignore
import img2 from "./compressed/2.jpg";
// @ts-ignore
import img3 from "./compressed/3.jpg";
// @ts-ignore
import img4 from "./compressed/4.jpg";
// @ts-ignore
import img5 from "./compressed/5.jpg";
// @ts-ignore
import img6 from "./compressed/6.jpg";
// @ts-ignore
import img7 from "./compressed/7.jpg";
// @ts-ignore
import img8 from "./compressed/8.jpg";
// @ts-ignore
import img9 from "./compressed/9.jpg";
// @ts-ignore
import img10 from "./compressed/10.jpg";
// @ts-ignore
import img11 from "./compressed/11.jpg";
// @ts-ignore
import img12 from "./compressed/12.jpg";
import { useClickOutside } from "@react-hooks-library/core";

function Li({ img, parent }: { img: string; parent: any }) {
  let ref = useRef<HTMLLIElement>(null);
  let [isOpen, setIsOpen] = useState(false);
  useClickOutside(ref, () => {
    if (isOpen) {
      ref.current?.classList.remove("big");
      parent.current?.classList.remove("open");
      setIsOpen(false);
    }
  });
  return (
    <li
      ref={ref}
      onClick={() => {
        ref.current?.classList.add("big");
        parent.current?.classList.add("open");
        setIsOpen(true);
      }}
      style={{
        position: "relative",
        backgroundImage: `url("${img}")`,
        backgroundPosition: "center",
      }}
    />
  );
}

export default function App() {
  let ref = useRef<HTMLUListElement>(null);
  return (
    <>
      <div className="App">
        <ul ref={ref}>
          {[
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img9,
            img10,
            img11,
            img12,
          ].map((e, i) => (
            <Li img={e} key={i} parent={ref} />
          ))}
        </ul>
      </div>
      <p
        style={{
          fontFamily: "monospace",
          position: "fixed",
          bottom: "10px",
          left: "10px",
          fontSize: "24px",
        }}
      >
        Life with you is{" "}
        <span style={{ color: "#D64933", textDecoration: "underline" }}>
          amazing
        </span>
        .
      </p>
    </>
  );
}

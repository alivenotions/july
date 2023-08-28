import { useRef, useState } from "react";
import "./styles.css";
// @ts-ignore
import img1 from './compressed/1.jpg'
// @ts-ignore
import img2 from './compressed/2.jpg'
// @ts-ignore
import img3 from './compressed/3.jpg'
// @ts-ignore
import img4 from './compressed/4.jpg'
// @ts-ignore
import img5 from './compressed/5.jpg'
// @ts-ignore
import img6 from './compressed/6.jpg'
// @ts-ignore
import img7 from './compressed/7.jpg'
// @ts-ignore
import img8 from './compressed/8.jpg'
// @ts-ignore
import img9 from './compressed/9.jpg'
// @ts-ignore
import img10 from './compressed/10.jpg'
// @ts-ignore
import img11 from './compressed/11.jpg'
// @ts-ignore
import img12 from './compressed/12.jpg'

function Li({ img }: { img: string }) {
  let ref = useRef<HTMLLIElement>(null);
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <li
        ref={ref}
        onClick={(e) => {
          ref.current?.classList.add("big");
          setIsOpen(true);
        }}
        style={{ position: "relative", backgroundImage: `url("${img}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <button
          style={{
            display: isOpen ? "inline" : "none",
            position: "absolute",
            fontSize: "16px",
            right: "4px",
            color: 'hotpink',
            background: "transparent",
            border: "none",
          }}
          onClick={(e) => {
            e.stopPropagation();

            ref.current?.classList.remove("big");
            setIsOpen(false);
          }}
        >
          close
        </button>
      </li>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <ul>
      {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12].map((e, i) => <Li img={e} key={i} />)}
      </ul>
    </div>
  );
}

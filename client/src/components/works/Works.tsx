import { useEffect, useState } from "react";
import "./works.scss";

export default function Works() {
    const [works, setWorks] = useState([])

useEffect(()=>{
let abort = false;
fetch(`/works`)
    .then((res) => res.json())
    .then((work) => {
        if (!abort) {
            setWorks(work);
            console.log("work",work)
        }
    });
return () => {
    abort = true;
};
},[])

console.log("works", works);
  return <div className="works" id="works">
    <div className="top">
      <h1>Check my works </h1>
    </div>
    <div className="bottom"></div>
  </div>;
}

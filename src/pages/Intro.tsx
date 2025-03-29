import tailwindcss from "@tailwindcss/vite"
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";

 
function Intro() {

    return (
        <>
        <link href="portfolio\src\intro.css" rel="stylesheet"></link>
        <div className="d-flex flex-column p-48 bg-[#F9F9FE] h-fit" id="atTop" style={{backgroundColor: '#F9F9FE'}}>
        <h1 className="fw-medium text-focus-in" style={{fontSize: 96}}>Hey, I'm Sahil Talwar</h1>
        <p className="lead tracking-in-expand-fwd" style={{fontSize: 24}}>I'm a Computer Science student at Dalhousie University<br></br>& a software developer</p>
        <div className="mt-24"></div>
        <button type="button" className="btn btn-dark w-fit mt-3 slide-in-bottom">Ready to learn more about me?</button>
        </div>
        </>
    )
}

export default Intro
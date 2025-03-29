import 'bootstrap/dist/css/bootstrap.css';
import tailwindcss from "@tailwindcss/vite";
import { Stack, TabContainer } from "react-bootstrap";
import { Navbar, Row, Col, Nav, Tabs, Tab, Container } from "react-bootstrap"; 
import { motion } from 'motion/react'
import { animate } from 'motion'


function Bar() {
    return (  
        <>
        <Container className="py-3 navbar-fixed-top" id="topBar" fluid>
            <Row>
            <Col>
            <div className="mt-2 ml-5">
                <h3 id="talwar">Talwar</h3>
            </div>
            </Col>

            <Col>
            <div className="rounded-pill max-w-fit mx-auto px-10 py-1 bg-white" id="roundedSpan">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active rounded-pill bg-dark text-white" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item mx-4">
                    <a className="nav-link active rounded-pill" aria-current="page" href="#">Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active rounded-pill" aria-current="page" href="#">Contact</a>
                </li>
            </ul>
            </div>
            </Col>

            <Col>

            <div className="rounded-pill max-w-fit mt-2 bg-white float-right mr-8">
                <h6>I work at..</h6>
            </div>

            </Col>


            </Row>
            </Container>
        </>
    )
}

export default Bar
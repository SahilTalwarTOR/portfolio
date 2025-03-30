import tailwindcss from "@tailwindcss/vite"
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useRef } from "react";
import useIsVisible from "../components/useIsVisible.js";


function Work() {

    //const className = `fw-medium ${wtVisible ? 'slide-in-left' : ''}`;

    return (
    <>
        <Container fluid>
            <div className="ml-38 pt-36">
            <h1 className='fw-medium slide-in-left'  style={{fontSize: 96}}>Work</h1> {/*TODO Animate the work title when the user slides in */}
            </div>
        </Container>

        {/*TODO  */}

        <Container fluid>
        <Row className="p-36">
            <Col md={4}>

                <Card className="p-3 w-100 border-0 shadow p-3 mb-5 bg-white rounded" style={{backgroundColor: "#F5F5F5"}}>
                <Card.Title><h1 className='fw-light pb-3' style={{fontSize: 50}}>Rattish</h1></Card.Title>
                    <Card.Img variant="top" className="h-80" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuBp45nnmM7dS3KGaCjAFuKIsebeoYQpmRcQ&s"></Card.Img>
                    <hr></hr>
                    <Card.Text className="lead" style={{fontSize: 16}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Text>
                    <Button className="w-25" variant="dark">Github</Button>
                </Card>

            </Col>

            <Col md={4}>

            <Card className="p-3 w-100 border-0 shadow p-3 mb-5 bg-white rounded" style={{backgroundColor: "#F5F5F5"}}>
                <Card.Title><h1 className="fw-light pb-3" style={{fontSize: 50}}>RATLab</h1></Card.Title>
                    <Card.Img variant="top" className="h-80" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuBp45nnmM7dS3KGaCjAFuKIsebeoYQpmRcQ&s"></Card.Img>
                    <hr></hr>
                    <Card.Text className="lead" style={{fontSize: 16}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Text>
                    <Button className="w-25" variant="dark">Github</Button>
                </Card>
            </Col>
            <Col md={4}>

            <Card className="p-3 w-100 border-0 shadow p-3 mb-5 bg-white rounded" style={{backgroundColor: "#F5F5F5"}}>
                <Card.Title><h1 className="fw-light pb-3" style={{fontSize: 50}}>CWD Website</h1></Card.Title>
                    <Card.Img variant="top" className="h-80" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuBp45nnmM7dS3KGaCjAFuKIsebeoYQpmRcQ&s"></Card.Img>
                    <hr></hr>
                    <Card.Text className="lead" style={{fontSize: 16}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Text>
                    <Button className="w-25" variant="dark">Github</Button>
                </Card>

            </Col>
        </Row>
        </Container>
    </>
    )
}

export default Work
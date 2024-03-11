import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
// import NoteList from "./NoteList";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import NoteItem from "./NoteItem";

const NoteForm = () => {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const productsData = await fetchProducts() // llama a fetchProducts para obtener los datos
  //     if (productsData) {
  //       // Procesa los datos obtenidos, por ejemplo, extableciendo un estado con los datos 
  //     }
  //   }
  //   fetchData() // llama a fetchData una vez cuando el componente se monta
  // }, [])

  // async function getNotes() {
  //   console.log('Obteniendo notas...')
  //   try {
  //     const {data, error} = await supabase
  //       .from("products")
  //       .select("*")

  //       console.log('data:', data);

  //       if( error ) throw error

  //       if (data != null) {
  //         console.log('Estableciendo notas...')
  //         setNotes(data)
  //       }

  //   } catch (error) {
  //     alert(error.message)
  //   }
  // }

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Store Products</Navbar.Brand>
          <Nav>
            <Nav.Item>Created by cooper Codes</Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h3>Create products for supabase database</h3>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              id="text"
              onChange={(e) => setText(e.target.value)}
            />
            <br></br>
            <Button>Create Product in supabase DB</Button>
          </Col>
        </Row>
        <hr></hr>
        <h3>Current Database Items</h3>
        <Row xs={1} lg={3} className="g-4">
          {notes.map((note) => {
            <Col key={note.id}>
              <NoteItem note={note}/>
            </Col>
          })}
        </Row>
      </Container>
      {/* <NoteList/> */}
    </>
  );
};

export default NoteForm;

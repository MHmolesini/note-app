import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { supabase } from "../services/supabase";

const NoteItem = (props) => {

  const note = props.note

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        {editing == false ? (
          <>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.text}</Card.Text>
            <Button variant="danger">Delete Product</Button>
            <Button variant="secondary" onClick={() => setEditing(true)}>
              Edit Product
            </Button>
          </>
        ) : (
          <>
            <h4>Editing Porduct</h4>
            <Button size="sm" onClick={() => setEditing(false)}>
              Go back
            </Button>
            <br />
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
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default NoteItem;

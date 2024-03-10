import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

const NoteList = () => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  console.log(title)
  console.log(text)

  return (
    <>
      <div>
        {editing == false ? (
          <>
            <h3>Titulo</h3>
            <p>Descripcion</p>
            <button>Borrar</button>
            <button onClick={() => setEditing(true)}>Editar</button>
          </>
        ) : (
          <>
            <h4>Editando</h4>
            <button onClick={() => setEditing(false)}>Volver</button>
            <br />
            <form>
              <label id="title">Title</label>
              <input
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="title"
              />
              <label id="text">Text</label>
              <input
                name="text"
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="text"
              />
              <button>Guardar</button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default NoteList;

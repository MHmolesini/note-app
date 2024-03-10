import React, { useEffect, useState } from "react";
import { getNotes } from "../services/supabase";
import NoteList from "./NoteList";

const NoteForm = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes()
  }, [])

  // async function getNotes() {
  //   try {
  //       const {data, error} = await supabase
  //           .from('notes')
  //           .select('*')

  //       if (error) throw error;
  //       if (data != null) {
  //           setNotes(data)
  //       }
  //   } catch (error) {
  //       alert(error)
  //   }
  // }

  // const [values, setValues] = useState({
  //   title: "",
  //   text: "",
  // });

  //   Se llama cuando se cambia el valor de un campo de entrada en el formulario.
  //   Utiliza el nombre 'name' y el valor 'value' del campo de entrada para actualizar el estado 'values'.
  //   Utiliza la funcion 'setValues' para actualizar el estado 'values' con el nuevo valor del campo de entrada.
  // const handleChange = (e) => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // Se llama cuando se envia el formulario de creacion de notas.
  // Evita que el formulario se envie de forma predeterminada utilizando 'e.preventDefault()'.
  // Obtiene 'title' y 'text' del estado 'values', y 'userId' del token 'token.user.id'.
  // Llama a 'createNote' con 'userId', 'title' y 'text' para crear una nueva nota en la base de datos de Supabase.
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { title, text } = values;
  //   await createNote(title, text);
  //   // Limpiar el formulario despues de enviar
  //   setValues({
  //     title: "",
  //     text: "",
  //   });
  // };

  console.log(notes)

  return (
    <>
      <h1>Lista de notas</h1>
      <NoteList/>
      {/* {notes.map((note) => (
        <NoteList note={note}/>
      ))} */}
    </>
  );
};

export default NoteForm;

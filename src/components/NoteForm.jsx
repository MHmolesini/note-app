import React, { useState } from "react";
import { createNote } from "../services/supabase";

const NoteForm = () => {
  const [values, setValues] = useState({
    title: "",
    text: "",
  });

  //   Se llama cuando se cambia el valor de un campo de entrada en el formulario.
  //   Utiliza el nombre 'name' y el valor 'value' del campo de entrada para actualizar el estado 'values'.
  //   Utiliza la funcion 'setValues' para actualizar el estado 'values' con el nuevo valor del campo de entrada.
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // Se llama cuando se envia el formulario de creacion de notas.
  // Evita que el formulario se envie de forma predeterminada utilizando 'e.preventDefault()'.
  // Obtiene 'title' y 'text' del estado 'values', y 'userId' del token 'token.user.id'.
  // Llama a 'createNote' con 'userId', 'title' y 'text' para crear una nueva nota en la base de datos de Supabase.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, text } = values;
    await createNote(title, text);
    // Limpiar el formulario despues de enviar
    setValues({
      title: "",
      text: "",
    });
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={values.title}
          onChange={handleChange}
          type="text"
          placeholder="title"
        />
        <input
          name="text"
          value={values.text}
          onChange={handleChange}
          type="text"
          placeholder="text"
        />
        <button>Guardar</button>
      </form>
  );
};

export default NoteForm;

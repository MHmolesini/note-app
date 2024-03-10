import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const link = 'https://kbqvseieqrjzsqtpnhjh.supabase.co/storage/v1/object/public/logo/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg'

  const [imageUrl, setImageUrl] = useState("");

  console.log(imageUrl)
  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleGoogleSingIn() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) throw error;
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullname,
          },
        },
      });
      if (error) throw error;
      alert("Check your email for verification link");
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    const fetchImage = async () => {
      // Recupera la URL de la imagen desde el bucket 'logo'
      const { publicURL, error } = supabase.storage
        .from("logo")
        .getPublicUrl(
          "kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg"
        );

      if (error) {
        console.error("Error fetching image URL", error.message);
      } else {
        setImageUrl(publicURL);
      }
    };

    fetchImage();
  }, []);

  console.log(imageUrl)

  return (
    <div>
        <button style={{
            backgroundImage: `url(${link})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',    
        }} onClick={handleGoogleSingIn}>Google</button>
      <form onSubmit={handleSubmit}>
        <input placeholder="Fullname" name="fullname" onChange={handleChange} />
        <input placeholder="Email" name="email" onChange={handleChange} />
        <input
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
      Already have an account? <Link to="/">Login</Link>
    </div>
  );
};

export default SignUp;

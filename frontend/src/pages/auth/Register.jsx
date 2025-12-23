import { useState } from "react";
import AuthButton from "../../components/auth/AuthButton"
import AuthForm from "../../components/auth/AuthForm"
import AuthInput from "../../components/auth/AuthInput"
import { registerUser } from "../../api/auth.api";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {

    const navigate = useNavigate();


    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(form);
            setForm({ name: "", email: "", password: "" });
            navigate("/login");
        } catch (err) {
            console.error(err);
        }
    };
    
  return (
      <AuthForm
          title="Create your account"
          subtitle="Start managing tasks effortlessly"
          onSubmit={handleSubmit}
          footer={
              <>
                  Already have an account?{" "}
                  <Link
                      to="/login"
                      className="font-medium text-black hover:underline"
                  >
                      Log in
                  </Link>
              </>
          }
      >
          <AuthInput label="Name" name="name" onChange={handleChange} value={form.name} />
          <AuthInput label="Email" name="email" onChange={handleChange} value={form.email} />
          <AuthInput
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
          />
          <AuthButton>Create account</AuthButton>
      </AuthForm>
  )
}

export default Register
import { useState } from "react";
import AuthButton from "../../components/auth/AuthButton"
import AuthForm from "../../components/auth/AuthForm"
import AuthInput from "../../components/auth/AuthInput"


const Register = () => {
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
        // await register(form);
      };

      console.log("form",form);
  return (
      <AuthForm
          title="Create your account"
          subtitle="Start managing tasks effortlessly"
          onSubmit={handleSubmit}
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
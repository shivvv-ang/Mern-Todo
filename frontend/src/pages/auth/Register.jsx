import { useCallback, useState } from "react";
import AuthButton from "../../components/auth/AuthButton.jsx"
import AuthForm from "../../components/auth/AuthForm.jsx"
import AuthInput from "../../components/auth/AuthInput.jsx"
import { registerUser } from "../../api/auth.api.js";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await registerUser(form);
            setForm({ name: "", email: "", password: "" });
            navigate("/login");
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [form, navigate]);
    
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
          <AuthInput label="Name" name="name" onChange={handleChange} value={form.name} autoComplete="email" />
          <AuthInput label="Email" name="email" onChange={handleChange} value={form.email} autoComplete="current-password" />
          <AuthInput
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
          />
          <AuthButton disabled={loading} >Create account</AuthButton>
      </AuthForm>
  )
}

export default Register
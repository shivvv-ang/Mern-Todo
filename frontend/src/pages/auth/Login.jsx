import AuthForm from '../../components/auth/AuthForm.jsx'
import AuthInput from '../../components/auth/AuthInput.jsx'
import AuthButton from '../../components/auth/AuthButton.jsx'
import { useCallback, useState } from 'react';
import { loginUser } from '../../api/auth.api.js';
import {  Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';



const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();
  

    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            try {
                const res = await loginUser(form);
                login({ user: res.data.data });
                navigate("/dashboard");
            } catch (err) {
                console.error(err);
            }
        },
        [form, login, navigate]
      );

  return (
      <AuthForm
          title="Welcome back"
          subtitle="Log in to manage your tasks"
          onSubmit={handleSubmit}
          footer={
              <>
                  Don’t have an account?{" "}
                  <Link
                      to="/register"
                      className="font-medium text-black hover:underline"
                  >
                      Create one
                  </Link>
              </>
          }
      >
          <AuthInput
              label="Email"
              name="email"
              onChange={handleChange}
              value={form.email}
          />
          <AuthInput
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
          />
          <AuthButton>Log in</AuthButton>
      </AuthForm>
  )
}

export default Login
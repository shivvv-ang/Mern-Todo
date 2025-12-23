import AuthForm from '../../components/auth/AuthForm'
import AuthInput from '../../components/auth/AuthInput'
import AuthButton from '../../components/auth/AuthButton'
import { useState } from 'react';

const Login = () => {

    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
      };

    const handleSubmit = async () => {}

  return (
      <AuthForm
          title="Welcome back"
          subtitle="Log in to manage your tasks"
          onSubmit={handleSubmit}
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
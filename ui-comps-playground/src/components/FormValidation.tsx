import { useState } from "react";

const FormValidation = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });
  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const errs: any = {};
    if (!values.name) errs.name = "Імʼя обовʼязкове";
    if (!/\S+@\S+\.\S+/.test(values.email)) errs.email = "Некоректний email";
    if (values.password.length < 6)
      errs.password = "Пароль має бути ≥6 символів";
    if (!values.message) errs.message = "Повідомлення обовʼязкове";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert("Form was sent!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        name="name"
        placeholder="name"
        onChange={handleChange}
        className="border w-full p-2"
      />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <input
        name="email"
        placeholder="email"
        onChange={handleChange}
        className="border w-full p-2"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input
        name="password"
        placeholder="password"
        type="password"
        onChange={handleChange}
        className="border w-full p-2"
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <textarea
        name="message"
        placeholder="message"
        onChange={handleChange}
        className="border w-full p-2"
      />
      {errors.message && <p className="text-red-500">{errors.message}</p>}

      <button className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
};

export default FormValidation;

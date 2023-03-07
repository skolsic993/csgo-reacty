import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";

const loginSchema = object({
  email: string().nonempty({
    message: "Email is required!",
  }),
  password: string()
    .min(8, "Password is too short - should be 8 chars minimum!")
    .nonempty({
      message: "Password is required!",
    }),
});

type LoginUserInput = TypeOf<typeof loginSchema>;

export default function Login() {
  const router = useRouter();
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginUserInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginUserInput) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/auth/signin`,
        values,
        { withCredentials: true }
      );
      router.push("/");
    } catch (error: any) {
      setLoginError(error?.message);
    }
  };

  return (
    <>
      <p>{loginError}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-element">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="jane.doe@example.com"
            {...register("email")}
          />

          <p>{JSON.stringify(errors.email?.message)}</p>
        </div>

        <div className="form-element">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="*********"
            {...register("password")}
          />

          <p>{JSON.stringify(errors.password?.message)}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

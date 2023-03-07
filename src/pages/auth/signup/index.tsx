import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";

const createUserSchema = object({
  name: string().nonempty({
    message: "Name is required!",
  }),
  nick: string().nonempty({
    message: "Nick is required!",
  }),
  email: string().nonempty({
    message: "Email is required!",
  }),
  password: string()
    .min(8, "Password is too short - should be 8 chars minimum!")
    .nonempty({
      message: "Password is required!",
    }),
  passwordConfirmation: string().nonempty({
    message: "Confirmation password is required!",
  }),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords do not match!",
  path: ["passwordConfirmation"],
});

type CreateUserInput = TypeOf<typeof createUserSchema>;

export default function Register() {
  const router = useRouter();
  const [registerError, setRegisterError] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = async (values: CreateUserInput) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/auth/signup`,
        values,
        { withCredentials: true }
      );
      router.push("/");
    } catch (error: any) {
      setRegisterError(error?.message);
    }
  };

  return (
    <>
      <p>{registerError}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-element">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            {...register("name")}
          />

          <p>{JSON.stringify(errors.name?.message)}</p>
        </div>

        <div className="form-element">
          <label htmlFor="nick">Nick</label>
          <input
            id="nick"
            type="text"
            placeholder="Nick"
            {...register("nick")}
          />

          <p>{JSON.stringify(errors.nick?.message)}</p>
        </div>

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

        <div className="form-element">
          <label htmlFor="passwordConfirmation">Password Confirmation</label>
          <input
            id="passwordConfirmation"
            type="password"
            placeholder="***********"
            {...register("passwordConfirmation")}
          />

          <p>{JSON.stringify(errors.passwordConfirmation?.message)}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

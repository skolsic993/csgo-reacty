import { Input } from "@/shared/input/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
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
    .nonempty({
      message: "Password is required!",
    })
    .min(8, "Password is too short - should be 8 chars minimum!"),
  passwordConfirmation: string().nonempty({
    message: "Confirmation password is required!",
  }),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords do not match!",
  path: ["passwordConfirmation"],
});

type CreateUserInput = TypeOf<typeof createUserSchema>;

export const SignUpForm = () => {
  const router = useRouter();
  const [loadingButton, setLoadingButton] = useState(false);
  const [registerError, setRegisterError] = useState<{
    message: string;
  } | null>(null);

  const onSubmit = async (values: CreateUserInput) => {
    setLoadingButton(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/auth/signup`,
        values,
        { withCredentials: true }
      );
      setLoadingButton(false);
      router.push("/");
    } catch (error: any) {
      setRegisterError(error);
      setLoadingButton(false);
    }
  };

  const defaultValues = {
    name: "",
    nick: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    root: "",
  };
  const {
    register,
    control,
    formState: { errors },
    setFocus,
    handleSubmit,
  } = useForm({ defaultValues, resolver: zodResolver(createUserSchema) });

  useEffect(() => {
    const firstError = (
      Object.keys(errors) as Array<keyof typeof errors>
    ).reduce<keyof typeof errors | null>((field, a) => {
      const fieldKey = field as keyof typeof errors;
      return !!errors[fieldKey] ? fieldKey : a;
    }, null);

    if (firstError) {
      setFocus(firstError);
    }
  }, [errors, setFocus]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="w-full surface-card py-8 px-5 sm:px-8"
        style={{ borderRadius: "53px" }}
      >
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Hello there!</div>
        </div>

        <div className="mb-3">
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required." }}
            render={({ field }) => (
              <>
                <Input
                  name={"name"}
                  type={"text"}
                  feedback={false}
                  register={register}
                  field={field}
                  label={"Name"}
                  errors={errors.name?.message}
                />
              </>
            )}
          />
        </div>

        <div className="mb-3">
          <Controller
            name="nick"
            control={control}
            rules={{ required: "Nick is required." }}
            render={({ field }) => (
              <>
                <Input
                  name={"nick"}
                  type={"text"}
                  feedback={false}
                  register={register}
                  field={field}
                  label={"Nick"}
                  errors={errors.nick?.message}
                />
              </>
            )}
          />
        </div>

        <div className="mb-3">
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required." }}
            render={({ field }) => (
              <>
                <Input
                  name={"email"}
                  type={"text"}
                  feedback={false}
                  register={register}
                  field={field}
                  label={"Email"}
                  errors={errors.email?.message}
                />
              </>
            )}
          />
        </div>

        <div className="mb-3">
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required." }}
            render={({ field: { ref, ...field } }) => (
              <>
                <Input
                  name={"password"}
                  type={"password"}
                  feedback={true}
                  register={register}
                  field={field}
                  label={"Password"}
                  errors={errors.password?.message}
                />
              </>
            )}
          />
        </div>

        <div className="mb-5">
          <Controller
            name="passwordConfirmation"
            control={control}
            rules={{ required: "Password confirmation is required." }}
            render={({ field: { ref, ...field } }) => (
              <>
                <Input
                  name={"passwordConfirmation"}
                  type={"password"}
                  feedback={false}
                  register={register}
                  field={field}
                  label={"Password Confirmation"}
                  errors={errors.passwordConfirmation?.message}
                />
              </>
            )}
          />

          {JSON.stringify(registerError?.message) && (
            <Message
              severity="error"
              text={"User with this Email already exists!"}
            />
          )}

          <div className="my-3">
            Already have an account?{" "}
            <span
              className="text-primary font-medium cursor-pointer"
              onClick={() => router.push("/auth/signin")}
            >
              Sign in here!
            </span>
          </div>
        </div>

        <Button
          label="Sign Up"
          className="primary w-full p-3 text-xl"
          type="submit"
          loading={loadingButton}
        />
      </div>
    </form>
  );
};

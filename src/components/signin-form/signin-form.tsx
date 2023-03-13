import { Input } from "@/shared/input/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";

const loginSchema = object({
  email: string()
    .nonempty({
      message: "Email is required!",
    })
    .email(),
  password: string()
    .nonempty({
      message: "Password is required!",
    })
    .min(8, "Password is too short - should be 8 chars minimum!"),
});

type LoginUserInput = TypeOf<typeof loginSchema>;

const SignInForm = () => {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [loginError, setLoginError] = useState<{ message: string } | null>(
    null
  );

  const onSubmit = async (values: LoginUserInput) => {
    setLoadingButton(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/auth/signin`,
        values,
        { withCredentials: true }
      );

      router.push("/");
      setLoadingButton(false);
    } catch (error: any) {
      setLoginError(error);
      setLoadingButton(false);
    }
  };

  const defaultValues = { email: "", password: "" };
  const {
    register,
    control,
    formState: { errors },
    setFocus,
    handleSubmit,
  } = useForm({ defaultValues, resolver: zodResolver(loginSchema) });

  useEffect(() => {
    setFocus("password");
    setShowButton(true);
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="w-full surface-card py-8 px-5 sm:px-8"
        style={{ borderRadius: "53px" }}
      >
        <div className="text-center mb-5">
          <h1 className="text-900 text-3xl font-medium mb-3">Welcome back!</h1>
        </div>
        <div className="mb-4">
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
        <div className="mb-6">
          <Controller
            control={control}
            name="password"
            rules={{ required: "Password is required." }}
            render={({ field: { ref, ...field } }) => (
              <>
                <Input
                  name={"password"}
                  type={"password"}
                  feedback={false}
                  register={register}
                  field={field}
                  label={"Password"}
                  errors={errors.password?.message}
                />
              </>
            )}
          />

          {JSON.stringify(loginError?.message) && (
            <Message severity="error" text={"Invalid username or password!"} />
          )}

          <div className="my-3">
            Don’t have an account?{" "}
            <span
              className="text-primary font-medium cursor-pointer"
              onClick={() => router.push("/auth/signup")}
            >
              Sign up here!
            </span>
          </div>
        </div>

        {showButton && (
          <Button
            label="Sign In"
            className="primary w-full p-3 text-xl"
            type="submit"
            loading={loadingButton}
          />
        )}
      </div>
    </form>
  );
};

export default SignInForm;

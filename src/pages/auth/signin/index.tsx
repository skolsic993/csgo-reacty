import { Input } from "@/shared/input/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import getConfig from "next/config";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import AppConfig from "../../../../layout/AppConfig";
import { LayoutContext } from "../../../../layout/context/layoutcontext";

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

function Login() {
  const router = useRouter();
  const [loginError, setLoginError] = useState(null);

  const onSubmit = async (values: LoginUserInput) => {
    console.log(values);
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
  }, [setFocus]);

  const { layoutConfig } = useContext(LayoutContext);
  const contextPath = getConfig().publicRuntimeConfig.contextPath;

  const containerClassName = classNames(
    "surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden w-full",
    { "p-input-filled": layoutConfig.inputStyle === "filled" }
  );

  return (
    <div className={containerClassName}>
      <div className="flex flex-column align-items-center justify-content-center w-full">
        <img
          src={`${contextPath}/layout/images/logo-${
            layoutConfig.colorScheme === "light" ? "dark" : "white"
          }.svg`}
          alt="Sakai logo"
          className="mb-5 w-6rem flex-shrink-0"
        />
        <div
          className="w-11 sm:w-10 md:w-7 lg:w-7 xl:w-5"
          style={{
            borderRadius: "56px",
            padding: "0.3rem",
            background:
              "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              className="w-full surface-card py-8 px-5 sm:px-8"
              style={{ borderRadius: "53px" }}
            >
              <div className="text-center mb-5">
                <div className="text-900 text-3xl font-medium mb-3">
                  Welcome back!
                </div>
                <span className="text-600 font-medium">
                  Sign in to continue
                </span>
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
              </div>

              <Button
                label="Sign In"
                className="primary w-full p-3 text-xl"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Login.getLayout = function getLayout(page: any) {
  return (
    <>
      {page}
      <AppConfig simple />
    </>
  );
};

export default Login;

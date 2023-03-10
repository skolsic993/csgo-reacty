import { Input } from "@/shared/input/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import { classNames } from "primereact/utils";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import AppConfig from "../../../../layout/AppConfig";
import { LayoutContext } from "../../../../layout/context/layoutcontext";

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

export default function Register() {
  const router = useRouter();
  const [registerError, setRegisterError] = useState<{
    message: string;
  } | null>(null);

  const onSubmit = async (values: CreateUserInput) => {
    console.log(values);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/auth/signup`,
        values,
        { withCredentials: true }
      );
      router.push("/");
    } catch (error: any) {
      setRegisterError(error);
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

  const { layoutConfig } = useContext(LayoutContext);
  const containerClassName = classNames(
    "surface-ground flex align-items-center justify-content-center min-h-screen  overflow-hidden w-full",
    { "p-input-filled": layoutConfig.inputStyle === "filled" }
  );

  return (
    <div className={containerClassName}>
      <div className="flex flex-column align-items-center justify-content-center w-full">
        <div
          className="w-11 sm:w-10 md:w-7 lg:w-7 xl:w-4"
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
                  Sign in to continues
                </span>
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
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  //   <>
  //     <p>{registerError}</p>
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <div className="form-element">
  //         <label htmlFor="name">Name</label>
  //         <input
  //           id="name"
  //           type="text"
  //           placeholder="Jane Doe"
  //           {...register("name")}
  //         />

  //         <p>{JSON.stringify(errors.name?.message)}</p>
  //       </div>

  //       <div className="form-element">
  //         <label htmlFor="nick">Nick</label>
  //         <input
  //           id="nick"
  //           type="text"
  //           placeholder="Nick"
  //           {...register("nick")}
  //         />

  //         <p>{JSON.stringify(errors.nick?.message)}</p>
  //       </div>

  //       <div className="form-element">
  //         <label htmlFor="email">Email</label>
  //         <input
  //           id="email"
  //           type="email"
  //           placeholder="jane.doe@example.com"
  //           {...register("email")}
  //         />

  //         <p>{JSON.stringify(errors.email?.message)}</p>
  //       </div>

  //       <div className="form-element">
  //         <label htmlFor="password">Password</label>
  //         <input
  //           id="password"
  //           type="password"
  //           placeholder="*********"
  //           {...register("password")}
  //         />

  //         <p>{JSON.stringify(errors.password?.message)}</p>
  //       </div>

  //       <div className="form-element">
  //         <label htmlFor="passwordConfirmation">Password Confirmation</label>
  //         <input
  //           id="passwordConfirmation"
  //           type="password"
  //           placeholder="***********"
  //           {...register("passwordConfirmation")}
  //         />

  //         <p>{JSON.stringify(errors.passwordConfirmation?.message)}</p>
  //       </div>

  //       <button type="submit">Submit</button>
  //     </form>
  //   </>
  // );
}

Register.getLayout = function getLayout(page: any) {
  return (
    <>
      {page}
      <AppConfig simple />
    </>
  );
};

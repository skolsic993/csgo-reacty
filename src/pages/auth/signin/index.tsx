import SignInForm from "@/components/signin-form/signin-form";
import { classNames } from "primereact/utils";
import { useContext } from "react";
import AppConfig from "../../../../layout/AppConfig";
import { LayoutContext } from "../../../../layout/context/layoutcontext";

function Login() {
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
          <SignInForm />
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

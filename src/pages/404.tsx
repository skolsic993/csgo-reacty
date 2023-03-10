import { useRouter } from "next/router";
import { Button } from "primereact/button";
import AppConfig from "../../layout/AppConfig";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
      <div className="flex flex-column align-items-center justify-content-center">
        <div
          style={{
            borderRadius: "56px",
            padding: "0.3rem",
            background:
              "linear-gradient(180deg, rgba(236, 72, 153, 1) 10%, rgba(247, 149, 48, 0) 30%)",
          }}
        >
          <div
            className="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center"
            style={{ borderRadius: "53px" }}
          >
            <div
              className="flex justify-content-center align-items-center bg-pink-500 border-circle"
              style={{ height: "3.2rem", width: "3.2rem" }}
            >
              <i className="pi pi-fw pi-exclamation-circle text-2xl text-white"></i>
            </div>
            <h1 className="text-900 font-bold text-5xl mb-2">Access Denied</h1>
            <div className="text-600 mb-5">
              You do not have the necessary permisions!
            </div>
            <h1 className="text-8xl text-pink-500 mb-4">404</h1>
            <Button
              icon="pi pi-arrow-left"
              label="Go to Dashboard"
              className="p-button-text"
              onClick={() => router.push("/")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

NotFound.getLayout = function getLayout(page: any) {
  return (
    <>
      {page}
      <AppConfig simple />
    </>
  );
};

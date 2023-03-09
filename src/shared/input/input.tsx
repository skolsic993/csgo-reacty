import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { Password } from "primereact/password";

export const Input = ({
  name,
  field,
  label,
  errors,
  register,
  type,
  feedback,
}: {
  name: any;
  field: any;
  label: any;
  errors: any;
  register: any;
  type: any;
  feedback: boolean;
}) => {
  return (
    <>
      <label
        htmlFor={field.name}
        className="block text-900 text-xl font-medium mb-2"
      >
        {label}
      </label>
      {type === "text" ? (
        <InputText
          id={field.name}
          {...field}
          className="w-full mb-1"
          style={{ padding: "1rem" }}
          {...register(name)}
        />
      ) : (
        <Password
          type="password"
          {...register(name)}
          id={field.name}
          {...field}
          className="w-full"
          inputClassName="w-full p-3 mb-1"
          toggleMask
          feedback={false}
        />
      )}
      {errors && <Message severity="error" text={errors} />}
    </>
  );
};

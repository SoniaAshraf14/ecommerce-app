import { useField } from "formik";
import React from "react";

interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

function TextInput({ label, ...props }: TextInputProps) {
  const [field, meta] = useField(props.name);

  return (
    <div className="flex-1 relative">
      {label && (
        <label className="block mb-1 text-[#89939E] xl:text-[24] lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px]">
          {label}
        </label>
      )}

      <input
        {...field}
        {...props}
        className={`w-full rounded-[10px] outline-none lg:p-4 md:p-3 sm:p-2 p-2
          font-normal lg:text-[16px] md:text-[14px] text-[12px] text-white
          border ${
            meta.touched && meta.error
              ? "border-red-500"
              : "border-[#FFFFFF26]"
          } ${props.className || ""}`}
      />

      {meta.touched && meta.error && (
        <p className="text-red-500 text-sm mt-1 absolute -bottom-5 left-1">
          {meta.error}
        </p>
      )}
    </div>
  );
}

export default TextInput;
import { Dispatch, SetStateAction } from "react";

type TPrimaryInputProps = {
  type: "text" | "password" | "email";
  isDisabled?: boolean;
  isCentered?: boolean;
  value: string;
  placeholder?: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export default function PrimaryInput({
  type,
  isDisabled = false,
  isCentered = false,
  value,
  placeholder = "",
  setValue,
}: TPrimaryInputProps) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className={`px-4 py-3 text-lg rounded-lg bg-black/30 w-full outline-none ${
          isCentered && "text-center"
        } placeholder:text-gray-400 disabled:text-gray-400`}
        disabled={isDisabled}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    </div>
  );
}

import { ReactNode } from "react";

type TPrimaryButtonProps = {
  handleOnClick: () => void;
  children: ReactNode;
};

export default function FarmButton({
  handleOnClick,
  children,
}: TPrimaryButtonProps) {
  return (
    <button
      className="w-full px-5 py-4 bg-white text-gray-600 text-center rounded-lg hover:bg-gray-200 outline-none transition-all ease-out"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}

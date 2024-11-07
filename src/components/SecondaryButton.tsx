import { ReactNode } from "react";

type TSecondaryButtonProps = {
  handleOnClick?: () => void;
  btnStatus?: "unset" | "set";
  unsetChild?: ReactNode;
  setChild?: ReactNode;
  children: ReactNode;
};

export default function SecondaryButton({
  handleOnClick,
  btnStatus,
  unsetChild,
  setChild,
  children,
}: TSecondaryButtonProps) {
  return (
    <button
      className="flex gap-1 bg-black/30 px-3 py-2 rounded-lg outline-none"
      onClick={handleOnClick}
    >
      {children}
      <span>{btnStatus === "unset" ? unsetChild : setChild}</span>
    </button>
  );
}

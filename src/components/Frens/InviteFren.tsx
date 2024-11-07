import { useState } from "react";
import PrimaryInput from "../PrimaryInput";
import IconClipboard from "@utils/icons/clipboard";
import IconCheck from "@utils/icons/check";
import IconClipboardSolid from "@utils/icons/clipboardsolid";
import SecondaryButton from "../SecondaryButton";

export default function InviteFren() {
  const [inputInviteCode, setInputInviteCode] = useState<string>("");
  const [myInviteCode, setMyInviteCode] = useState<string>("jsdklfjd-shayy");
  const [btnStatusSubmit, setBtnStatusSubmit] = useState<"unset" | "set">(
    "unset"
  );
  const [btnStatusCopy, setBtnStatusCopy] = useState<"unset" | "set">("unset");

  const handleOnSubmit = () => {
    if (inputInviteCode !== "" && btnStatusSubmit === "unset") {
      setBtnStatusSubmit("set");
      setTimeout(() => setBtnStatusSubmit("unset"), 900);
    }
  };

  const handleOnCopy = () => {
    if (btnStatusCopy === "unset") {
      setBtnStatusCopy("set");
      setTimeout(() => setBtnStatusCopy("unset"), 300);
    }
  };

  return (
    <section className="w-full">
      <h1 className="mb-4">Invite Frens</h1>
      <div className="p-4 rounded-lg bg-gradient-to-r from-indigo-900 to-fuchsia-900 flex flex-col items-center gap-4">
        <h2 className="text-lg">Enter Invitation Code</h2>
        <PrimaryInput
          type="text"
          placeholder="xxxxxxxx-username"
          value={inputInviteCode}
          setValue={setInputInviteCode}
          isCentered
        />

        <SecondaryButton
          handleOnClick={handleOnSubmit}
          unsetChild={<IconCheck />}
          setChild={"..."}
          btnStatus={btnStatusSubmit}
        >
          Submit
        </SecondaryButton>

        <h2 className="text-lg">Your Invitation Code</h2>
        <PrimaryInput
          type="text"
          value={myInviteCode}
          setValue={setMyInviteCode}
          isDisabled
          isCentered
        />
        <div className="flex gap-2">
          <SecondaryButton
            handleOnClick={handleOnCopy}
            unsetChild={<IconClipboard />}
            setChild={<IconClipboardSolid />}
            btnStatus={btnStatusCopy}
          >
            Copy
          </SecondaryButton>
          <SecondaryButton
            handleOnClick={handleOnCopy}
            unsetChild={<IconClipboard />}
            setChild={<IconClipboardSolid />}
            btnStatus={btnStatusCopy}
          >
            Share
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}

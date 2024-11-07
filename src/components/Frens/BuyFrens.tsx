import SecondaryButton from "../SecondaryButton";

export default function BuyFrens() {
  return (
    <section className="w-full">
      <div className="p-4 rounded-lg bg-gradient-to-r from-indigo-900 to-fuchsia-900 flex flex-col items-center gap-4">
        <h2 className="text-lg">Get more frens?</h2>
        <a href="/frens/getmorefrens">
          <SecondaryButton>Buy Frens</SecondaryButton>
        </a>
      </div>
    </section>
  );
}

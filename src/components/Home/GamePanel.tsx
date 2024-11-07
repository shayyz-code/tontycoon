import PrimaryButton from "../PrimaryButton";

const GamePanel = () => (
  <div className="relative flex flex-col items-between justify-end w-full rounded-lg bg-indigo-950 min-h-[240px]">
    <div className="p-7 flex justify-between items-center">
      <div>
        <h3 className="text-sm mb-2 font-semibold">Snake game</h3>
        <div className="text-xs">+10pts</div>
      </div>
      <div>
        <PrimaryButton>
          <a href="/game">Play</a>
        </PrimaryButton>
      </div>
    </div>
  </div>
);

export default GamePanel;

import PlayerView from "./_components/player-view";

export default function PitchPage() {
  return (
    <div className="w-full h-full relative">
      <div className="max-w-full mx-auto border bg-green-700">
        <div className="grid grid-cols-1 gap-2 p-2">
          <PlayerView />
        </div>
      </div>
    </div>
  );
}

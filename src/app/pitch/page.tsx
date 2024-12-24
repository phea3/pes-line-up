import PlayerView from "./_components/player-view";

export default function PitchPage() {
  return (
    <div className="w-full h-full p-10">
      <div className="max-w-4xl mx-auto border p-4">
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 50 }).map((_, index) => {
            return <PlayerView key={index} order={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

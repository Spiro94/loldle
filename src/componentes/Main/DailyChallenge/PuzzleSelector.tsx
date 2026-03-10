import usePuzzleLengthContext from "../../../hooks/usePuzzleLengthContext";
import { LENGTHS } from "../../../utils/constants";


export default function PuzzleSelector() {
  const { length, setLength } = usePuzzleLengthContext();
  return (
    <div className="flex flex-col gap-2 items-start bg-tile px-3 py-4 rounded-lg">
      <span className="font-oswald text-lg text-heading-white font-semibold">Puzzle Length Selector</span>
      <div className="flex gap-2">
        {LENGTHS.map((len) => (
          <button
            key={len}
            onClick={() => setLength(len)}
            className={`w-9 h-9 rounded-full font-jetbrains-mono font-bold text-sm transition-colors cursor-pointer
              ${length === len
                ? 'bg-gold text-heading-white'
                : 'bg-gameboard text-heading-white hover:bg-tile-partial-hit hover:text-white'
              }`}
          >
            {len}
          </button>
        ))}
      </div>
    </div>
  );
}

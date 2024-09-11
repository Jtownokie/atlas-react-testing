// Play Controls Component
import { PlayButton } from "./PlayButton";
import { ShuffleButton } from "./ShuffleButton";
import { SpeedButton } from "./SpeedButton";
import { BackwardButton } from "./BackwardButton";
import { ForwardButton } from "./ForwardButton";

export default function PlayControls() {
  return (
    <div className="mb-4 flex flex-row items-center justify-between">
      <SpeedButton />
      <BackwardButton />
      <PlayButton />
      <ForwardButton />
      <ShuffleButton />
    </div>
  );
}

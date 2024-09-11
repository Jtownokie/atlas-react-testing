// Playlist Item Component

type PlayListItemProps = {
  title: string;
  artist: string;
  backgroundColor: string;
  songLength: string;
  onClick: () => void;
};

export default function PlayListItem({
  title,
  artist,
  songLength,
  backgroundColor,
  onClick,
}: PlayListItemProps) {
  return (
    <div
      className={`mb-1 flex cursor-pointer flex-row items-center justify-between rounded-md ${backgroundColor ? backgroundColor : ""}`}
      onClick={onClick}
    >
      <div className="flex flex-col">
        <p className="text-sm font-medium text-gold">{title}</p>
        <p className="text-sm font-medium text-cyan">{artist}</p>
      </div>
      <p className="text-sm font-medium text-cyan">{songLength}</p>
    </div>
  );
}

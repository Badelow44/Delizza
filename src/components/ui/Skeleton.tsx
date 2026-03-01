export default function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-[18px] bg-[#252525] ${className ?? ""}`}
    />
  );
}

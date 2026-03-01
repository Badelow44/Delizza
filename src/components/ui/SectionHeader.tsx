interface SectionHeaderProps {
  title: string;
  action?: string;
  onAction?: () => void;
}

export default function SectionHeader({
  title,
  action,
  onAction,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-[18px] font-semibold text-[#F5F5F5]">{title}</h2>
      {action && (
        <button
          onClick={onAction}
          className="text-[13px] font-medium text-[#D4A053] hover:text-[#E8C078] transition-colors"
        >
          {action}
        </button>
      )}
    </div>
  );
}

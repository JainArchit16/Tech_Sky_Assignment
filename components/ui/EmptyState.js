export default function EmptyState({ title, subtitle }) {
  return (
    <div className="text-center py-12 text-gray-400">
      <p className="text-lg font-medium">{title}</p>
      <p className="text-sm mt-1">{subtitle}</p>
    </div>
  );
}

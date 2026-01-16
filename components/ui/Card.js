export default function Card({ title, children }) {
  return (
    <div className="bg-black/60 backdrop-blur border border-white/10 rounded-xl p-5 shadow-lg">
      {title && (
        <h2 className="text-lg font-semibold mb-4 text-white">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}

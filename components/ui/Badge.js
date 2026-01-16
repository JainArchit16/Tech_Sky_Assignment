const colors = {
  New: "bg-blue-500/20 text-blue-400",
  Contacted: "bg-yellow-500/20 text-yellow-400",
  Connected: "bg-green-500/20 text-green-400",
  "No Answer": "bg-red-500/20 text-red-400",
};

export default function Badge({ text }) {
  return (
    <span
      className={`px-2 py-1 text-xs rounded-full font-medium ${
        colors[text] || "bg-gray-500/20 text-gray-300"
      }`}
    >
      {text}
    </span>
  );
}

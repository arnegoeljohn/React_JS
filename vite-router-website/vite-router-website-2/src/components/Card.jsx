export default function Card({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded shadow text-center w-full max-w-xs">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

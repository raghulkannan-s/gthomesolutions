export function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <span className="text-4xl mb-4 block" role="img" aria-label={title}>
        {icon}
      </span>
      <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

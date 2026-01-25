import Image from 'next/image';

export function ServiceCard({ title, description, image }) {
  return (
    <div className=" flex align-center justify-center flex-col mx-auto bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex justify-center">
        <Image src={image} width={300} height={200} className="text-4xl mb-4 block" role="img" aria-label={title} alt={title} />
      </div>
      <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

import { trustees } from "./leadershipData";

export default function BoardOfTrustees() {
  return (
    <section className="container mx-auto px-4 py-16 border-t border-gray-200">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">
        Board of Trustees
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 max-w-5xl mx-auto">
        {trustees.map((member) => (
          <div key={member.name} className="flex flex-col">
            <p className="text-lg font-semibold text-gray-900">
              {member.name}
            </p>
            {member.title && (
              <p className="text-sm text-gray-600 italic mt-1">
                {member.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

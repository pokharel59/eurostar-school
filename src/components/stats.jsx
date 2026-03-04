import { Users, Award, Calendar } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Students Enrolled',
      description: 'Active learners',
    },
    {
      icon: Calendar,
      value: '12',
      label: 'Years of Excellence',
      description: 'Since 2014',
    },
    {
      icon: Award,
      value: '50+',
      label: 'Awards Won',
      description: 'Academic & Sports',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#643288] to-[#7a4dbb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-[#D5C9DD]">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { BookOpen, Beaker, Dumbbell, Monitor } from 'lucide-react';

export function Facilities() {
  const facilities = [
    {
      icon: BookOpen,
      title: 'Modern Library',
      description: 'Over 10,000 books and digital resources for comprehensive learning',
      image: 'https://images.unsplash.com/photo-1632217131414-be0bc91aedb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzcyMzgzMTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Beaker,
      title: 'Science Labs',
      description: 'Fully equipped physics, chemistry, and biology laboratories',
      image: 'https://images.unsplash.com/photo-1602052294200-a8b75e03adfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzIzNjc1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Dumbbell,
      title: 'Sports Complex',
      description: 'Multi-purpose sports ground, basketball court, and indoor games',
      image: 'https://images.unsplash.com/photo-1565673686362-85864074640a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBmaWVsZHxlbnwxfHx8fDE3NzIzODMxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Monitor,
      title: 'Computer Lab',
      description: 'State-of-the-art computers with high-speed internet connectivity',
      image: 'https://images.unsplash.com/photo-1731834453355-df041245e7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjb21wdXRlciUyMGxhYiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMjg5ODU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class infrastructure designed to provide the best learning environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#643288] p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
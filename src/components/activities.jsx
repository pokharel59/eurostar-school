import { Palette, Music, Trophy, Drama } from 'lucide-react';

export function Activities() {
  const activities = [
    {
      icon: Palette,
      title: 'Art & Craft',
      description: 'Creative expression through painting, sculpture, and various art forms',
      image: 'https://images.unsplash.com/photo-1598389118600-9a83ceb4ebe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGFydCUyMGNsYXNzJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzcyMjkyNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'bg-purple-600',
    },
    {
      icon: Music,
      title: 'Music & Dance',
      description: 'Vocal and instrumental music classes, along with various dance forms',
      image: 'https://images.unsplash.com/photo-1771923654521-68510e6aad06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBtdXNpYyUyMGNsYXNzJTIwaW5zdHJ1bWVudHN8ZW58MXx8fHwxNzcyMjg5ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'bg-pink-600',
    },
    {
      icon: Trophy,
      title: 'Sports',
      description: 'Basketball, football, athletics, and various indoor and outdoor games',
      image: 'https://images.unsplash.com/photo-1638569794984-d47b2983c1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGJhc2tldGJhbGwlMjBnYW1lfGVufDF8fHx8MTc3MjM4MzEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'bg-green-600',
    },
    {
      icon: Drama,
      title: 'Drama & Theater',
      description: 'Annual plays, skits, and performances to develop confidence and creativity',
      image: 'https://images.unsplash.com/photo-1745183997077-4d2ea4f6069a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBkcmFtYSUyMHRoZWF0ZXIlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NzIzODMxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'bg-orange-600',
    },
  ];

  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond academics – developing well-rounded personalities through diverse activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="relative h-80">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${activity.color} rounded-lg mb-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

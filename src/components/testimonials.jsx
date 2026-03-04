import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Bharat Siwakoti',
      role: 'Parent',
      content: 'Bright Future School has been instrumental in my child\'s development. The teachers are caring, and the curriculum is excellent. I couldn\'t have asked for a better school.',
      rating: 5,
    },
    {
      name: 'Sarmila Gurung',
      role: 'Parent',
      content: 'The holistic approach to education here is remarkable. My daughter has not only excelled academically but has also developed wonderful social skills and confidence.',
      rating: 5,
    },
    {
      name: 'Pushpa Thapa',
      role: 'Parent',
      content: 'The facilities are top-notch, and the extracurricular activities are diverse. My son loves going to school every day, which speaks volumes about the positive environment.',
      rating: 5,
    },
    {
      name: 'Manish Shrestha',
      role: 'Alumni',
      content: 'As an alumnus, I can confidently say that Bright Future School laid the foundation for my success. The values and education I received here continue to guide me.',
      rating: 5,
    },
    {
      name: 'Anita Koirala',
      role: 'Parent',
      content: 'The principal and staff genuinely care about each student\'s growth. The regular communication and parent involvement make us feel like part of a community.',
      rating: 5,
    },
    {
      name: 'Ramesh Adhikari',
      role: 'Parent',
      content: 'The science and computer labs are excellent, and the teachers are highly qualified. My children are well-prepared for their future thanks to this school.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Parents Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our community about their experience with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#DBD4E5] p-6 rounded-xl">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

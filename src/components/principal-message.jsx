import { Quote } from 'lucide-react';

export function PrincipalMessage() {
  return (
    <section id="principal" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Message from the Principal
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-16 h-16 text-[#966FB2] z-0" />
              <div className="relative z-10 bg-[#DBD4E5] p-8 rounded-xl">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Dear Parents and Students,
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  It gives me immense pleasure to welcome you to Bright Future School. Over the past 12 years,
                  we have been committed to providing an educational experience that extends far beyond the
                  traditional classroom setting.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our focus is on holistic development – nurturing not just academic excellence, but also
                  character, creativity, and critical thinking skills. We believe that every child is unique
                  and has the potential to excel when given the right guidance and opportunities.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  With our dedicated faculty, modern facilities, and innovative teaching methods, we strive
                  to create an environment where students can discover their passions, develop their talents,
                  and grow into responsible, confident individuals.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I invite you to be part of our school family and join us on this wonderful journey of
                  learning and growth.
                </p>
                <div className="mt-8">
                  <p className="font-bold text-gray-900 text-xl">Dr. Sarah Joshi</p>
                  <p className="text-gray-600">Principal</p>
                  <p className="text-sm text-gray-500 mt-1">M.Ed., Ph.D. in Education</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-[#643288] rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmluY2lwYWwlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIzODMxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Principal Dr. Sarah Joshi"
                className="relative rounded-2xl shadow-xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

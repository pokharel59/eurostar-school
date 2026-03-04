import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToEnroll = () => {
    const element = document.querySelector('#enroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1762354766812-86025ea7e2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc3MjM4MzExN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="School Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#643288]/90 to-[#643288]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Shaping Tomorrow's Leaders Today
          </h1>
          <p className="text-xl md:text-2xl text-[#D8C8E5] mb-8">
            Excellence in education, nurturing young minds for over a decade
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              size="lg"
              className="inline-flex items-center justify-center 
                        bg-white text-[#643288] 
                        px-6 py-2.5 
                        rounded-xl 
                        font-semibold text-sm 
                        border border-blue-100 
                        shadow-sm 
                        hover:bg-[#DBD4E5] hover:shadow-md 
                        active:scale-95 
                        transition-all duration-200"
              onClick={scrollToEnroll}
            >
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              size="lg"
              variant="outline"
              className="
                  inline-flex items-center justify-center
                  border-2 border-white text-white
                  px-6 py-2.5
                  rounded-lg
                  font-semibold text-sm
                  hover:bg-white/20
                  active:scale-95
                  transition-all duration-200
                  shadow-sm hover:shadow-md
                  "
              onClick={() => {
                const element = document.querySelector('#about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

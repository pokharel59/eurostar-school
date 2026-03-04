import { Target, Eye, Heart } from "lucide-react";

export function About() {
    return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bright Future School has been a beacon of quality education for over 12 years,
            committed to nurturing young minds and building character.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1764720573370-5008f1ccc9fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MjMyMTMxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Students in classroom"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              Founded in 2014, Bright Future School started with a simple mission: to provide
              quality education that goes beyond textbooks. Today, we stand as one of the
              leading educational institutions in the region.
            </p>
            <p className="text-gray-600 mb-4">
              Our state-of-the-art facilities, experienced faculty, and innovative teaching
              methods create an environment where students thrive academically, socially,
              and emotionally.
            </p>
            <p className="text-gray-600">
              We believe in holistic development, nurturing not just academic excellence
              but also creativity, critical thinking, and character building.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#DBD4E5] p-8 rounded-xl">
            <div className="w-12 h-12 bg-[#643288] rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
            <p className="text-gray-600">
              To empower students with knowledge, skills, and values to become responsible
              global citizens and leaders of tomorrow.
            </p>
          </div>

          <div className="bg-[#DBD4E5] p-8 rounded-xl">
            <div className="w-12 h-12 bg-[#643288] rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h4>
            <p className="text-gray-600">
              To be recognized as a center of educational excellence that inspires
              innovation, creativity, and lifelong learning.
            </p>
          </div>

          <div className="bg-[#DBD4E5] p-8 rounded-xl">
            <div className="w-12 h-12 bg-[#643288] rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Our Values</h4>
            <p className="text-gray-600">
              Integrity, excellence, respect, compassion, and innovation guide everything
              we do in shaping young minds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
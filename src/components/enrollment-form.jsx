import { useState } from 'react';

export function EnrollmentForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    gender: '',
    grade: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.studentName || !formData.email || !formData.phone || !formData.grade) {
      alert.error('Please fill in all required fields');
      return;
    }

    // Mock submission
    console.log('Enrollment form submitted:', formData);
    alert.success('Enrollment form submitted successfully! We will contact you soon.');
    
    // Reset form
    setFormData({
      studentName: '',
      dateOfBirth: '',
      gender: '',
      grade: '',
      parentName: '',
      email: '',
      phone: '',
      address: '',
      previousSchool: '',
      message: '',
    });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="enroll" className="py-20 bg-gradient-to-br from-purple-200 to-purple-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enrollment Form
          </h2>
          <p className="text-xl text-gray-600">
            Take the first step towards a bright future for your child
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
            {/* Student Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Student Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="studentName" className="text-sm font-medium text-gray-700">
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="studentName"
                    value={formData.studentName}
                    onChange={(e) => handleChange('studentName', e.target.value)}
                    placeholder="Enter student's full name"
                    required
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none shadow-sm transition"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                    required
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none shadow-sm transition"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="gender" className="text-sm font-medium text-gray-700">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    value={formData.gender}
                    onChange={(e) => handleChange('gender', e.target.value)}
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none shadow-sm transition"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="grade" className="text-sm font-medium text-gray-700">
                    Grade Applying For <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="grade"
                    value={formData.grade}
                    onChange={(e) => handleChange('grade', e.target.value)}
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none shadow-sm transition"
                  >
                    <option value="">Select grade</option>
                    <option value="nursery">Nursery</option>
                    <option value="kindergarten">Kindergarten</option>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={`grade${i + 1}`}>Grade {i + 1}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Parent Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Parent/Guardian Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="parentName" className="text-sm font-medium text-gray-700">
                    Parent/Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="parentName"
                    value={formData.parentName}
                    onChange={(e) => handleChange('parentName', e.target.value)}
                    placeholder="Enter parent's full name"
                    required
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none shadow-sm transition"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none shadow-sm transition"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    required
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none shadow-sm transition"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="previousSchool" className="text-sm font-medium text-gray-700">
                    Previous School (if any)
                  </label>
                  <input
                    id="previousSchool"
                    value={formData.previousSchool}
                    onChange={(e) => handleChange('previousSchool', e.target.value)}
                    placeholder="Enter previous school name"
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none shadow-sm transition"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="address" className="text-sm font-medium text-gray-700">
                Residential Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                placeholder="Enter complete address"
                rows={3}
                required
                className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none shadow-sm transition"
              />
            </div>

            {/* Additional Message */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Additional Information (Optional)
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder="Any special requirements or questions?"
                rows={4}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none shadow-sm transition"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-[#643288] text-white font-semibold rounded-xl shadow-md hover:bg-[#4a2567] hover:shadow-lg active:scale-95 transition-all duration-200"
              >
                Submit Enrollment Form
              </button>
              <p className="text-sm text-gray-500 mt-4">
                * Required fields. We will contact you within 2-3 business days after submission.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

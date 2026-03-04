import React, { useState } from "react";

export function FAQs() {
  const faqs = [
    {
      question: "What is the admission process?",
      answer:
        "The admission process begins with filling out the enrollment form on our website or visiting the school office. This is followed by an interaction with the principal and a tour of the facilities. We accept admissions throughout the year based on seat availability.",
    },
    {
      question: "What are the school timings?",
      answer:
        "Our school operates from Monday to Friday, 8:00 AM to 3:00 PM for regular classes. We also offer extended care programs from 3:00 PM to 5:00 PM for working parents.",
    },
    {
      question: "What is the student-teacher ratio?",
      answer:
        "We maintain a healthy student-teacher ratio of 15:1 to ensure personalized attention for each student. This allows our teachers to focus on individual learning needs and provide quality education.",
    },
    {
      question: "Do you provide transportation facilities?",
      answer:
        "Yes, we provide safe and reliable school bus services covering major areas of the city. All our buses are GPS-enabled and have trained attendants to ensure student safety.",
    },
    {
      question: "What curriculum do you follow?",
      answer:
        "We follow the state-approved curriculum with an emphasis on experiential learning. Our teaching methodology combines traditional and modern approaches, including project-based learning and STEM education.",
    },
    {
      question: "Are extracurricular activities mandatory?",
      answer:
        "We strongly encourage all students to participate in at least one extracurricular activity. While not mandatory, these activities are integral to holistic development and help students discover their talents.",
    },
    {
      question: "What safety measures are in place?",
      answer:
        "Student safety is our top priority. We have 24/7 CCTV surveillance, trained security personnel, fire safety equipment, and regular safety drills. We also have a full-time nurse and doctor on call.",
    },
    {
      question: "How can parents track their child's progress?",
      answer:
        "We provide regular progress reports and conduct parent-teacher meetings every quarter. Additionally, we have a parent portal where you can track attendance, assignments, and academic performance in real-time.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index); // single collapsible behavior
  };

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our school
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg px-6 shadow-sm"
            >
              {/* Trigger */}
              <button
                className="w-full text-left py-4 font-semibold text-gray-900 hover:no-underline flex justify-between items-center focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                {faq.question}
                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Content */}
              {openIndex === index && (
                <div className="text-gray-600 pb-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
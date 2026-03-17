import React from 'react';
import './Faq.css';


const faqData = [
  { id: 1, question: "What is Netflix?" },
  { id: 2, question: "How much does Netflix cost?" },
  { id: 3, question: "Where can I watch?" },
  { id: 4, question: "How do I cancel?" },
  { id: 5, question: "What can I watch on Netflix?" },
  { id: 6, question: "Is Netflix good for kids?" }
];



const Faq = () => {
  return (
    <section className="faq_section">
      <h2 className="faq_header">Frequently Asked Questions</h2>
      
      <div className="faq_list">
        {faqData.map((item) => (
          <div className="faq_item" key={item.id}>
            <button className="faq_question">
              {item.question}
              <span className="faq_icon">+</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
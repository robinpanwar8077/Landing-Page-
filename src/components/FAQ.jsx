import React from 'react'
import '../Features.css'

function FAQ() {
    const faq = [
        {
          question: "Is this product compatible with my existing accessories?",
          answer: "Yes, this product is compatible with most standard accessories."
        },
        {
          question: "What is the warranty for this product?",
          answer: "This product comes with a one-year manufacturer's warranty."
        },
        {
          question: "Can I upgrade the storage capacity of this device?",
          answer: "No, the storage capacity of this device is not user-upgradable."
        },
        {
          question: "Is this product available for international shipping?",
          answer: "Yes, we offer international shipping for this product."
        },
        {
          question: "What is the expected battery life of this device?",
          answer: "The battery can last up to 12 hours on a single charge."
        },
        {
          question: "Is this product water-resistant?",
          answer: "Yes, this product has an IP67 water-resistant rating."
        },
        {
          question: "Does it come with a user manual?",
          answer: "Yes, a user manual is included in the package."
        },
        {
          question: "What operating system does this product use?",
          answer: "This product runs on the latest version of the XYZ operating system."
        },
        {
          question: "Can I return the product if I'm not satisfied?",
          answer: "Yes, we have a 30-day return policy for this product."
        },
        {
          question: "Are software updates available for this product?",
          answer: "Yes, regular software updates are provided for improved performance."
        }
      ];
  return (
    <div><div className="product">
    <h3 className="faq-heading">Frequently Asked Questions:</h3>
    <ul className="faq-list">
      {faq.map((item, index) => (
        <li key={index}>
          <strong>Q: {item.question}</strong>
          <br />
          A: {item.answer}
        </li>
      ))}
    </ul>
  </div></div>
  )
}

export default FAQ
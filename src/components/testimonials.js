import React from 'react';
import "./testimonials.css"
const Testimonials = ({ data }) => {
  return (
    <div>
      <h1>Things people say</h1>
      <ul>
        {data.map((testimonial, index) => (
          <li key={index} style={{listStyle:"none", textAlign: index % 2 === 0 ? 'left' : 'right'}}>
            <h2>{testimonial.name}</h2>
            <p>{testimonial.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;

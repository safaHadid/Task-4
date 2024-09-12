import React from "react";
import { Card } from "react-bootstrap";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialsCard = ({ testimonial }) => {
  return (
    <div>
      <Card
        className="mb-5 p-1 shadow-sm bg-secondary-subtle border-0"
        style={{ minHeight: "230px", minWidth: "200px" }}
      >
        <Card.Body className="position-relative">
          <blockquote className="blockquote mb-4">
            <p className="m-2 fs-6 ">
              <FaQuoteLeft className="custom-color mr-3" />
              {testimonial.text}
              <FaQuoteRight className="custom-color mr-3" />
            </p>
          </blockquote>
          <div className="position-absolute top-10 start-10">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-circle me-3 border border-5 border-white circle-rounded"
              style={{ width: "80px", height: "80px" }}
            />
            <p className="mb-0">{testimonial.name}</p>
            <p className="text-muted custom-f-s">{testimonial.role}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TestimonialsCard;

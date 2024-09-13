import React from 'react';
import Link from 'next/link';
import { markdownify } from '@lib/utils/textConverter';

const Cta = ({ data }) => {
  if (!data) {
    return null; // Return null if data is not provided
  }

  const { title, content, button } = data;

  return (
    <section className="cta-section">
      <div className="container">
        <div className="text-center">
          <h2>{title}</h2>
          <p className="mt-6">{markdownify(content)}</p>
          {button && button.enable && (
            <Link
              className="btn btn-primary mt-4"
              href={button.link}
              rel={button.rel}
              aria-label={button.label}
            >
              {button.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cta;

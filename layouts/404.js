import { useEffect } from 'react';
import { markdownify } from "@lib/utils/textConverter";
import Head from 'next/head';

const NotFound = ({ data }) => {
  const { frontmatter, description } = data;

  useEffect(() => {
    const timer = setTimeout(() => {
      window.history.back();
    }, 10000);

    return () => { clearTimeout(timer); };
  }, []);

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        
        {/* Add more custom meta tags here */}
      </Head>
      <section className="section">
        <div className="container">
          <div className="flex h-[40vh] items-center justify-center">
            <div className="text-center">
              <h1 className="mb-8">{frontmatter.title}</h1>
              <h1 className="mb-8">{frontmatter.subtitle}</h1>
              <h4 className='mb-8'>{frontmatter.description}</h4>
              <h5 className='mb-4'>{frontmatter.description1}</h5>
              {markdownify(description, "div", "content")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;

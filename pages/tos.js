import Base from "@layouts/Baseof";
import { markdownify } from "@lib/utils/textConverter";

const Tos = () => {
  const terms = [
    {
      title: "Term 1",
      content: "This is the content for term 1."
    },
    {
      title: "Term 2",
      content: "This is the content for term 2."
    },
    {
      title: "Term 3",
      content: "This is the content for term 3."
    },
    {
      title: "Term 4",
      content: "This is the content for term 4."
    }
  ];

  return (
    <Base title="Terms of Service">
      <section className="section pb-[50px]" aria-label="Terms of Service Page">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold pb-[30px]" aria-label="Terms of Service">Terms of Service</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {terms.map((term, index) => (
                  <div key={index} className="p-6 border rounded-lg shadow-md">
                    <h2 className="font-bold mb-4">{term.title}</h2>
                    <p>{markdownify(term.content)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Tos;
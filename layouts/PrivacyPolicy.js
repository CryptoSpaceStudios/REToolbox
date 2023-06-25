import { markdownify } from "@lib/utils/textConverter";

function Privacy({ data }) {
  const { frontmatter } = data;
  const { title, heading, privacies } = frontmatter;
  return (
    <section className="section">
      <div className="container">
      <div>
        <div className="mb-6">
          {markdownify(title, "h1", "text-center font-normal")}
        </div>
        <div className="mt-6">
          {markdownify(heading, "h2", "text-center font-normal")}
        </div>
      </div>
        
        
        <div className="section row  -mt-6">
          {privacies.map((privacypolicy, index) => (
            <div key={index} className="col-12 mt-6 md:col-6">
              <div className="p-12  shadow">
                <div className="faq-head relative">
                  {markdownify(privacypolicy.title, "h4")}
                </div>
                {markdownify(privacypolicy.answer, "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Privacy;

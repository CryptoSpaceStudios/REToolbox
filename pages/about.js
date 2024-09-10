import Base from "@layouts/Baseof";
import { markdownify } from "@lib/utils/textConverter";

const About = () => {
  return (
    <Base title="About">
      <section className="section pb-[50px]" aria-label="About Page">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold pb-[30px]" aria-label="About Us">About Us</h1>
              <p className="mt-4 pb-[30px]">
                {markdownify("Welcome to our website. We are dedicated to providing the best services to our customers.")}
              </p>
              <p className="mt-4 pb-[30px]">
                {markdownify("Our mission is to deliver high-quality solutions that meet your needs.")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default About;
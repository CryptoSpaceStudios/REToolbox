import Base from "@layouts/Baseof";
import { markdownify } from "@lib/utils/textConverter";

const Donate = () => {
  return (
    <Base title="Donate">
      <section className="section pb-[50px]" aria-label="Donate Page">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold pb-[30px]" aria-label="Donate">Donate</h1>
              <p className="mt-4 pb-[30px]">
                {markdownify("Your support helps us to keep going. Please consider making a donation.")}
              </p>
              <a
                className="btn btn-primary mt-4"
                href="https://www.paypal.com/donate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate Now
              </a>
              <h2 className="font-primary font-bold pt-[30px]" aria-label="Donate with Cryptocurrency">Donate with Cryptocurrency</h2>
              <p className="mt-4 pb-[30px]">
                {markdownify("We also accept donations in various cryptocurrencies. Please use the addresses below to donate.")}
              </p>
              <div className="crypto-donations">
                <p><strong>Bitcoin (BTC):</strong> 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
                <p><strong>Ethereum (ETH):</strong> 0x32Be343B94f860124dC4fEe278FDCBD38C102D88</p>
                <p><strong>Litecoin (LTC):</strong> LZ1Q2W3E4R5T6Y7U8I9O0P1Q2W3E4R5T6Y7U8I9O</p>
                {/* Add more cryptocurrencies as needed */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Donate;
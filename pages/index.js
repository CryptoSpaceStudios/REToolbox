import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";
import Tooltip from '@mui/material/Tooltip'

const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title, description, keywords, author, url, twitterHandle } = config.site;

  return (
    <Base title={title} description={description} keywords={keywords} author={author} url={url} twitterHandle={twitterHandle}>
      {/* Banner */}
      <section className="section pb-[50px]" aria-label="Main Page Banner">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold pb-[30px] dark:text-white" aria-label={banner.title}>{banner.title}</h1>
              <h2 className="font-primary font-bold pb-[30px] dark:text-white" aria-label={banner.heading}>{markdownify(banner.heading)}</h2>
              <h4 className="mt-4 pb-[30px] dark:text-white">{markdownify(banner.content)}</h4>
              {banner.button.enable && banner.button.link && (
                <Link
                  className="btn btn-primary mt-4"
                  href={banner.button.link}
                  rel={banner.button.rel}
                  aria-label={banner.button.label}
                >
                  {banner.button.label}
                </Link>
              )}
              <Image
                className="mx-auto mt-12 clickityclack"
                src={banner.image}
                width={750}
                height={390}
                alt="banner image"
                priority
                style={{ width: 'auto', height: '390px' }} // Ensure aspect ratio is maintained
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section light:bg-theme-light dark:bg-theme-dark" aria-label="Featured Tools">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-4 dark:text-white" aria-label={feature.title}>{markdownify(feature.title)}</h2>
            <h3 className="mb-8 dark:text-white" aria-label={feature.heading}>{markdownify(feature.heading)}</h3>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature.features.map((item, i) => (
              <div
                onClick={() => { if (item.link) location.href = item.link; }}
                className="feature-card rounded-xl bg-white p-5 pb-8 text-center text-dark"
                key={`feature-${i}`}
                aria-label={item.name}
              >
                {item.icon && (
                  <Image
                    className="mx-auto clickityclack"
                    href={item.link}
                    src={item.icon}
                    width={30}
                    height={30}
                    alt={item.name}
                    title={item.name}
                    style={{ width: '150px', height: 'auto' }} // Ensure aspect ratio is maintained
                  />
                )}
                <div className="mt-4 text-dark">
                  <h3 className="h5 dark:text-dark">{item.name}</h3>
                  <p className="mt-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            key={`service-${index}`}
            className={`section ${isOdd && "light:bg-theme-light dark:bg-theme-dark"}`}
            aria-label={`Service ${index + 1}`}
          >
            <div className="container">
              <div className="items-center gap-8 md:grid md:grid-cols-2">
                {/* Carousel */}
                <div className={`service-carousel ${!isOdd && "md:order-2"}`}>
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={
                      service.images.length > 1 ? { clickable: true } : false
                    }
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    init={service?.images > 1 ? false : true}
                  >
                    {/* Slides */}
                    {service?.images.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <Image className="clickityclack" src={slide} alt="RE Toolbox" width={600} height={500} style={{ width: 'auto', height: 'auto' }} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div
                  className={`service-content mt-5 md:mt-0 ${
                    !isOdd && "md:order-1"
                  } `}
                >
                  <h2 className="font-bold leading-[40px] dark:text-contrast light:text-dark">{service?.title}</h2>
                  <p className="mt-4 mb-2 dark:text-contrast light:text-dark">{service?.content}</p>
                  {service.button.enable && service.button.link && (
                    <Link
                      href={service?.button.link}
                      className="cta-link inline-flex items-center dark:text-contrast light:text-dark"
                      aria-label={service?.button.label}
                    >
                      {service?.button.label}
                      <Image
                        className="ml-1"
                        src="/images/arrow-right.svg"
                        width={18}
                        height={14}
                        alt="arrow"
                        style={{ width: '50px', height: 'auto' }} // Ensure aspect ratio is maintained
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}


    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;

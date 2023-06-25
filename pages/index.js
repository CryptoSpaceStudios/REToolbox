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
  const { title } = config.site;

  return (
    <Base title={title}>
      {/* Banner */}
      <section className="section pb-[50px]" alt="Main Page" aria-label="Main Page">
        <div className="container" alt="Main Page" aria-label="Main Page">
          <div className="row text-center"  alt="Main Page" aria-label="Main Page" aria-description="Main Page">
            <div className="mx-auto lg:col-10" alt="Main Page" aria-label="Main Page" aria-description="Main Page">
              <h1 className="font-primary font-bold pb-[30px]" alt={banner.title} aria-label={banner.title}>{banner.title}</h1>
              <h2 className="font-primary font-bold pb-[30px]" alt={banner.heading} aria-label={banner.heading} >{markdownify(banner.heading)}</h2>
              <p className="mt-4 pb-[30px]" alt="SubHeading" aria-label="SubHeading" aria-description="SubHeading" >{markdownify(banner.content)}</p>
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-4"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
              <Image
                className="mx-auto mt-12"
                src={banner.image}
                width={750}
                height={390}
                alt="banner image"
                aria-label="banner image"
                aria-description="banner image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-theme-light" alt='Featured Tools' aria-label='Featured Tools'>
        <div className="container" alt='Featured Tools' aria-label='Featured Tools' aria-description='Featured Tools' >
          <div className="text-center">
            <h2 alt={feature.title} aria-label={feature.title} >{markdownify(feature.title)}</h2>
            
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature.features.map((item, i) => (
              <div
                onClick={() => { location.href = item.link; }}
                className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                key={`feature-${i}`}
                alt={item.name}
                aria-label={item.name}
                aria-description={item.name}
                data-tooltip={item.name}
                id={item.name}
                
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    href={item.link}
                    src={item.icon}
                    width={30}
                    height={30}
                    alt={item.name}
                    title={item.name}
                    aria-label={item.name}
                  />
                )}
                <div className="mt-4" alt={item.name} title={item.name} aria-label={item.name} aria-description={item.name}>
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* services */}
      {services.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            key={`service-${index}`}
            className={`section ${isOdd && "bg-theme-light"}`}
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
                        <Image src={slide} alt="" width={600} height={500} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div
                  className={`service-content mt-5 md:mt-0 ${
                    !isOdd && "md:order-1"
                  }`}
                >
                  <h2 className="font-bold leading-[40px]">{service?.title}</h2>
                  <p className="mt-4 mb-2">{service?.content}</p>
                  {service.button.enable && (
                    <Link
                      href={service?.button.link}
                      className="cta-link inline-flex items-center text-primary"
                    >
                      {service?.button.label}
                      <Image
                        className="ml-1"
                        src="/images/arrow-right.svg"
                        width={18}
                        height={14}
                        alt="arrow"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* workflow */}
      <section className="section pb-0">
        <div className="mb-8 text-center">
          {markdownify(
            workflow.title,
            "h2",
            "mx-auto max-w-[400px] font-bold leading-[44px]"
          )}
          {markdownify(workflow.description, "p", "mt-3")}
        </div>
        <Image
          src={workflow.image}
          alt="workflow image"
          width={1920}
          height={296}
        />
      </section>

      {/* Cta */}
      <Cta cta={call_to_action} />
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

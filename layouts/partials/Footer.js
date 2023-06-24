import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid"; // Importing Grid

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer className="section bg-theme-light pb-0">
      <div className="container">
        {/* footer menu */}
        <Grid container direction="row" justifyContent="space-between" alignItems="center" wrap="wrap-reverse" style={{ width: '100%' }}>
          {/* support section */}
          <Grid item xs={12} sm={12} md={4}>
            {footer.map((col) => {
              return (
                <div className="mb-12" key={col.name}>
                  {markdownify(col.name, "h2", "h4")}
                  <ul className="mt-6">
                    {col?.menu.map((item) => (
                      <li className="mb-1" key={item.text}>
                        <Link href={item.url} rel="" alt={item.text} aria-label={item.text} title={item.text}>
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </Grid>
          {/* social icons */}
          <Grid item xs={12} sm={12} md={4}>
            <Social source={social} alt={social} aria-label={social} title={social} className="social-icons mb-8" />
          </Grid>
          {/* logo section */}
          <Grid item xs={12} sm={12} md={4}>
            <Link href="/" 
                alt={config.site.logo_text}
                aria-label={config.site.logo_text}
                title={config.site.logo_text}
                >
              <Image
                src={config.site.logo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt={config.site.logo_text}
                aria-label={config.site.logo_text}
                title={config.site.logo_text}
              />
            </Link>
            {markdownify(footer_content, "p", "mt-3 mb-6")}
          </Grid>
        </Grid>
        {/* copyright */}
        <div className="border-t border-border py-6">
          {markdownify(copyright, "p", "text-sm text-center")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

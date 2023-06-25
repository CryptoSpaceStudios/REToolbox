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
      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>

        {/* footer menu */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Grid container direction="row" style={{ width: '100%' }}>

            {/* support section */}
            <Grid item xs={12} sm={12} md={4} style={{ display: 'flex', justifyContent: 'flex-start' }}>
              {footer.map((col) => {
                return (

                  <div key={col.name}>

                    <ul>
                      {col?.menu.map((item) => (
                        <li key={item.text}>
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
            <Grid item xs={12} sm={12} md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Social source={social} alt={social} aria-label={social} title={social} className="social-icons" />
            </Grid>



            {/* logo section */}
            <Grid item xs={12} sm={12} md={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
              
            </Grid>
            
          </Grid>
        </div>


        {/* copyright */}
        <div className="border-t border-border py-6 text-sm text-center">
          ©{new Date().getFullYear()}{" "}
          {markdownify(config.site.logo_text)}
        </div>


      </div>
    </footer>
  );
};

export default Footer;

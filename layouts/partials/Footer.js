import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer className="section bg-theme-light pb-0" alt="Footer" aria-label="Footer" aria-description="Footer">
      <div className="container" style={{ display: 'flex', flexDirection: 'column' }} alt="Footer" aria-label="Footer" aria-description="Footer">

        {/* footer menu */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} alt="Footer" aria-label="Footer" aria-description="Footer">
          <Grid container direction="row" style={{ width: '100%' }} alt="Footer Grid" aria-label="Footer Grid" aria-description="Footer Grid">

            {/* support section */}
            <Grid item xs={12} sm={4} md={4}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} alt="Footer Link" aria-label="Footer Link" aria-description="Footer Link">
                {footer.map((col) => {
                  return (
                    <div key={col.name}  alt="Footer Link" aria-label="Footer Link" aria-description="Footer Link">
                      <ul>
                        {col?.menu.map((item) => (
                          <li key={item.text}>
                          <Link 
                            className={`support-links ${ router.asPath === item.url ? "nav-link-active" : "" }`}
                            href={item.url} 
                            rel="" 
                            alt={item.text} 
                            aria-label={item.text} 
                            aria-description={item.text} 
                            title={item.text}>
                            {item.text}
                           
                          </Link>

                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </Grid>
            {/* social icons */}
            <Grid item xs={12} sm={4} md={4}  style={{marginTop: '1em'}}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} alt="social-icons" aria-label="social-icons" aria-description="social-icons" title="social-icons">
                <Social source={social} className="social-icons" alt="social-icons" aria-label="social-icons" aria-description="social-icons" title="social-icons" />
              </div>
            </Grid>

            {/* logo section */}
            <Grid item xs={12} sm={4} md={4}  style={{marginTop: '1em'}}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href="/"
                      alt={config.site.logo_text}
                      aria-label={config.site.logo_text}
                      aria-description={config.site.logo_text}
                      title={config.site.logo_text}
                >
                  <Image
                    src={config.site.logo}
                    width={config.site.logo_width}
                    height={config.site.logo_height}
                    alt={config.site.logo_text}
                    aria-label={config.site.logo_text}
                    aria-description={config.site.logo_text}
                    title={config.site.logo_text}
                  />
                </Link>
              </div>
            </Grid>
            
          </Grid>
        </div>

        {/* copyright */}
        <Grid container justifyContent="center" alignItems="center" style={{marginTop: '1em'}}>
            <Grid item xs={12}>
                <div className="border-t border-border py-6 text-sm text-center" alt="CopyRight" aria-label="CopyRight" aria-description="CopyRight">
                  ©{new Date().getFullYear()}{" "} {markdownify(config.site.logo_text)}
                </div>
            </Grid>
        </Grid>

      </div>
    </footer>
  );
};

export default Footer;

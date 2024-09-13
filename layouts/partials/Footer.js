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
    <footer className="section bg-theme-light dark:bg-theme-dark pb-0" aria-label="Footer">
      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>

        {/* footer menu */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Grid container direction="row" style={{ width: '100%' }} aria-label="Footer Grid">

            {/* support section */}
            <Grid item xs={12} sm={4} md={4} >
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} aria-label="Support Section">
                {footer.map((col) => {
                  return (
                    <div key={col.name}>
                      <ul className="" aria-label={`Footer section ${col.name}`}>
                        {col?.menu.map((item) => (
                          <li key={item.text} className="mb-5">
                            {item.url ? (
                              <Link 
                                className={`support-links ${ router.asPath === item.url ? "support-links-active" : "" }`}
                                href={item.url} 
                                rel=""
                                aria-label={`Link to ${item.text}`} 
                              >
                                {item.text}
                              </Link>
                            ) : (
                              <span>{item.text}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </Grid>

            {/* social icons */}
            <Grid item xs={12} sm={4} md={4}  style={{marginTop: '2em', marginBottom: '2em'}}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} aria-label="Social icons">
                <Social source={social} className="social-icons" aria-label="Social icons"/>
              </div>
            </Grid>

            {/* logo section */}
            <Grid item xs={12} sm={4} md={4}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} aria-label="Logo section">
                <Link 
                  href="/"
                  aria-label={`Link to homepage via ${config.site.logo_text}`}
                >
                  <Image
                    src={config.site.logo}
                    width={config.site.logo_width}
                    height={config.site.logo_height}
                    alt={config.site.logo_text}
                    aria-label={config.site.logo_text}
                    style={{ width: 'auto', height: 'auto' }} // Ensure aspect ratio is maintained
                  />
                </Link>
              </div>
            </Grid>
            
          </Grid>
        </div>

        {/* copyright */}
        <Grid container justifyContent="center" alignItems="center" style={{marginTop: '1em'}}>
            <Grid item xs={12}>
                <div className="border-t border-border py-6 text-sm text-center dark:text-white" aria-label="Copyright information">
                  ©{new Date().getFullYear()}{" "} {markdownify(config.site.logo_text)}
                </div>
            </Grid>
        </Grid>

      </div>
    </footer>
  );
};

export default Footer;

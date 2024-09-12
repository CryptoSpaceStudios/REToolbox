import Image from "next/image";
import config from "@config/config.json";

const Logo = ({ src }) => {
  const logoSrc = src || config.site.logo;
  const logoAlt = config.site.title || "Logo";

  return (
    <div className="logo">
      {logoSrc ? (
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={config.site.logo_width}
          height={config.site.logo_height}
        />
      ) : (
        <span>{logoAlt}</span>
      )}
    </div>
  );
};

export default Logo;

import {
  IoCall,
  IoGlobeOutline,
  IoLocation,
  IoLogoBehance,
  IoLogoBitbucket,
  IoLogoBitcoin,
  IoLogoCodepen,
  IoLogoDiscord,
  IoLogoDribbble,
  IoLogoFacebook,
  IoLogoFoursquare,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoPinterest,
  IoLogoReddit,
  IoLogoRss,
  IoLogoSkype,
  IoLogoSlack,
  IoLogoSnapchat,
  IoLogoSoundcloud,
  IoLogoTiktok,
  IoLogoTumblr,
  IoLogoTwitter,
  IoLogoVenmo,
  IoLogoVercel,
  IoLogoVimeo,
  IoLogoVk,
  IoLogoWhatsapp,
  IoLogoWordpress,
  IoLogoYoutube,
  IoMail,
} from "react-icons/io5";

import {
  FaEthereum
} from "react-icons/fa6";

import {
  SiLitecoin 
} from "react-icons/si";

const Social = ({ source, className }) => {
  const {
    address,
    behance,
    bitbucket,
    bitcoin,
    codepen,
    discord,
    dribbble,
    email,
    ethereum,
    facebook,
    foursquare,
    github,
    gitlab,
    instagram,
    linkedin,
    litecoin,
    medium,
    phone,
    pinterest,
    reddit,
    rss,
    skype,
    slack,
    snapchat,
    soundcloud,
    tiktok,
    tumblr,
    twitter,
    venmo,
    vercel,
    vimeo,
    vk,
    website,
    whatsapp,
    wordpress,
    youtube,
    
  } = source;
  return (
    <ul className={className}>
      {facebook && (
        <li className="inline-block">
          <a
            alt="Follow Me on Facebook"
            title="Follow Me on Facebook"
            aria-label="Follow Me on Facebook"
            href={facebook}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoFacebook />
          </a>
        </li>
      )}
      {twitter && (
        <li className="inline-block">
          <a
            alt="Follow Me on Twitter"
            title="Follow Me on Twitter"
            aria-label="Follow Me on Twitter"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoTwitter />
          </a>
        </li>
      )}
      {instagram && (
        <li className="inline-block">
          <a
            alt="Follow Me on Instagram"
            title="Follow Me on Instagram"
            aria-label="Follow Me on Instagram"
            href={instagram}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoInstagram />
          </a>
        </li>
      )}
      {youtube && (
        <li className="inline-block">
          <a
            alt="Follow Me on Youtube"
            title="Follow Me on Youtube"
            aria-label="Follow Me on Youtube"
            href={youtube}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoYoutube />
          </a>
        </li>
      )}
      {linkedin && (
        <li className="inline-block">
          <a
            alt="Follow Me on Linkedin"
            title="Follow Me on Linkedin"
            aria-label="Follow Me on Linkedin"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoLinkedin />
          </a>
        </li>
      )}
      {github && (
        <li className="inline-block">
          <a
            alt="Follow Me on Github"
            title="Follow Me on Github"
            aria-label="Follow Me on Github"
            href={github}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoGithub />
          </a>
        </li>
      )}
      {gitlab && (
        <li className="inline-block">
          <a
            alt="Follow Me on Gitlab"
            title="Follow Me on Gitlab"
            aria-label="Follow Me on Gitlab"
            href={gitlab}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoGitlab />
          </a>
        </li>
      )}
      {discord && (
        <li className="inline-block">
          <a
            alt="Follow Me on Discord"
            title="Follow Me on Discord"
            aria-label="Follow Me on Discord"
            href={discord}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoDiscord />
          </a>
        </li>
      )}
      {slack && (
        <li className="inline-block">
          <a
            alt="Follow Me on Slack"
            title="Follow Me on Slack"
            aria-label="Follow Me on Slack"
            href={slack}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoSlack />
          </a>
        </li>
      )}
      {medium && (
        <li className="inline-block">
          <a
            alt="Follow Me on Medium"
            title="Follow Me on Medium"
            aria-label="Follow Me on Medium"
            href={medium}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoMedium />
          </a>
        </li>
      )}
      {codepen && (
        <li className="inline-block">
          <a
            alt="Follow Me on Codepen"
            title="Follow Me on Codepen"
            aria-label="Follow Me on Codepen"
            href={codepen}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoCodepen />
          </a>
        </li>
      )}
      {bitbucket && (
        <li className="inline-block">
          <a
            alt="Follow Me on Bitbucket"
            title="Follow Me on Bitbucket"
            aria-label="Follow Me on Bitbucket"
            href={bitbucket}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoBitbucket />
          </a>
        </li>
      )}
      {dribbble && (
        <li className="inline-block">
          <a
            alt="Follow Me on Driibbble"
            title="Follow Me on Dribbble"
            aria-label="Follow Me on Dribbble"
            href={dribbble}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoDribbble />
          </a>
        </li>
      )}
      {behance && (
        <li className="inline-block">
          <a
            alt="Follow Me on Behance"
            title="Follow Me on Behance"
            aria-label="Follow Me on Behance"
            href={behance}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoBehance />
          </a>
        </li>
      )}
      {pinterest && (
        <li className="inline-block">
          <a
            alt="Follow Me on Pinterest"
            title="Follow Me on Pinterest"
            aria-label="Follow Me on Pinterest"
            href={pinterest}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoPinterest />
          </a>
        </li>
      )}
      {soundcloud && (
        <li className="inline-block">
          <a
            alt="Follow Me on Soundcloud"
            title="Follow Me on Soundcloud"
            aria-label="Follow Me on Soundcloud"
            href={soundcloud}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoSoundcloud />
          </a>
        </li>
      )}
      {tumblr && (
        <li className="inline-block">
          <a
            alt="Follow Me on Tumblr"
            title="Follow Me on Tumblr"
            aria-label="Follow Me on Tumblr"
            href={tumblr}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoTumblr />
          </a>
        </li>
      )}
      {reddit && (
        <li className="inline-block">
          <a
            alt="Follow Me on Reddit"
            title="Follow Me on Reddit"
            aria-label="Follow Me on Reddit"
            href={reddit}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoReddit />
          </a>
        </li>
      )}
      {vk && (
        <li className="inline-block">
          <a
            alt="Follow Me on VK"
            title="Follow Me on VK"
            aria-label="Follow Me on VK"
            href={vk}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoVk />
          </a>
        </li>
      )}
      {whatsapp && (
        <li className="inline-block">
          <a
            alt="Follow Me on Whatsapp"
            title="Follow Me on Whatsapp"
            aria-label="Follow Me on Whatsapp"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoWhatsapp />
          </a>
        </li>
      )}
      {snapchat && (
        <li className="inline-block">
          <a
            alt="Follow Me on Snapchat"
            title="Follow Me on Snapchat"
            aria-label="Follow Me on Snapchat"
            href={snapchat}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoSnapchat />
          </a>
        </li>
      )}

      {bitcoin && (
        <li className="inline-block">
          <a
            alt="Send Bitcoin"
            title="Send Bitcoin"
            aria-label="Send Bitcoin"
            href={bitcoin}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoBitcoin />
          </a>
        </li>
      )}

      {venmo && (
        <li className="inline-block">
          <a
            alt="Send Money with Venmo"
            title="Send Money with Venmo"
            aria-label="Send Money with Venmo"
            href={venmo}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoVenmo />
          </a>
        </li>
      )}

      {vercel && (
        <li className="inline-block">
          <a
            alt="Install this code on Vercel"
            title="Install this code on Vercel"
            aria-label="Install this code on Vercel"
            href={vercel}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoVercel />
          </a>
        </li>
      )}


      {vimeo && (
        <li className="inline-block">
          <a
            alt="Follow Me on Wordpress"
            title="Follow Me on Wordpress"
            aria-label="Follow Me on Wordpress"
            href={wordpress}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoVimeo />
          </a>
        </li>
      )}

      {wordpress && (
        <li className="inline-block">
          <a
            alt="Follow Me on Vimeo"
            title="Follow Me on Vimeo"
            aria-label="Follow Me on Vimeo"
            href={vimeo}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoWordpress />
          </a>
        </li>
      )}

      {ethereum && (
        <li className="inline-block">
          <a
            alt="Send Ethereum"
            title="Send Ethereum"
            aria-label="Send Ethereum"
            href={ethereum}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaEthereum />
          </a>
        </li>
      )}

      {litecoin && (
        <li className="inline-block">
          <a
            alt="Send Litecoin"
            title="Send Litecoin"
            aria-label="Send Litecoin"
            href={litecoin}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <SiLitecoin />
          </a>
        </li>
      )}

      {tiktok && (
        <li className="inline-block">
          <a
            alt="Follow Me on Tiktok"
            title="Follow Me on Tiktok"
            aria-label="Follow Me on Tiktok"
            href={tiktok}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoTiktok />
          </a>
        </li>
      )}
      {foursquare && (
        <li className="inline-block">
          <a
            alt="Follow Me on Foursquare"
            title="Follow Me on Foursquare"
            aria-label="Follow Me on Foursquare"
            href={foursquare}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoFoursquare />
          </a>
        </li>
      )}
      {skype && (
        <li className="inline-block">
          <a
            alt="Follow Me on Skype"
            title="Follow Me on Skype"
            aria-label="Follow Me on Skype"
            href={skype}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoSkype />
          </a>
        </li>
      )}
      {website && (
        <li className="inline-block">
          <a
            alt="Check out my Website"
            title="Check out my Website"
            aria-label="Check out my Website"
            href={website}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoGlobeOutline />
          </a>
        </li>
      )}
      {rss && (
        <li className="inline-block">
          <a
            alt="Subscribe to my RSS Feed"
            title="Subscribe to my RSS Feed"
            aria-label="Subscribe to my RSS Feed"
            href={rss}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLogoRss />
          </a>
        </li>
      )}
      {email && (
        <li className="inline-block">
          <a alt="Send me an Email"
            title="Send me an Email"
            aria-label="Send me an Email" 
            href={`mailto:${email}`}>
            <IoMail />
          </a>
        </li>
      )}
      {phone && (
        <li className="inline-block">
          <a alt="Call Us"
            title="Call Us"
            aria-label="Call Us" 
            href={`tel:${phone}`}>
            <IoCall />
          </a>
        </li>
      )}
      {address && (
        <li className="inline-block">
          <a
            alt="Our Location"
            title="Our Location"
            aria-label="Our Location"
            href={address}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IoLocation />
          </a>
        </li>
      )}
    </ul>
  );
};

export default Social;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Image src="/images/logo.png" alt="Company Logo" width={150} height={50} />
          </div>
          <div className="footer-links">
            <Link href="/about">
              <a>About Us</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </div>
          <div className="footer-social">
            <Link href="https://facebook.com">
              <a>
                <Image src="/icons/facebook.png" alt="Facebook icon" width={24} height={24} />
              </a>
            </Link>
            <Link href="https://twitter.com">
              <a>
                <Image src="/icons/twitter.png" alt="Twitter icon" width={24} height={24} />
              </a>
            </Link>
            <Link href="https://instagram.com">
              <a>
                <Image src="/icons/instagram.png" alt="Instagram icon" width={24} height={24} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
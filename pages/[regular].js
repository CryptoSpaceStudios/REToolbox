import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import Faq from "@layouts/Faq";
import Mao from "@layouts/Mao";
import Pricing from "@layouts/Pricing";
import SellerNetCalc from "@layouts/SellerNetCalc";
import Zillowfsbo from "@layouts/ZillowFsbo";
import Privacy from "@layouts/PrivacyPolicy";
import Roi from "@layouts/Roi";
import SubtoCalc from "@layouts/SubToWrap";
import CensusData from "@layouts/CensusData";
import { getRegularPage, getSinglePage } from "@lib/contentParser";
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';

const RegularPage = ({ frontmatter, mdxContent }) => {
  const router = useRouter();
  const { regular } = router.query;

  // Handle specific pages
  if (regular === 'mao') {
    return (
      <Base title={frontmatter.title} description={frontmatter.description}>
        <Mao data={{ frontmatter, mdxContent }} />
      </Base>
    );
  }

  if (regular === 'roi') {
    return (
      <Base title={frontmatter.title} description={frontmatter.description}>
        <Roi data={{ frontmatter, mdxContent }} />
      </Base>
    );
  }

  if (regular === 'sellernetcalc') {
    return (
      <Base title={frontmatter.title} description={frontmatter.description}>
        <SellerNetCalc data={{ frontmatter, mdxContent }} />
      </Base>
    );
  }

  if (regular === 'subtocalc') {
    return (
      <Base title={frontmatter.title} description={frontmatter.description}>
        <SubtoCalc data={{ frontmatter, mdxContent }} />
      </Base>
    );
  }

  if (regular === 'contact') {
    return (
      <Base title={frontmatter.title} description={frontmatter.description}>
        <Contact data={{ frontmatter, mdxContent }} />
      </Base>
    );
  }

  // Handle other dynamic paths
  return (
    <Base title={frontmatter.title} description={frontmatter.description}>
      <MDXRemote {...mdxContent} />
    </Base>
  );
};

export const getStaticProps = async ({ params }) => {
  const { regular } = params;
  const page = await getRegularPage(regular);
  const { frontmatter, mdxContent } = page;

  return {
    props: {
      frontmatter,
      mdxContent,
    },
  };
};

export const getStaticPaths = async () => {
  const pages = await getSinglePage('content');
  const paths = pages.map((page) => ({
    params: { regular: page.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default RegularPage;

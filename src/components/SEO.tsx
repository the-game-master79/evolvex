import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export default function SEO({
  title = "EvolveX | Software Development Agency",
  description = "We craft cutting-edge software solutions that drive innovation and business growth. Expert developers in AI, blockchain, and enterprise solutions.",
  keywords = "software development, AI solutions, blockchain, enterprise software, digital transformation, web development, mobile apps",
  ogImage = "https://ddlppflcekemmdluepik.supabase.co/storage/v1/object/public/images-landing//evolve-x-logo.png",
  ogUrl = "https://evolvex.one"
}: SEOProps) {
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="EvolveX" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.ico" />
    </Helmet>
  );
}

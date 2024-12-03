import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  name?: string;
}

const SEO = ({ title, description, type = "website", name = "SendVoy" }: SEOProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    name: name,
    description: description,
    url: window.location.href,
    sameAs: [
      "https://facebook.com/sendvoy",
      "https://twitter.com/sendvoy",
      "https://linkedin.com/company/sendvoy"
    ]
  };

  return (
    <Helmet>
      <title>{title} | SendVoy - Logistics Solutions</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | SendVoy`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={window.location.href} />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
import { ENV } from "@/config";

const Branding = () => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const env = process.env.NODE_ENV;

  if (domain) {
    return (
      <link
        rel="stylesheet"
        href={env === ENV.prod ? `${domain}.min.css` : `${domain}.css`}
        precedence="default"
      />
    );
  }

  return null;
};

export default Branding;

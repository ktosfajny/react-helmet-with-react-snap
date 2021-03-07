import {Helmet} from "react-helmet";

// ten komponent jest takim jakby wrapperem który jak zostanie owinięty wokól np jakiegoś page to można ustawić temu page osobne meta tagi

const hostname = `https://address.pl`;

const HelmetDecorator = ({title, description, imageUrl,imageAlt }) => {
  return ( 
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={hostname +  imageUrl} />
        <meta property="og:url"  content={hostname + window.location.pathname + window.location.search} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image:alt" content={imageAlt} /> 
      </Helmet>
    </>
   );
}
 
export default HelmetDecorator;


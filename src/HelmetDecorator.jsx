import {Helmet} from "react-helmet";

// ten komponent jest takim jakby wrapperem który jak zostanie owinięty wokól np jakiegoś page to można ustawić temu page osobne meta tagi

const HelmetDecorator = ({title, description}) => {
  return ( 
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </>
   );
}
 
export default HelmetDecorator;


import React from "react";
import ContentLoader from "react-content-loader";

const CardItemPreloader = () => (
  <ContentLoader
    speed={2}
    width={255}
    height={455}
    viewBox="0 0 255 455"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="mb-3"
  >
    <circle cx="127" cy="127" r="127" />
    <rect x="6" y="274" rx="0" ry="0" width="240" height="63" />
    <rect x="2" y="356" rx="0" ry="0" width="118" height="32" />
    <rect x="198" y="356" rx="0" ry="0" width="57" height="32" />
    <rect x="4" y="408" rx="0" ry="0" width="122" height="40" />
    <rect x="165" y="408" rx="8" ry="8" width="89" height="44" />
  </ContentLoader>
);

export default CardItemPreloader;
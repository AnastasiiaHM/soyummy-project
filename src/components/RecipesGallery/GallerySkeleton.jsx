import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = props => (
  <ContentLoader
    width={1440}
    height={996}
    viewBox="0 0 1240 996"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="50" rx="10" ry="10" width="300" height="300" />
    <rect x="314" y="50" rx="10" ry="10" width="300" height="300" />
    <rect x="628" y="50" rx="10" ry="10" width="300" height="300" />
    <rect x="942" y="50" rx="10" ry="10" width="300" height="300" />
    <rect x="0" y="450" rx="10" ry="10" width="300" height="300" />
    <rect x="314" y="450" rx="10" ry="10" width="300" height="300" />
    <rect x="628" y="450" rx="10" ry="10" width="300" height="300" />
    <rect x="942" y="450" rx="10" ry="10" width="300" height="300" />
    <circle cx="580" cy="800" r="12" />
    <circle cx="620" cy="800" r="12" />
    <circle cx="660" cy="800" r="12" />
  </ContentLoader>
);

export default Skeleton;

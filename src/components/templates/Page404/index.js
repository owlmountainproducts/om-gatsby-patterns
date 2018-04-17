import React from 'react';

import SiteHeader from '../../organisms/SiteHeader';
import SiteFooter from '../../organisms/SiteFooter';

/**
 * MOLECULE: The `<Page404>` creates __.
 *
 */
const Page404 = () => (
  <div>
    <SiteHeader
      logoImg="https://cdn1.wellnessappliances.com/wp-content/uploads/2018/04/13175200/wa_logo.png"
      alt="wellness appliances logo"
    />
    <article className="page404-template-wrapper">
      <h1>Page Not Found </h1>
      <div className="wysiwyg">
        <div className="content_target">
          <p>404</p>
        </div>
      </div>
    </article>
    <SiteFooter />
  </div>
);

export default Page404;

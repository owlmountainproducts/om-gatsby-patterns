import React from 'react';

import SocialShareButtons from '../../atoms/SocialShareButtons';

import SiteHeader from '../../organisms/SiteHeader';
import SiteFooter from '../../organisms/SiteFooter';

/**
 * MOLECULE: The `<PageTemplate>` creates __.
 *
 */
const PageTemplate = () => (
  <div>
    <SiteHeader
      logoImg="https://cdn1.wellnessappliances.com/wp-content/uploads/2018/04/13175200/wa_logo.png"
      alt="wellness appliances logo"
    />
    <article className="page-template-wrapper">
      <h1>Page Title</h1>
      <div className="wysiwyg">
        <SocialShareButtons
          className="top-social-buttons"
          title="This is a Big Deal"
          url="/search/"
          featuredImage="https://cdn1.backdoorsurvival.com/app/uploads/2018/04/11050003/Bug-Out-Vs.-Get-Home-Bags-wide.png"
        />

        <div className="content_target">
          <p>This is where page content lives.</p>
        </div>
      </div>
    </article>
    <SiteFooter />
  </div>
);

export default PageTemplate;

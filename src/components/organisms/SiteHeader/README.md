An example SiteHeader.

```
<SiteHeader
  topNav={true}
    siteMeta={
     {
        logoSrc: {
            aspectRatio: 1.1205128205128205,
            sizes: "(max-width: 1200px) 100vw, 1200px",
            src: "/demo.jpg",
            srcSet: "/demo300.jpg 300w,/demo600.jpg 600w,/demo1200.jpg 1200w,/demo1748.jpg 1748w",
            srcSetWebp: "/demo300.webp 300w,/demo600.webp 600w,/demo1200.webp 1200w,/demo1748.webp 1748w",
            srcWebp: "/demo.webp",
        },
        logoText: 'Wellness Appliances Logo',
        fbUrl: 'https://www.facebook.com/BestEssentialOilDiffuser/',
        pinterestUrl: 'https://www.pinterest.com/wellnessappliances/',
        youtubeUrl: 'https://www.youtube.com/channel/UCV5qdCOsc4VlfOfPWQYS-LQ',
    }
}
  topNavItems={
    {
     items: [
        {
          title: 'Nav Item 01',
        },
        {
          title: 'Nav Item 02',
        },
        {
          title: 'Nav Item 03',
        },
      ]
    }
  }
  primaryNavItems={
    {
     items: [
        {
          title: 'Nav Item 01',
        },
        {
          title: 'Nav Item 02',
        },
        {
          title: 'Nav Item 03',
        },
      ]
    }
  }  />
```

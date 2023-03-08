
export const websiteUrl =  "https://virus24p.vercel.app";
export const githubBaseUrl =
  "https://github.com/virgel1995/portfolio-v1";


export const siteConfig = {
  repo: {
    url: githubBaseUrl,
    editUrl: `${githubBaseUrl}/edit/main/content`,
    blobUrl: `${githubBaseUrl}/blob/main`,
  },
  author: {
    name: "virus24",
    github: "virgel1995",
    twitter: "@virus24",
    email: "kazouya25@gmail.com",
  },
  seo: {
    title: "Virus-Portfolio",
    description: "my own Portfolio made with react /ckakraUi",
    openGraph: {
      url: websiteUrl,
      type: "website",
			color: "#319197",
      image: {
        url: `${websiteUrl}/assets/avatar.jpg`,
        width: 1240,
        height: 1080,
        alt: "Blog for Whatsapp group for web development",
        type: "image/png",
      },
      locale: "en_US",
      siteName: "Virus-Portfolio",
    },
    twitter: {
      site: "@virus24",
      handle: "@virus24",
      cardType: "summary_large_image",
      image: {
        url: `${websiteUrl}/assets/avatar.jpg`,
        width: 1012,
        height: 506,
        alt: "my own Portfolio made with react /ckakraUi",
        type: "image/png",
      },
    },
    robots: "index, follow",
  },
};
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Talentscan - Resume Analysis Tool for Recruiters</title>

        <div itemscope itemtype="http://schema.org/Product">
          <meta itemprop="name" content="Talentscan" />
          <meta
            itemprop="description"
            content="Talentscan is a powerful resume analysis tool for recruiters"
          />
          <div itemprop="brand" itemscope itemtype="http://schema.org/Thing" />
          <meta itemprop="name" content="Talentscan" />
        </div>
        <meta
          name="description"
          content="Talentscan is a powerful resume analysis tool for recruiters. It helps recruiters easily analyze resumes and identify top candidates."
        />
        <meta
          name="keywords"
          content="talentscan, resume analysis, recruiters, top candidates, hiring"
        />
        <meta name="author" content="4udevapp" />

        {/* <!-- Canonical tag --> */}
        <link rel="canonical" href="https://www.talentscan.chat/" />

        {/* <!-- Open Graph tags --> */}
        <meta
          property="og:title"
          content="Talentscan - Resume Analysis Tool for Recruiters"
        />
        <meta
          property="og:description"
          content="Talentscan is a powerful resume analysis tool for recruiters. It helps recruiters easily analyze resumes and identify top candidates."
        />
        <meta
          property="og:image"
          content="https://www.talentscan.chat/images/talentscan.png"
        />
        <meta property="og:url" content="https://www.talentscan.chat/" />
        <meta property="og:type" content="website" />

        {/* <!-- Twitter Card tags --> */}
        <meta
          name="twitter:title"
          content="Talentscan - Resume Analysis Tool for Recruiters"
        />
        <meta
          name="twitter:description"
          content="Talentscan is a powerful resume analysis tool for recruiters. It helps recruiters easily analyze resumes and identify top candidates."
        />
        <meta
          name="twitter:image"
          content="https://www.talentscan.chat/images/talentscan.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="forudevapp"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#FF813F"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

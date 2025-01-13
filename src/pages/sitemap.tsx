import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./sitemap.module.css";
import Head from "@docusaurus/Head";

function Sitemap() {
  const siteStructure = {
    Documentation: [
      { title: "Getting Started", path: "/docs/getting-started" },
      { title: "Introduction", path: "/docs/intro" },
      {
        title: "LOD Pipelines",
        path: "/docs/automating-lod-pipeline-with-jupyter-notebooks",
      },
    ],
    Blog: [{ title: "Blog Posts", path: "/blog" }],
    Resources: [
      { title: "All Resources", path: "/resources" },
      { title: "Use Cases", path: "/use-cases" },
      { title: "All Pages", path: "/all-pages" },
    ],
    Community: [
      {
        title: "GitHub Repository",
        path: "https://github.com/MetaWikiArt/metawikiartdocs",
      },
      { title: "Sun and Rain Works", path: "https://www.sunandrainworks.com" },
      { title: "Metagen Earth", path: "https://www.metagenearth.com" },
    ],
  };

  return (
    <Layout>
      <Head>
        <title>Sitemap</title>
        <meta
          name="description"
          content="Complete site structure and navigation"
        />
      </Head>
      <div className={styles.sitemapContainer}>
        <div className={styles.sitemapHeader}>
          <h1>Sitemap</h1>
          <p>Complete overview of our site's content and structure</p>
        </div>

        <div className={styles.sitemapGrid}>
          {Object.entries(siteStructure).map(([section, items]) => (
            <div key={section} className={styles.sitemapSection}>
              <h2>{section}</h2>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} className={styles.sitemapLink}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Sitemap;

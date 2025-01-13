import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img
          src={require("@site/static/img/sunandrainlogo.png").default}
          alt="Sun and Rain Logo"
          style={{
            width: "200px",
            marginBottom: "20px",
          }}
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/all-pages">
            All Pages
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/automating-lod-pipeline-with-jupyter-notebooks"
          >
            Linked Open Data Pipelines
          </Link>
          <Link className="button button--secondary button--lg" to="/blog">
            Blog
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started"
          >
            Getting Started
          </Link>
          <Link className="button button--secondary button--lg" to="/use-cases">
            Use Cases
          </Link>
          <Link className="button button--secondary button--lg" to="/resources">
            Resources
          </Link>
          <Link className="button button--secondary button--lg" to="/sitemap">
            Sitemap
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      {/* Set Page Metadata */}
      <title>{`Welcome to ${siteConfig.title}`}</title>
      <meta
        name="description"
        content="Description will go into a meta tag in <head />"
      />
      <HomepageHeader />
      <main className="main-content">
        <div className="content-wrapper">
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}

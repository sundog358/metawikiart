import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function AllPages() {
  return (
    <Layout title="All Pages">
      <div className="container">
        <h1>All Pages</h1>
        <p>Below is a list of all the pages available on this site:</p>
        <ul>
          <li>
            <Link to="/docs/intro">Documentation Intro</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/automating-lod-pipeline-with-jupyter-notebooks">
              Automating LOD Pipeline
            </Link>
          </li>
          {/* Add other links to pages or sections of your site here */}
        </ul>
      </div>
    </Layout>
  );
}

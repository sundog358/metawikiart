import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";

export default function UseCases() {
  return (
    <Layout>
      {/* Add Head for metadata */}
      <Head>
        <title>Use Cases - GLAM Linked Open Data</title>
        <meta
          name="description"
          content="Explore practical use cases of Linked Open Data in GLAM projects, including cultural heritage, life sciences, government data, and more."
        />
      </Head>
      <div className="container">
        <h1>Use Cases</h1>
        <p>
          Explore practical applications of Linked Open Data in various domains,
          with real-world examples and inspiring case studies.
        </p>
        <h2>🎨 Cultural Heritage</h2>
        <ul>
          <li>
            <strong>Provenance Tracking:</strong> Mapping the history of
            artifacts using linked data.
          </li>
          <li>
            <strong>Art Discovery:</strong> Enhancing search experiences with
            semantic annotations and linked vocabularies.
          </li>
        </ul>
        <h2>🔬 Life Sciences</h2>
        <ul>
          <li>
            <strong>Bioinformatics:</strong> Linking biological datasets for
            advanced research.
          </li>
          <li>
            <strong>Healthcare Analytics:</strong> Using RDF for unified patient
            records and data-driven insights.
          </li>
        </ul>
        <h2>📊 Government Data</h2>
        <ul>
          <li>
            <strong>Open Data Portals:</strong> Enabling public access to
            government datasets through linked data.
          </li>
          <li>
            <strong>Policy Analysis:</strong> Connecting legislative documents
            to visualize impact.
          </li>
        </ul>
        <h2>🌍 Environmental Science</h2>
        <ul>
          <li>
            <strong>Geospatial Data:</strong> Linking geographic datasets for
            climate change research.
          </li>
          <li>
            <strong>Biodiversity:</strong> Combining datasets to map species
            distributions.
          </li>
        </ul>
        <h2>💻 Technology & Innovation</h2>
        <ul>
          <li>
            <strong>Knowledge Graphs:</strong> Building AI-ready graphs for
            smarter search engines.
          </li>
          <li>
            <strong>Personalized Recommendations:</strong> Leveraging linked
            data for user-centric solutions.
          </li>
        </ul>
        <p>
          <Link to="/resources">Browse more resources</Link> to learn about
          tools and platforms for implementing these use cases.
        </p>
      </div>
    </Layout>
  );
}

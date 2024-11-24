import React from "react";
import Layout from "@theme/Layout";

function Resources() {
  return (
    <Layout title="Linked Open Data Resources">
      <div className="container">
        <h1>Linked Open Data Resources</h1>

        <h2>1. LOD Standards and Tools</h2>
        <ul>
          <li>
            <a
              href="https://www.w3.org/TR/rdf11-concepts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              RDF (Resource Description Framework)
            </a>
            : The foundational standard for representing linked data on the web.
            RDF allows for linking disparate data in a meaningful way.
          </li>
          <li>
            <a
              href="https://www.w3.org/TR/sparql11-query/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SPARQL
            </a>
            : A query language used for querying linked data repositories,
            allowing you to extract and manipulate data from RDF datasets.
          </li>
          <li>
            <a
              href="https://www.w3.org/TR/owl2-overview/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OWL (Web Ontology Language)
            </a>
            : A language used for creating ontologies that structure the
            relationships between different pieces of data.
          </li>
        </ul>

        <h2>2. Key Platforms and Ecosystems</h2>
        <ul>
          <li>
            <a
              href="https://wikidata.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikidata
            </a>
            : A free and open knowledge base that serves as a central repository
            for structured data, supporting the linked open data ecosystem.
          </li>
          <li>
            <a
              href="https://artsdata.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Artsdata Ecosystem
            </a>
            : A platform for structuring and linking performing arts data in
            Canada, enhancing discoverability across various sources.
          </li>
          <li>
            <a
              href="https://ckan.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Knowledge Foundation's CKAN
            </a>
            : A powerful open-source data management system useful for LOD
            projects.
          </li>
        </ul>

        <h2>3. Repositories and Knowledge Graphs</h2>
        <ul>
          <li>
            <a
              href="https://dbpedia.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              DBpedia
            </a>
            : Extracts structured content from Wikipedia and makes it available
            as linked data.
          </li>
          <li>
            <a
              href="https://www.europeana.eu/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Europeana
            </a>
            : A platform aggregating linked open data for cultural heritage.
          </li>
          <li>
            <a
              href="https://lod-cloud.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LOD Cloud
            </a>
            : An extensive collection of interlinked datasets across various
            domains such as government, life sciences, and publications.
          </li>
        </ul>

        <h2>4. LOD in Specific Domains</h2>
        <h3>Cultural Heritage</h3>
        <ul>
          <li>
            <a
              href="https://www.europeana.eu/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Europeana
            </a>
            : Provides access to millions of digitized items from European
            museums, libraries, archives, and galleries.
          </li>
          <li>
            <a
              href="http://vocab.getty.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Getty Vocabularies
            </a>
            : Offers structured vocabularies and authority files for describing
            art, architecture, and other cultural heritage materials.
          </li>
          <li>
            <a
              href="https://linked.art/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linked Art
            </a>
            : Promotes the use of linked open data in the art world, connecting
            artworks, artists, museums, and other relevant information.
          </li>
          <li>
            <a
              href="https://www.britishmuseum.org/about_us/strategy/linked_open_data.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              British Museum LOD
            </a>
            : Makes a significant portion of its collection data available as
            linked open data.
          </li>
        </ul>

        <h3>Life Sciences</h3>
        <ul>
          <li>
            <a
              href="http://bio2rdf.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bio2RDF
            </a>
            : Provides life science data from various sources as linked data,
            facilitating integration and analysis.
          </li>
          <li>
            <a
              href="https://www.ebi.ac.uk/rdf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              EBI RDF Platform
            </a>
            : Offers access to the European Bioinformatics Institute's vast
            biological data resources through linked data technologies.
          </li>
        </ul>

        <h3>Government & Public Data</h3>
        <ul>
          <li>
            <a
              href="https://www.data.gov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data.gov (US)
            </a>
            : The U.S. government's open data portal, providing access to
            datasets from various federal agencies.
          </li>
          <li>
            <a
              href="https://data.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data.gov.uk
            </a>
            : The UK government's open data portal, providing access to datasets
            from various public sector organizations.
          </li>
        </ul>

        <h3>Geographic Data</h3>
        <ul>
          <li>
            <a
              href="https://linkedgeodata.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedGeoData
            </a>
            : A framework for publishing and connecting geographic data on the
            Web, enabling location-based queries and analysis.
          </li>
        </ul>

        <h2>5. LOD Use Cases and Case Studies</h2>
        <ul>
          <li>
            <a
              href="https://lod-cloud.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LOD Around the World
            </a>
            : The LOD Cloud often features case studies showcasing the use of
            linked open data in various domains.
          </li>
          <li>
            <em>
              Search for academic papers and articles that showcase LOD
              applications in your area of interest.
            </em>
          </li>
        </ul>

        <h2>6. LOD Communities and Events</h2>
        <ul>
          <li>
            <a
              href="https://iswc2023.semanticweb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Semantic Web Conference
            </a>
            : A premier international conference dedicated to the advancement of
            semantic web technologies, including linked open data.
          </li>
          <li>
            <a
              href="https://www2023.thewebconf.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Web Conference
            </a>
            : A major international conference covering a wide range of
            web-related topics, including linked data and the semantic web.
          </li>
          <li>
            <em>
              Local LOD Meetups: Search for meetups in your city or region.
            </em>
          </li>
        </ul>

        <h2>7. Learning Resources and Tutorials</h2>
        <ul>
          <li>
            <a
              href="https://programminghistorian.org/en/lessons/intro-to-linked-data"
              target="_blank"
              rel="noopener noreferrer"
            >
              Introduction to the Principles of Linked Open Data
            </a>
            : Introduces core concepts of Linked Open Data, including URIs,
            ontologies, RDF formats, and a gentle intro to the graph query
            language SPARQL.
          </li>
          <li>
            <a
              href="https://lov.linkeddata.es/dataset/lov"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linked Open Vocabularies (LOV)
            </a>
            : A catalog of vocabularies used for linked data, with a built-in
            API and search engine for exploring available ontologies.
          </li>
          <li>
            <a
              href="https://solidproject.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solid Project
            </a>
            : Focuses on decentralized data ownership using LOD principles.
          </li>
          <li>
            <a
              href="https://www.w3.org/TR/rdf-primer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              RDF and OWL Primer (W3C)
            </a>
            : A comprehensive guide to the basics of RDF and OWL.
          </li>
        </ul>

        <h2>8. Best Practices and Guidelines</h2>
        <ul>
          <li>
            <a
              href="https://www.w3.org/TR/ld-bp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              W3C Best Practices for Publishing Linked Data
            </a>
            : Guidelines to help individuals and organizations publish their
            data as linked open data.
          </li>
          <li>
            <a
              href="https://theodi.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Data Institute (ODI)
            </a>
            : "The ODI works with organisations to build data infrastructure,
            knowledge, and strategies that create trust in data and data
            practices. We bring together businesses, governments, and civil
            society to generate economic benefits and tackle real-world
            challenges using data.""
          </li>
        </ul>

        <h2>9. Tools for Visualizing and Querying Linked Data</h2>
        <ul>
          <li>
            <a
              href="https://yasgui.triply.cc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              YASGUI
            </a>
            : A popular SPARQL query editor with auto-complete features for
            running SPARQL queries.
          </li>
        </ul>

        <h2>10. Additional Tools</h2>
        <ul>
          <li>
            <a
              href="https://protege.stanford.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Protégé
            </a>
            : A free, open-source ontology editor and knowledge base framework.
          </li>
          <li>
            <a
              href="https://www.topquadrant.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TopQuadrant
            </a>
            : "Seamlessly connect and govern your essential data, harnessing the
            power and clarity of knowledge graphs, to personalize search,
            automate operations, and safely deploy AI.""
          </li>
          <li>
            <a
              href="https://www.ontotext.com/products/graphdb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GraphDB
            </a>
            : "A robust RDF triplestore for storing, querying, and managing
            large linked data sets. GraphDB allows you to link diverse data,
            index it for semantic search and enrich it via text analysis to
            build big knowledge graphs.""
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default Resources;

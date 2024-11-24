import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Linked Open Data Ready",
    // Replace this with the provided metagenearth.png image
    Svg: require("@site/static/img/metagenearth.png").default,
    description: (
      <>
        Meta Wiki Art integrates seamlessly with Linked Open Data standards,
        making it easy to structure and publish art-related datasets for global
        use.
      </>
    ),
  },
  {
    title: "Focus on Art and Culture",
    // Replace this with the provided metawikiart.png image
    Svg: require("@site/static/img/metawikiart.png").default,
    description: (
      <>
        Our platform is dedicated to documenting, linking, and sharing rich
        cultural and artistic data, allowing you to focus on building meaningful
        connections between artworks, artists, and historical contexts.
      </>
    ),
  },
  {
    title: "Customizable and Scalable",
    // Replace this with the provided metawikiart2.png image
    Svg: require("@site/static/img/metawikiart2.png").default,
    description: (
      <>
        Meta Wiki Art is built on a scalable architecture, customizable to meet
        your specific data and design needs. Whether you're a small gallery or a
        large institution, our system grows with you.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Layout from "@theme/Layout";
import styles from "./CustomLayout.module.css";

const CustomLayout = ({ children, title }) => {
  return (
    <Layout title={title}>
      <div className={styles.containerWrapper}>
        <div className={styles.blogContentWrapper}>{children}</div>
      </div>
    </Layout>
  );
};

export default CustomLayout;

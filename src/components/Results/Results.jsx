import React from "react";
import Result from "../Result/Result";
import styles from "./Results.module.scss";

const Results = ({ results, selectedTab, isLoading }) => (

  isLoading ? 'Loading...' :
    <ul className={styles.results}>
      {results
        .filter(result =>
          selectedTab ? result.tabTypes.includes(selectedTab) : true
        )
        .map((result, index) => (
          <Result
            key={index}
            title={result.title}
            name={result.artist.name}
            tabTypes={result.tabTypes}
            id={result.id}
          />
        ))}
    </ul>
);

export default Results;

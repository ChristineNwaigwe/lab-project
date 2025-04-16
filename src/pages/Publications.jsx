import React, { useEffect, useState } from "react";
import "./Publications.css";

const Publications = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_PUBMED_API_KEY;

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const searchResponse = await fetch(
          `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=sayaka+inoue[Author]&retmode=json&retmax=10&api_key=${apiKey}`
        );
        const searchData = await searchResponse.json();
        const ids = searchData.esearchresult.idlist;

        const summaryResponse = await fetch(
          `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids.join(
            ","
          )}&retmode=json&api_key=${apiKey}`
        );
        const summaryData = await summaryResponse.json();
        const articles = Object.values(summaryData.result).filter((item) => item.uid);

        setResults(articles);
      } catch (err) {
        console.error("Failed to fetch publications:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, [apiKey]);

  return (
    <div className="publications-container">
      <h2>Recent Publications</h2>
      {loading ? (
        <p>Loading publications...</p>
      ) : (
        <ul className="results">
          {results.map((article) => (
            <li key={article.uid}>
              <a
                href={`https://pubmed.ncbi.nlm.nih.gov/${article.uid}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.title}
              </a>
              <p>
                <em>{article.source}</em> ({article.pubdate})
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Publications;

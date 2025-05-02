import React, { useEffect, useState } from "react";
import "./Publications.css";

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
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
        const articles = Object.values(summaryData.result).filter(
          (item) => item.uid
        );

        setPublications(articles);
      } catch (err) {
        console.error("Failed to fetch publications:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, [apiKey]);

  // Filter publications based on search query (title or pubtype)
  const filteredPublications = publications.filter((article) => {
    const query = searchQuery.toLowerCase();
    const titleMatch = article.title?.toLowerCase().includes(query);
    const pubtypeMatch = article.pubtype?.some((type) =>
      type.toLowerCase().includes(query)
    );
    return titleMatch || pubtypeMatch;
  });

  // Group filtered publications by year
  const groupedByYear = filteredPublications.reduce((acc, article) => {
    const year = article.pubdate?.split(" ")[0] || "Unknown";
    if (!acc[year]) acc[year] = [];
    acc[year].push(article);
    return acc;
  }, {});

  return (
    <div className="publications-container">
      <h2>Recent Publications</h2>
      <input
        type="text"
        placeholder="Search Publications..."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {loading ? (
        <div className="loader-container">
          <svg
            version="1.1"
            id="Layer_1"
            className="loading-svg"
            x="0px"
            y="0px"
            width="24px"
            height="30px"
            viewBox="0 0 24 30"
            xmlSpace="preserve"
          >
            <title>Loading</title>
            <rect
              x="0"
              y="8.65016"
              width="4"
              height="12.6997"
              fill="#A7110E"
              opacity="0.2"
            >
              <animate
                attributeName="opacity"
                values="0.2; 1; .2"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="10; 20; 10"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="10; 5; 10"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect
              x="8"
              y="6.15016"
              width="4"
              height="17.6997"
              fill="#A7110E"
              opacity="0.2"
            >
              <animate
                attributeName="opacity"
                values="0.2; 1; .2"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="10; 20; 10"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="10; 5; 10"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect
              x="16"
              y="6.34984"
              width="4"
              height="17.3003"
              fill="#A7110E"
              opacity="0.2"
            >
              <animate
                attributeName="opacity"
                values="0.2; 1; .2"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                values="10; 20; 10"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="10; 5; 10"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </div>
      ) : (
        Object.keys(groupedByYear)
          .sort((a, b) => b - a)
          .map((year) => (
            <div
              key={year}
              className={`fade-in-member ${!loading ? "is-visible" : ""}`}
            >
              <h3 className="year-header">{year}</h3>
              <ul className="results">
                {groupedByYear[year].map((article) => (
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
                    {article.pubtype && (
                      <p className="pubtype">
                        {article.pubtype.join(", ")}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))
      )}
    </div>
  );
};

export default Publications;

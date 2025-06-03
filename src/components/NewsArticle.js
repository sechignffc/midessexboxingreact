import { useParams, useNavigate } from "react-router-dom";
import newsData from "../news.json";

const NewsArticle = () => {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const item = newsData[newsId];

  if (!item) return <div>Not found</div>;

  return (
    <div
      className="news-article"
      style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}
    >
      <img
        src={`/images/${item.image}`}
        alt={item.headline}
        style={{
          width: "100%",
          maxHeight: 500,
          objectFit: "cover",
          borderRadius: 8,
        }}
      />
      <div style={{ fontWeight: "bold", marginTop: "1em" }}>{item.date}</div>
      <h2 style={{ marginTop: "1em" }}>{item.headline}</h2>
      <div
        style={{ marginTop: "1em" }}
        dangerouslySetInnerHTML={{ __html: item.content }}
      />
      <button onClick={() => navigate("/news")} style={{ marginTop: "1em" }}>
        Back
      </button>
    </div>
  );
};

export default NewsArticle;

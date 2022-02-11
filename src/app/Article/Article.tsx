import { Button, Card } from "react-bootstrap";
import { iArticle } from "../../model/article";
import "./article.scss";

function Article(article: iArticle) {
  return (
    <a href={article.url} target="_blank" rel="noreferrer">
      <Card bg="light">
        <Card.Img src={article.imageUrl} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
        </Card.Body>
        <Button variant="secondary">Conocer más</Button>
      </Card>
    </a>
  );
}

export default Article;

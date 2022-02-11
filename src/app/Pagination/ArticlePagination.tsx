import { Pagination } from "react-bootstrap";
import { constants } from "../constants";

function ArticlePagination({
  totalPost,
  currentPage,
  onPaginate,
}: {
  totalPost: number;
  currentPage: number;
  onPaginate: (pageNumber: number) => void;
}) {
  let pageNumbers = [];
  for (
    let number = 1;
    number <= Math.ceil(totalPost / constants.PAGE_LIMIT);
    number++
  ) {
    pageNumbers.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => onPaginate(number)}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="pagination-container">
      <Pagination>{pageNumbers}</Pagination>
    </div>
  );
}
export default ArticlePagination;

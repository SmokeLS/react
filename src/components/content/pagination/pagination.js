
import "./pagination.scss";

function Pagination({countArticles, limit}) {

    const newList = [];
    for (let i = 0; i < Math.ceil(countArticles/limit); i++) {
        newList.push(<li className="page-item" key = {i+1}>
                      <a className="page-link" href="#">{i}</a>
                    </li>);
    }

    return(
        <ul className="pagination">
            <li className="page-item" key="0">
                <a className="page-link" href="#">
                   Previous
                </a>
            </li>
            {newList}
            <li className="page-item" key={limit}>
                <a className="page-link" href="#">
                   Next
                </a>
            </li>
        </ul>

    )
}

export default Pagination;
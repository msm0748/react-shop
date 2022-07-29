import { useParams } from "react-router-dom";

function Detail({shoes}) {
    let { id } = useParams();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={`https://codingapple1.github.io/shop/shoes${shoes[id].id + 1}.jpg`}
                        width="100%"
                    />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{shoes[id].title}</h4>
                    <p>{shoes[id].content}</p>
                    <p>{shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;

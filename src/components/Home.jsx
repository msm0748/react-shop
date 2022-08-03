import Category from "../pages/Category.jsx";

function Home({clothes}) {
	return (
			<div className="wrap">
				<Category clothes={clothes}/>
			</div>
	);
}

export default Home;

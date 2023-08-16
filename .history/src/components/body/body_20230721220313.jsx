import Header from "./header/Header";
import Footer from "./footer/Footer";
const Body = (props) => {
	console.log("hello from body");
	return (
		<>
			<Header />
			{props.children}
			<Footer />
		</>
	);
};
export default Body;

import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./body.css";
const Body = () => {
	console.log("hello from body");
	return (
		<>
			<Header />
			<video
				height="100%"
				width="100%"
				src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1400,ar_1.77,q_auto:eco,dpr_2,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
			></video>
			{/* <Footer /> */}
		</>
	);
};
export default Body;

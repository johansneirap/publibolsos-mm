import { MainLayout } from "../components/layouts/MainLayout";
import ImageGallery from "../components/products/ImageGallery";

export default function Products({ images }) {
	// const regex = /_/g;
	// const regex2 = /-/g;
	// const data = images.map((image) => {
	// 	return {
	// 		image: image.image.replace("upload/", "upload/w_auto/q_60/"),
	// 		caption: image.title.replace("publimochilas/", "").replace(regex, " ").replace(regex2, " "),
	// 	};
	// });
	// const captionStyle = {
	// 	fontSize: "2em",
	// 	fontWeight: "bold",
	// };
	// const slideNumberStyle = {
	// 	fontSize: "20px",
	// 	fontWeight: "bold",
	// };

	return (
		<MainLayout>
			<div className="productos-container">
				<h2 className="title">Productos Mochilas mineras</h2>
				<span className="legend">Encuentra los mejores productos acorde a tu necesidad, si no existe... lo creamos!</span>
				<div
					style={{
						padding: "0",
						maxWidth: "100vw",
						width: "90%",
					}}
				>
					<ImageGallery />
				</div>
			</div>
		</MainLayout>
	);
}
// export async function getStaticProps() {
//   const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image?max_results=500`, {
//     headers: {
//       Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
//     }
//   }).then(r => r.json());

//   const { resources } = results;

//   const images = resources.map(resource => {
//     const { width, height } = resource;
//     return {
//       id: resource.asset_id,
//       title: resource.public_id,
//       image: resource.secure_url,
//       width,
//       height
//     }
//   });
//   console.log(images.map( img => {
//     return {
//       ...img,
//       src: img.image,
//       alt: img.title,
//       caption: img.title
//     }
//   }))
//   return {
//     props: {
//       images,
//     }
//   }
// }

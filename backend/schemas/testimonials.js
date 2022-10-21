export default {
	name: "testimonials",
	title: "Testimonials",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "imageUrl",
			title: "ImgURL",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "feedback",
			title: "Feedback",
			type: "string",
		},
	],
};

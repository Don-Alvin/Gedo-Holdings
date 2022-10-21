export default {
	name: "blog",
	title: "Blog",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},

		{
			name: "imgUrl",
			title: "ImageUrl",
			type: "image",
			options: {
				hotspot: true,
			},
		},

		{
			name: "excerpt",
			title: "Excerpt",
			description: "Keep it short and precise",
			type: "string",
		},

		{
			name: "author",
			title: "Author",
			type: "string",
		},

		{
			name: "date",
			title: "Date",
			type: "string",
		},

		{
			name: "content",
			title: "Content",
			type: "string",
		},

		{
			name: "articleLink",
			title: "Article Link",
			type: "string",
		},
	],
};

import axios from "axios";

export default {
	/**
     * GET /
     */
	get_all: (req, res) => {
		// Process Request //

		// Query Database

		// Return Response
		return res.status(200).json({
			code: 200,
			data: [
				{
					name: 'Joe',
					age: 22,
					major: 'computer science',
					createdAt: new Date()
				},
				{
					name: 'Nick',
					age: 22,
					major: 'computer engineering',
					createdAt: new Date()
				},
				{
					name: 'Sarah',
					age: 19,
					major: 'Medicine',
					createdAt: new Date()
				}
			],
			message: 'Success fetching resources'
		});
	},
	/**
     * GET /:id
     */
	get_one: (req, res) => {
		// Process Request

		// Query Database

		// Return Response
		return res.status(200).json({
			code: 200,
			data: {
				name: 'Joe',
				age: 22,
				id: req.params.id,
				major: 'computer science',
				createdAt: new Date()
			},
			message: ''
		});
	},

	/**
     * POST /
     */
	create_one: (req, res) => {
		// Process Request

		// Query Database

		// Return Response
		return res.status(201).json({
			code: 200,
			data: req.body,
			message: 'Resource created'
		});
	},

	/**
     * PUT /:id
     */
	update_one: (req, res) => {
		// Process Request

		// Query Database

		// Return Response
		return res.status(204).json({
			code: 204,
			data: {
				id: req.params.id
			},
			message: 'Resource updated succesfully'
		});
	},

	/**
     * DELEte /:id
     */
	delete_one: (req, res) => {
		// Process Request

		// Query Database

		// Return Response
		return res.status(200).json({
			code: 200,
			data: {
				id: req.params.id
			},
			message: 'Resource deleted'
		});
	},

	/**
	 * GET
	 * example to fetch something from another service or website
	 */
	get_other: (req, res) => {
		// Process Request
		let payload = {
			code: "",
			data: "",
			message: ""
		};

		// Fetch something
		axios.get("https://www.google.com")
			.then(result => {
				payload.code = 200;
				payload.data = result;
				payload.message = "Something went good!"
			})
			.catch(err => {
				payload.code = 500;
				payload.message = "Something went wrong";
			})

		// Return Response
		return res.status(200).json(payload);
	}
};

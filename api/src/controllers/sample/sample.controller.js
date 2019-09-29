import axios from "axios";
import Sample from "../../models/sample.model";
import projection from "./sample.projection";


/**
 * There are various ways of finding a model using mongoose
 * The most common ones are find() and findById()
 * 
 * See documentation for more examples
 * https://mongoosejs.com/docs/api/model.html#model_Model.find
 * 
 * 
 */
export default {
	/**
     * GET /samples
     */
	get_all: (req, res) => {
		// Process Request //

		// Query Database
		Sample.find({}, projection(req.user, "GET /samples"), (err, dbData) => {
			// if error occured, return error response
			if (err) {
				return res.status(502).send({});
			} else {
				// Return success response
				return res.status(200).json({
					code: 200,
					data: dbData,
					message: ""
				})
			}
		})
	},
	/**
     * GET /samples/:id
     */
	get_one: (req, res) => {
		// Process Request

		// Query Database
		Sample.findById(req.params.id, projection(req.user, "GET /samples/:id"), (err, dbData) => {
			// if error occured, return error response
			if (err) {
				res.status(502).send({});
			} else if (dbData == null) {
				res.status(404).send({});
			} else {
				// Return success response
				return res.status(200).json({
					code: 200,
					data: dbData,
					message: `Found model ${req.params.id}`
				})
			}
		})
	},

	/**
     * POST /samples
     */
	create_one: (req, res) => {
		// Process Request
		let sample = new Sample(req.body);

		// Igore values submitted by user for system controlled fields.
		sample.createdAt = Date.now();
		sample.updatedAt = Date.now();

		// Query Database
		sample.save((err, dbData) => {
			// if error occured, return error response
			if (err) {
				if (err.name !== "ValidationError") {
					return res.status(502).send({});
				} else {
					return res.status(404).send({});
				}
			}

			// Return success response
			return res.status(201).json({
				code: 201,
				data: dbData,
				message: "Sample succesfully created."
			})
		})

	},

	/**
     * PUT /:id
     */
	update_one: (req, res) => {
		// Process Request

		let documentToUpdate = undefined;
		let systemFields = ["_id", "id", "createdAt", "updatedAt"];

		// Query Database
		Sample.findById(req.params.id, projection(req.user, "PUT /samples/:id"), (err, dbData) => {
			// if error occured, return error response
			if (err) {
				return res.status(502).send({});
			} else if (dbData == null) {
				return res.status(404).send({})
			} else {
				documentToUpdate = dbData;

				// Cast documentToUpdate as a Sample
				documentToUpdate = new Sample(documentToUpdate);

				// Update the retrieved document with the data submitted
				// to the PUT request (ignoring system controlled fields).
				// If a key of req.body is one of the systemFields that shouldn't be modified
				// by the user then we ignore it, else we keep it
				for (let key in req.body) {
					documentToUpdate[key] = systemFields.indexOf(key) == -1 ? req.body[key] : documentToUpdate[key];
				}

				// Update updatedAt date
				documentToUpdate.updatedAt = Date.now();

				// persist to database
				documentToUpdate.save((err, dbData) => {
					// if erro roccured, return error response
					if (err) {
						if (err.name !== "ValidationError") {
							return res.status(502).send({});
						} else {
							return res.status(400).send({});
						}
					}

					// return success response
					return res.status(200).json({
						code: 200,
						data: dbData,
						message: "Success updating."
					})
				})

			}
		})


	},

	/**
     * DELEte /samples/:id
     */
	delete_one: (req, res) => {
		// Process Request

		// Query Database
		Sample.remove({ _id: req.params.id }, (err, dbData) => {
			// if error ocurred, return error response
			if (err) {
				res.status(502).send({});
			} else if (dbData == null) {
				res.status(404).send({});
			}

			// Return success response
			return res.status(204).json({});
		})

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

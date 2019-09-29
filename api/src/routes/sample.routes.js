import controller from '../controllers/sample/sample.controller';

export default (app) => {
	app.route('/samples')
		.get(controller.get_all)
		.post(controller.create_one);

	app.route('/samples/:id')
		.get(controller.get_one)
		.put(controller.update_one)
		.delete(controller.delete_one);

	app.route('/request').get(controller.get_other);
};

const faker = require('faker');
const log4js = require('../../utils/logger.ts');
const logger = log4js.getLogger('logger');

class People {

	getAllPeoples() {
		let peoples = [];
		let people = {
			name: faker.name.findName(),
			email: faker.internet.email()
		}
		peoples.push(people);
		return peoples;
	}
}

export {People};
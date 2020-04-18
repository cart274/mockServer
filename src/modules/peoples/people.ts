const faker = require('faker');
const log4js = require('../../utils/logger.ts');
const logger = log4js.getLogger('logger');

class People {

	getAllPeoples(num: number) {
		let peoples = [];
		for(let i = 0; i < num; i+=1) {
			let people = {
				name: faker.name.findName(),
				email: faker.internet.email()
			}
			peoples.push(people);
		}
		return peoples;
	}
}

export {People};
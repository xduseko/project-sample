"use strict";

import MissionModel from "./mission-model";

export default class MissionService {

	async get(uid: string) {
		const mission = await MissionModel.findOne({ uid });
		//mission.foo = 5;
		return mission;
	}
}

"use strict";

import {Schema, SchemaTypes, SchemaDefinition} from "mongoose";
import {MissionDocument} from "./mission";
import database from "./database";

const assignment: SchemaDefinition = {
	type: SchemaTypes.Mixed
};

const schema = new Schema({
	uid: {
		type: SchemaTypes.String,
		required: true,
		index: true
	}
});

const MissionModel = database.model<MissionDocument>('Mission', schema);
export default MissionModel;

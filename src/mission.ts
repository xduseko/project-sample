"use strict";

import { Document } from "mongoose";

export default interface Mission {
	
	uid: string;
}

export interface MissionDocument extends Mission, Document {
}

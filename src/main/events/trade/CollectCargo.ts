/*
 * Copyright (C) 2022 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import type { JournalEvent } from "../../JournalEvent.js";

export interface CollectCargo extends JournalEvent<"CollectCargo"> {
    Stolen: boolean;
    Type: string;
    Type_Localised?: string;
    MissionID?: number;
}

/*
 * Copyright (C) 2022 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import type { JournalEvent } from "../../JournalEvent.js";

export interface BookTaxi extends JournalEvent<"BookTaxi"> {
    Cost: number;
    DestinationSystem: string;
    DestinationLocation: string;

    /** Indicates if requested for exit from combat zone. */
    Retreat?: boolean;
}

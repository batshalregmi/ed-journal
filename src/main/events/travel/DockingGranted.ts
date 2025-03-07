/*
 * Copyright (C) 2022 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import type { JournalEvent } from "../../JournalEvent.js";

/**
 * Written when a docking request is granted.
 */
export interface DockingGranted extends JournalEvent<"DockingGranted"> {
    StationName: string;
    StationType?: string;
    MarketID?: number;
    LandingPad: number;
}

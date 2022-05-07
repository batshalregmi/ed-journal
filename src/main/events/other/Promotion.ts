/*
 * Copyright (C) 2022 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import type { JournalEvent } from "../../JournalEvent";

export interface Promotion extends JournalEvent<"Promotion"> {
    Combat?: number;
    CQC?: number;
    Empire?: number;
    Explore?: number;
    Federation?: number;
    Trade?: number;
    Soldier?: number;
    Exobiologist?: number;
}

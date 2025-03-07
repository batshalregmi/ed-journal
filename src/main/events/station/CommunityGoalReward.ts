/*
 * Copyright (C) 2022 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import type { JournalEvent } from "../../JournalEvent.js";

export interface CommunityGoalReward extends JournalEvent<"CommunityGoalReward"> {
    Name: string;
    Reward: number;
    System: string;
    CGID?: number;
}

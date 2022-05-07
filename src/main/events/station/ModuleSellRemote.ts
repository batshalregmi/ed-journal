/*
 * Copyright (C) 2022 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import type { JournalEvent } from "../../JournalEvent";

export interface ModuleSellRemote extends JournalEvent<"ModuleSellRemote"> {
    SellItem: string;
    SellItem_Localised?: string;
    SellPrice: number;
    ServerId?: number;
    Ship: string;
    ShipID: number;
    StorageSlot?: number;
}

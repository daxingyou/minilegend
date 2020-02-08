import llog from "../util/Log"
import gameMgr from "../manager/GameMgr";

export let ErrList = {
    Create_Equip_Error_ItemID: 300001,
    Create_Equip_Error_EquipID: 300002,
    Create_Equip_Error_AttrID: 300003,
}

const list: { [x: number]: string } = {
    [ErrList.Create_Equip_Error_ItemID]: "创建装备出错，物品信息不存在，物品id[??]",
    [ErrList.Create_Equip_Error_EquipID]: "创建装备[??][??]出错，装备信息不存在，装备id[??]",
    [ErrList.Create_Equip_Error_AttrID]: "创建装备[??][??]错误，属性不存在，属性id[??]",
}

export function loge(id: number, ...args: any[]) {
    if (!gameMgr.config.dev) {
        llog.error(id, args);
    }else{
        let i = 0;
        let message = list[id];
        while (true) {
            let t = message.indexOf("??");
            if (t == -1) {
                break;
            }
            let m = args[i];
            if (m == null) {
                llog.error(`loge 参数错误，参数不足`);
                break;
            }
            message.replace(/\?\?/, args[i]);
            i++;
        }
        llog.error(message, args);
    }
    
}
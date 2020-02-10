import { Attribute, AttrIds } from "../../common/G";
import equip from "../item/equip/Equip";
import Item from "../item/Item";
import { safeJson } from "../../common/gFunc";

export default class Player {
	[x: string]: any;
	// 绝对id
	onlyid: number = 0;
	// 玩家id 数据库id
	playerid: number = 0;
	// 账号
	account: string = "";
	// token 验证上下文
	token: string = "";
	// uuid
	uuid: string = "";
	// 等级
	level: number = 1;
	// 经验
	exp: number = 0;
	// 体力
	power: number = 0;

	// 当前装备
	equips: equip[] = [];
	// 背包物品
	items: { [x: string]: Item } = {};
	// 元宝
	gold: number = 0;
	// 银币
	coin: number = 0;

	// 最高地图
	maxMap: number = 0;
	// 最大关卡
	maxStage: number = 0;
	// 属性
	attr: Attribute = new Attribute();

	test() {

	}

	init(uuid: string, token?: string) {
		this.uuid = uuid;
		token && (this.token = token);
	}

	toString() {
		return JSON.stringify(this);
	}

	fromJson(json: any) {
		for (const key in json) {
			// if(key == "attr"){
			// 	this.attr.fromJson(json[key]);
			// 	continue;
			// }
			this[key] = safeJson(json[key]);
		}
	}

	static toObj(obj: string | object) {
		let newplayer = new Player();
		if (typeof obj == "string") {
			obj = JSON.parse(obj);
		}
		newplayer.fromJson(obj);
		return newplayer;
	}
}
// 地图块 数据
export const Cell = {
	width: 256,
	height: 256,
}

// 地图格子数据
export const Gird = {
	width: 40,
	height: 40,
}

// 生物类型
export enum LivingType {
	NOTHING = 0,
	OBJECT,
	NPC,
	MONSTER,
	PLAYER,
}
// 动作状态
export enum ActState {
	IDLE = 1,// 待机
	RUN,// 移动
	RATK,// 准备攻击
	ATK,// 攻击
	MGC,// 魔法
	DIE,// 死亡
}
// 技能计算回调
export interface AtkInfo {
	AtkType: number,
	AtkNum: number
}

// 技能类型
export enum SkillType {
	ATTACK = 0,
	BUFF,
	DEBUFF,
}
// 技能主动性
export enum SkillActType {
	Active = 0,
	Passive,
}
// 技能ID
export const SkillIds = {
	NormalAttack: 10000, // 普通攻击
	GongShaJianFa: 10001,// 攻杀剑法
	LeiDianShu: 20001,//雷电术
	LingHunHuoFu: 30001, // 灵魂火符
}
// 技能名字
export const SkillName = {
	[SkillIds.NormalAttack]: "普通攻击",
	[SkillIds.GongShaJianFa]: "攻杀剑法",
	[SkillIds.LeiDianShu]: "雷电术",
	[SkillIds.LingHunHuoFu]: "灵魂火符",
}
// 技能简介
export const SkillDesc = {
	[SkillIds.NormalAttack]: "普通攻击",
	[SkillIds.GongShaJianFa]: "攻杀剑法",
	[SkillIds.LeiDianShu]: "雷电术",
	[SkillIds.LingHunHuoFu]: "灵魂火符",
}
// 技能攻击类型
export enum SkillAtkType {
	Physics = 0, // 物理攻击
	Magic,// 魔法攻击
	Taoist,// 道术攻击
}

export interface dropInfo {
	itemid: number,
	num: number,
}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//   
//							下面前后端通用部分
//
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

export interface AttrDatas {
	ID: number;
	Hp1: number;
	Hp2: number;
	MaxHp1: number;
	MaxHp2: number;
	Speed1: number;
	Speed2: number;
	AtkSpe1: number;
	AtkSpe2: number;
	AtkMin1: number;
	AtkMin2: number;
	AtkMax1: number;
	AtkMax2: number;
	Defense1: number;
	Defense2: number;
	MatkMin1: number;
	MatkMin2: number;
	MatkMax1: number;
	MatkMax2: number;
	Mdefense1: number;
	Mdefense2: number;
	DatkMin1: number;
	DatkMin2: number;
	DatkMax1: number;
	DatkMax2: number;
	Ddefense1: number;
	Ddefense2: number;
	Hit1: number;
	Hit2: number;
	Crit1: number;
	Crit2: number;
	CritAdd1: number;
	CritAdd2: number;
	Dodge1: number;
	Dodge2: number;
	Cut1: number;
	Cut2: number;
	CutPre1: number;
	CutPre2: number;
	Poison1: number;
	Poison2: number;
	Paralysis1: number;
	Paralysis2: number;
	Toughness1: number;
	Toughness2: number;
	Lucky1: number;
	Lucky2: number;
	Damnation1: number;
	Damnation2: number;
}

export enum AttrIds {
	Hp = 101,
	MaxHp,
	Speed,
	AtkSpe,
	AtkMin = 1001,
	AtkMax,
	Defense,
	MatkMin,
	MatkMax,
	Mdefense,
	DatkMin,
	DatkMax,
	Ddefense,
	Hit = 2001,
	Crit,
	CritAdd,
	Dodge,
	Cut,
	CutPre,
	Poison,
	Paralysis,
	Toughness,
	Lucky,
	Damnation,
}

export let AttrArray = [
	AttrIds.Hp,
	AttrIds.MaxHp,
	AttrIds.Speed,
	AttrIds.AtkSpe,
	AttrIds.AtkMin,
	AttrIds.AtkMax,
	AttrIds.Defense,
	AttrIds.MatkMin,
	AttrIds.MatkMax,
	AttrIds.Mdefense,
	AttrIds.DatkMin,
	AttrIds.DatkMax,
	AttrIds.Ddefense,
	AttrIds.Hit,
	AttrIds.Crit,
	AttrIds.CritAdd,
	AttrIds.Dodge,
	AttrIds.Cut,
	AttrIds.CutPre,
	AttrIds.Poison,
	AttrIds.Paralysis,
	AttrIds.Toughness,
	AttrIds.Lucky,
	AttrIds.Damnation,
]

export const AttrStr = {
	Hp: "Hp",
	MaxHp: "MaxHp",
	Speed: "Speed",
	AtkSpe: "AtkSpe",
	AtkMin: "AtkMin",
	AtkMax: "AtkMax",
	Defense: "Defense",
	MatkMin: "MatkMin",
	MatkMax: "MatkMax",
	Mdefense: "Mdefense",
	DatkMin: "DatkMin",
	DatkMax: "DatkMax",
	Ddefense: "Ddefense",
	Hit: "Hit",
	Crit: "Crit",
	CritAdd: "CritAdd",
	Dodge: "Dodge",
	Cut: "Cut",
	CutPre: "CutPre",
	Poison: "Poison",
	Paralysis: "Paralysis",
	Toughness: "Toughness",
	Lucky: "Lucky",
	Damnation: "Damnation",
}

export class Attribute {
	[AttrIds.Hp]: number = 0;
	[AttrIds.MaxHp]: number = 0;
	[AttrIds.Speed]: number = 240;
	[AttrIds.AtkSpe]: number = 1500;
	[AttrIds.AtkMin]: number = 0;
	[AttrIds.AtkMax]: number = 0;
	[AttrIds.Defense]: number = 0;
	[AttrIds.MatkMin]: number = 0;
	[AttrIds.MatkMax]: number = 0;
	[AttrIds.Mdefense]: number = 0;
	[AttrIds.DatkMin]: number = 0;
	[AttrIds.DatkMax]: number = 0;
	[AttrIds.Ddefense]: number = 0;
	[AttrIds.Hit]: number = 0;
	[AttrIds.Crit]: number = 0;
	[AttrIds.CritAdd]: number = 0;
	[AttrIds.Dodge]: number = 0;
	[AttrIds.Cut]: number = 0;
	[AttrIds.CutPre]: number = 0;
	[AttrIds.Poison]: number = 0;
	[AttrIds.Paralysis]: number = 0;
	[AttrIds.Toughness]: number = 0;
	[AttrIds.Lucky]: number = 0;
	[AttrIds.Damnation]: number = 0;

	add(attr: Attribute): Attribute {
		for (const key of AttrArray) {
			this[key] += attr[key];
		}
		return this;
	}

	addCopy(attr: Attribute): Attribute {
		let attrn = new Attribute();
		for (const key of AttrArray) {
			attrn[key] += attr[key];
		}
		return attrn;
	}
}

export enum ItemType {
	Gold = 1, // 元宝
	Coin, // 银币
	Exp, // 经验
	Consume = 100, // 消耗品
	Waste,
	ComMat, // 通用材料
	DrugMat,// 药品材料
	Drug,// 药品
	EquipMat,// 装备材料
	Equip,// 装备
}

export enum EquipPos {
	Weapon = 1, // 武器位置
	Hat,
	Clothes,
	Ring1,
	Ring2,
	Shoes,
}
import Role from "./Role";
import { AttrIds } from "../common/G";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RoleEx extends cc.Component {

    @property(cc.ProgressBar)
    hpBar: cc.ProgressBar = null;

    @property(cc.Label)
    nameLabel: cc.Label = null;

    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
        this.nameLabel.string = v;
    }
    
    role: Role = null;

    start(){
        
    }

    setRole(role: Role){
        this.role = role;
        this.hpBar.node.y = this.role.warrior.pixHight + 10;
        this.nameLabel.node.y = -20;
        this.nameLabel.string = role.model.name;
        this.hpBar.progress = role.model.attr[AttrIds.Hp] / role.model.attr[AttrIds.MaxHp];
    }

    update (dt) {
        if(this.role == null){
            return;
        }
        this.checkRolePos();
        this.checkHp();
    }

    checkHp(){
        this.hpBar.progress = this.role.model.attr[AttrIds.Hp] / this.role.model.attr[AttrIds.MaxHp]; 
    }

    checkRolePos(){
        this.node.x = this.role.pixx;
        this.node.y = this.role.pixy;
    }
}
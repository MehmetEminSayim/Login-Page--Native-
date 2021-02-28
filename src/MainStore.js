import { observable, action, makeObservable, computed, autorun, reaction} from "mobx";

class MainStore {
  @observable name = "Mehmet emin";
  @observable surname = "Sayım"

  constructor() {
    makeObservable(this);
    autorun(()=>{
      //alert(this.name)
    })
    reaction(()=> this.name, name =>{
      if (name == "Metge"){
        alert("İsim metge oldu bırak artık");
      }
    })
  }

  @computed get fullName (){
    return `${this.name} ${this.surname}`
  }

  @action getName () {
    return name;
  }

  @action setData (name , surname){
    this.name = name;
    this.surname = surname
  }

  @action setName (name) {
    this.name = name;
  }

}

export default new MainStore();

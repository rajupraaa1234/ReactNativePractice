import {observable,action} from 'mobx'

export class LoginStore{
    @observable LoginedUser = "Anonomous";

    @action setUser(user){
        this.LoginedUser = user;
    }
}


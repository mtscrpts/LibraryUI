import { Injectable } from "@angular/core";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { forkJoin, mergeMap, of, tap } from "rxjs";
import { FetchUser, RemoveUser } from "../actions/user.action";
import { AuthService } from "../../services/auth.service";

export class UserStateModel {
    userName: any;
}

@State<UserStateModel>({
    name: 'user',
    defaults: {
        userName: null,
    },
})
@Injectable()
export class UserState {
    constructor(private authService: AuthService) {}

    @Selector()
    static getUserName(state: UserStateModel) {
        return state;
    }

    @Selector()
    static removeUserName(state: UserStateModel) {
        return state;
    }

    @Action(FetchUser)
    fetchUser({patchState}: StateContext<UserStateModel>) {
        return this.authService.getUserName().pipe(tap((result) => {
            patchState({
                userName: result.name
            });
        }));
    }

    @Action(RemoveUser)
    removeUser({patchState}: StateContext<UserStateModel>) {
        patchState({
            userName: null
        });
    }
}

import { Injectable } from "@angular/core";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { forkJoin, mergeMap, of, tap } from "rxjs";
import { FetchUser, RemoveUser } from "../actions/user.action";
import { AuthService } from "../../services/auth.service";
import { CategoryService } from "../../services/category.service";
import { ActivatedRouteSnapshot } from "@angular/router";
import { FetchCategory } from "../actions/category.action";

export class CategoryStateModel {
    'categoryId': any;
    'name': string;
    'description'?: string;
}

@State<CategoryStateModel>({
    name: 'category',
    defaults: {
        categoryId: null,
        name: '',
        description: ''
    },
})
@Injectable()
export class CategoryState {
    constructor(
        private categoryService: CategoryService,
        private route: ActivatedRouteSnapshot
    ) {}

    @Selector()
    static getCategory(state: CategoryStateModel) {
        return state;
    }

    @Action(FetchCategory)
    fetchCategory({patchState}: StateContext<CategoryStateModel>) {
        const id = this.route.params['id'];
        return this.categoryService.getCategoryById(id).pipe(tap((result) => {
            patchState(result);
        }));
    }
}

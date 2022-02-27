import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { BasketAction } from './basket.actions';

export class BasketStateModel {
  public items: string[];
}

const defaults = {
  items: []
};

@State<BasketStateModel>({
  name: 'basket',
  defaults
})
@Injectable()
export class BasketState {
  @Action(BasketAction)
  add({ getState, setState }: StateContext<BasketStateModel>, { payload }: BasketAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}

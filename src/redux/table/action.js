import {requestPlayer } from './service'

export const FETCH_PLAYERS = 'FETCH_PLAYERS';

export function fetchAllData(){
  return async(dispatch) => {
      let lista = await requestPlayer();
      dispatch(loadList(lista))
  }
}

export function loadList(list = []) {
  return {
    type: "LOAD-LIST",
    value: list
  }
}
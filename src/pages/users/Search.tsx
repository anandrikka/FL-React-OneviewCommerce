import { ChangeEvent, FC, useCallback } from "react";
import { Dispatch } from "redux";
import { simpleAction } from "../../config/redux/utils";
import { actionTypes } from "./reducer";

type SearchProps = {
  dispatch: Dispatch,
  searchTerm: string
}

export const Search: FC<SearchProps> = ({ dispatch, searchTerm }) => {
  
  const onChangeCb = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(simpleAction({
      type: actionTypes.SET_FILTER_TEXT,
      searchTerm: value,
    }));
  }, [dispatch])

  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" value={searchTerm} onChange={onChangeCb} data-testid="name-search" />
      <div className="input-group-append">
        <span className="input-group-text">Search</span>
      </div>
    </div>
  )
}
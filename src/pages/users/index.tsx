import { FC, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Table, { TableConfigItem } from '../../components/table/Table';
import { useAppSelector } from '../../config/redux/hooks';
import { simpleAction, thunkAsyncAction } from '../../config/redux/utils';
import { User } from './types';
import { actionTypes as userPostsActionTypes } from '../user-posts/reducer';
import { Search } from './Search';

const config: TableConfigItem[] = [
  { column: 'name', header: 'Name' },
  { column: 'email', header: 'Email' },
  { column: 'city', header: 'City' },
  { column: 'company', header: 'Company' }
]

type UsersPageProps = {} & RouteComponentProps;

const UsersPage: FC<UsersPageProps> = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, data, searchTerm } = useAppSelector(state => state.users)

  useEffect(() => {
    dispatch(thunkAsyncAction({ url: '/users', method: 'GET', type: 'USERS' }));
  }, [dispatch])

  const onRowClick = useCallback((row: User) => {
    dispatch(simpleAction({
      type: userPostsActionTypes.SET_SELECTED_USER,
      user: row.name,
    }))
    history.push(`/user/${row.id}/posts`);
  }, [history, dispatch]);

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  const filteredData = data.filter((user: User) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <div className="row">
        <div className="col-12">
          <Search dispatch={dispatch} searchTerm={searchTerm} />
        </div>
        <div className="col-12">
          <Table config={config} data={filteredData} pk="id" onRowClick={onRowClick} />
        </div>
      </div>
    </>
  )
}

export default UsersPage;

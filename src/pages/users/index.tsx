import { FC, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Table, TableConfigItem } from '../../components/table/Table';
import { useAppSelector } from '../../config/redux/hooks';
import { simpleAction, thunkAsyncAction } from '../../config/redux/utils';
import { User } from './types';
import { actionTypes as userPostsActionTypes } from '../user-posts/reducer';

const config: TableConfigItem[] = [
  { column: 'name', header: 'Name' },
  { column: 'email', header: 'Email' },
  { column: 'city', header: 'City' },
  { column: 'company', header: 'Company' }
]

type UsersPageProps = {} & RouteComponentProps;

export const UsersPage: FC<UsersPageProps> = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, data } = useAppSelector(state => state.users)

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

  return (
    <div className="users-container">
      <Table config={config} data={data} pk="id" onRowClick={onRowClick} />
    </div>
  )
}

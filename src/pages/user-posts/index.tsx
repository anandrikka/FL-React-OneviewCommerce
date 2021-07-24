import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Table, { TableConfigItem } from '../../components/table/Table';
import { useAppSelector } from '../../config/redux/hooks';
import { thunkAsyncAction } from '../../config/redux/utils';
import { KeyValuePair } from '../../types';

const config: TableConfigItem[] = [
  { column: 'title', header: 'Title' },
  { column: 'body', header: 'Body' },
];

type UserPostsPageProps = { } & RouteComponentProps;

const UserPostsPage: FC<UserPostsPageProps> = ({ history, match }) => {
  const dispatch = useDispatch();
  const { loading, data, selectedUser } = useAppSelector(state => state.posts);
  useEffect(() => {
    const params = match.params as KeyValuePair;
    const reqParams = {
      userId: params.id
    }
    dispatch(thunkAsyncAction({ url: '/posts', method: 'GET', type: 'USER_POSTS', params: reqParams }))
  }, [match, dispatch])
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className="row">
      <div className="col-12">
        <button className="btn btn-primary mb-3" onClick={history.goBack}>Go Back</button>
      </div>
      <div className="col-12">
        <p>Posts from <strong>{selectedUser}</strong>:</p>
      </div>
      <div className="col-12">
        <Table config={config} data={data} pk="id" />
      </div>
    </div>
  )
}

export default UserPostsPage;

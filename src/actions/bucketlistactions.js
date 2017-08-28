import instance from '../config/axiosconfig';

export const getBucketLists = () => ({
  type: 'GET_BUCKETLISTS',
  payload: instance.get('/bucketlists'),
});

export const postBucketList = ({ name, completed_by }) => ({
  type: 'POST_BUCKETLISTS',
  payload: instance.post('/bucketlists', { name, completed_by }),
});

export const deleteBucketList = id => ({
  type: 'DELETE_BUCKETLISTS',
  payload: instance.delete(`/bucketlists/${id}`),
});

export const putBucketList = (id, { name, completed_by }) => ({
  type: 'EDIT_BUCKETLISTS',
  payload: instance.put(`/bucketlists/${id}`, { name, completed_by }),
});

export const addBucketListItem = (id, { name }) => ({
  type: 'POST_ITEMS',
  payload: instance.post(`/bucketlists/${id}/items`, { name }),
});

export const editBucketListItem = (id, itemId, { name, completed }) => ({
  type: 'EDIT_ITEMS',
  payload: instance.put(`/bucketlists/${id}/items/${itemId}`, { name, completed }),
});

export const deleteBucketListItem = (id, itemId) => ({
  type: 'DELETE_ITEMS',
  payload: instance.delete(`/bucketlists/${id}/items/${itemId}`),
});

export const selectBucketList = id => ({
  type: 'SELECT_BUCKETLIST',
  payload: id,
});

export const selectBucketItem = id => ({
  type: 'SELECT_ITEM',
  payload: id,
});


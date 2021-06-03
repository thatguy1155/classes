import {
  getQuery, postQuery, updateQuery, deleteQuery,
} from '../Api/CRUD_Queries';

export const getData = async (info) => {
  const success = await getQuery(info);
  return success;
};

export const postData = async (info) => {
  const postedData = await postQuery(info);
  return postedData;
};

export const editData = async (info) => {
  const editedData = await updateQuery(info);
  return editedData;
};

export const deleteData = async (info) => {
  const deletedData = await deleteQuery(info);
  return deletedData;
};

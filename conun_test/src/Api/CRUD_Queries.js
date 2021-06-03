import axios from 'axios';

export async function getQuery(searchInfo) {
  const { artist, song } = searchInfo;
  let result;
  const URL = `http://localhost:4000/setlist/${artist}/${song}`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'Gf5newwj79B-Tfo0c1T8W2uxgAZnlurXS6Hs',
    },
  };
  try {
    result = await axios.get(`${URL}`, config);
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function postQuery(searchInfo) {
  const { artist, song } = searchInfo;
  let result;
  const URL = `http://localhost:4000/setlist/${artist}/${song}`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'Gf5newwj79B-Tfo0c1T8W2uxgAZnlurXS6Hs',
    },
  };
  try {
    result = await axios.post(`${URL}`, config);
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function updateQuery(searchInfo) {
  const { artist, song } = searchInfo;
  let result;
  const URL = `http://localhost:4000/setlist/${artist}/${song}`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'Gf5newwj79B-Tfo0c1T8W2uxgAZnlurXS6Hs',
    },
  };
  try {
    result = await axios.post(`${URL}`, config);
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function deleteQuery(searchInfo) {
  const { artist, song } = searchInfo;
  let result;
  const URL = `http://localhost:4000/setlist/${artist}/${song}`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'Gf5newwj79B-Tfo0c1T8W2uxgAZnlurXS6Hs',
    },
  };
  try {
    result = await axios.post(`${URL}`, config);
    return result.data;
  } catch (error) {
    return error;
  }
}

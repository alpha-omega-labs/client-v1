import axios from "axios";

const baseUrl = "http://162.55.97.214:42537/api";

const getFromGSheet = async url => {
  //const res =  {addresses:['a','b','c'], amount: [1,2,3]}
  const res = await axios.post(`${baseUrl}/get-data-from-sheet`, url);
  return res.data;
};

const Api = {
  getFromGSheet
};

export default Api;

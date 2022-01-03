import axios from "axios";

export const POST = (data) => {
  axios({
    method: "post",
    url: "https://roombuds-e4b1e-default-rtdb.asia-southeast1.firebasedatabase.app/data.json",
    data: {
      id: data.id,
      text: data.text,
    },
  });
};

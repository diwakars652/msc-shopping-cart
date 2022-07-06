import axios from "axios";
import { useQuery } from "react-query";

const LoadItems = () => {
  const getItems = async () => {
    const response = await axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    });
    return response;
  };
  const query = useQuery("items", getItems);
  return query;
};

export default LoadItems;

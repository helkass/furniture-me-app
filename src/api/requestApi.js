import { useEffect, useState } from "react";

export const requestApi = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   async function fetchData() {
      setLoading(true);
      const response = await fetch("./src/data/products.json");
      const json = await response.json();

      if (response.ok) {
         setData(json);
      } else {
         setError(true);
      }

      setLoading(false);
   }

   useEffect(() => {
      fetchData();
   }, []);

   return { data, loading, error };
};

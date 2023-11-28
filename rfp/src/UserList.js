const requestOne = axios.get("https://jsonplaceholder.typicode.com/users");

axios
 .all([requestOne])
 .then(axios.spread((firstResponse) => {
     console.log(firstResponse.data);
   })
 )
 .catch(errors => {
   console.error(errors);
 });
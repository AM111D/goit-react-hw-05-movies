const FetchFilmsApi = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=69130d0521ed03b58ebb84abea94c8b9`
  );
  if (!response.ok) {
    throw new Error(`Could not fetch images, received ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export default FetchFilmsApi;

// const FetchImageApi = async (imagesName, page = 1) => {
//   const response = await fetch(
//     `https://pixabay.com/api/?key=25187003-ac92f0861cd819d45c4ecbcb8&q=${imagesName}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
//   );
//   if (!response.ok) {
//     throw new Error(`Could not fetch images, received ${response.status}`);
//   }
//   const data = await response.json();
//   return data.hits;
// };

// export default FetchImageApi;

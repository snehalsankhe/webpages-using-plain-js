
export const fetchData = (url) => {
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    return{
      message: 'successful',
      data: data,
    }
  })
  .catch(error => {
    return{
      message: 'error',
      error: error,
    }
  });
};

// fetchData(dataURL).then(data =>{
//   console.log('---data', data )
//   return data;
// })



// getData(dataURL);


// export const getData = async () =>{
//  let data = await fetch(dataURL)
//   data = await data.json();
//   // console.log('data', data)
//   return data;
// }
// console.log('--getdata',getData())
// getData();


// getData().then(data => {
//   console.log('data', data)
// })
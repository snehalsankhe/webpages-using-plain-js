const dataURL = 'https://sayalijoshi27.github.io/JS-Tasks/webpage-data.json'

// export const getData = (url) =>{
//   fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));
// } 

// getData(dataURL);


export const getData = async () =>{
 let data = await fetch(dataURL)
  data = await data.json();
  // console.log('data', data)
  return data;
}
// console.log('--getdata',getData())
// getData();


// getData().then(data => {
//   console.log('data', data)
// })
const dataUrl = 'https://sayalijoshi27.github.io/JS-Tasks/webpage-data.json'

export const getData = async() => {
  try {
    let data = await fetch(dataUrl);
    data = await data.json();
    return data;
  } catch(err){
    console.log(".............error in rendering")
  }
};
  
  
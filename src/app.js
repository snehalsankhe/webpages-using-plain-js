import { fetchData } from  './data/data.js'
const root = document.getElementById("root");
const dataURL = 'https://sayalijoshi27.github.io/JS-Tasks/webpage-data.json'

const renderData = async () => {
  let response = await fetchData(dataURL)
  console.log('----response', response)
  return response

  // root.appendChild()
}

renderData();
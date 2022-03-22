import { fetchData } from  './data/data.js'
import { Logo } from '../src/components/logo.js'
const root = document.getElementById("root");
const dataURL = 'https://sayalijoshi27.github.io/JS-Tasks/webpage-data.json'

const renderData = async () => {
  let response = await fetchData(dataURL)
  console.log('----response', response)
  const { data : navData } = response;
  // return response
  console.log('dat----', navData)
  root.appendChild (Logo(navData.logo))
}

renderData();
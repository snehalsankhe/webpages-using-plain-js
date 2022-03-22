import { getData } from "./data/data.js";
import { Navigation } from "./components/navigation.js";
import { Banner } from "./components/banner.js";

const root = document.getElementById('root')
const renderpage = async () => {
    let data = await getData();
    console.log('---ff', data)
    root.appendChild(Navigation(data.navData));
    root.appendChild(Banner(data.bannerData))
}
renderpage();


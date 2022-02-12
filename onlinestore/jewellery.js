import navbar from "./components/navbar.js";
import {getData,appedData} from "./scripts/showdata.js"


let navbar_div =document.getElementById("navbar_container");
navbar_div.innerHTML = navbar();
let url = "https://fakestoreapi.com/products/category/jewelery";
 let res = await getData(url);

let parent =document.getElementById("data")
 appedData(res,parent)

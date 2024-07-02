import { getLocation } from "./apiHandler";
import { addMainPane, addInfoPane } from "./pageElements";
import './style.css';

const body = document.querySelector('body');

window.onload = async function() {
    await getLocation();
};

addMainPane(body);
addInfoPane(body);

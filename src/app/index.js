import 'normalize.css';

import './theme/index.scss';

// Pages
import 'Pages/index/index.js';

// Components
import 'Ui/section/index.js';

import folder from 'Ui/folder/index.js';
import 'Ui/file/index.js';


document.addEventListener('DOMContentLoaded', () => {
    folder();
})

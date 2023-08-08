import './index.scss';

const initFolder = (componentNode) => {
    const component = componentNode;
    const button = component.querySelector('[data-folder="button"]');
    const header = component.querySelector('[data-folder="header"]');
    
    if (!component || !button || !header) {
        // console.debug()
        return;
    }

    const toggle = () => {
        component.classList.toggle('is-open');
    }

    button.addEventListener('click', toggle)
    header.addEventListener('dblclick', toggle)
}  

const folder = () => {
    const componentNodes = Array.from(document.querySelectorAll('[data-component="folder"]'));
  
    componentNodes.forEach(initFolder);
}

export default folder;
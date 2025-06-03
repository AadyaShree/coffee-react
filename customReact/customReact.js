
function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML=reactElememt.children;
    // domElement.setAttribute('href', reactElememt.props.href);
    // domElement.setAttribute('target', reactElememt.props.target);

    // container.appendChild(domElement);

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML=reactElememt.children;
    for (const prop in reactElement.props){
        domElement.setAttribute(prop,reactElememt.props[prop]);
    }
    container.appendChild(domElement);


}
const reactElememt = {
    type : 'a',
    props :{
        href : 'https://www.google.com',
        target: '_blank'
    },
    children :'visit google'

}

const mainContainer=document.querySelector('#root')
customRender(reactElememt, mainContainer);


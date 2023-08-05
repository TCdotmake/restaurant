const mkEle = (tag, content)=>{
    const element = document.createElement(tag);
    element.innerHTML = content;
    return element;
}

export default mkEle;
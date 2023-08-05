//router
//  arguments: (parent, child)
//  takes in a container/parent element
//  empty it and append child from argument

const route = (parent, child) =>{
    if(parent.hasChildNodes){
        while(parent.firstChild){
            parent.removeChild(parent.lastChild);
        }
    }
    parent.appendChild(child);
}

export default route;
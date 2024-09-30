import instance from "./film";

const getAll = ()=>{
    return instance.get(`/products`)
}
const get= (slug)=>{
    return instance.get('/products/'+slug)
}
export {getAll,get}
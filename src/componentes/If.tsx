export default (props: any) =>{
    if(props.valdo){
        return props.children
    }else{
        return false
    }
}
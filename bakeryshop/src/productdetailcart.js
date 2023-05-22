export function ProductDetailCard({
    id,
    title,
    price,
    src
}){
    return (
        <div key={id}>
        <img src={src} alt="not found" />
        <h1>title : {title}</h1>
        <p> price:{price}</p>
        
        </div>
    )
}
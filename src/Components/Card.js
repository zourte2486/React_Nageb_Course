

export default function Card(props){
    return<div >
        <img src={props.img} style={{ width: "400px" }} alt="img"/>
        <div style={{ }}>
        <h3>{props.review}</h3>
        <h1>{props.title}</h1>
        </div>
        <h3>{props.desc}</h3>
        <h3>{props.price}$ night</h3>
    </div>
}
import { data } from "../data";
import Card from "./Components/Card";   



export default function App() {
    const dataShow = data.map((item) => <Card/>);
    return <div></div>;
}
import { useParams } from "react-router-dom";

function Greeting() {
    const params = useParams();
    return <h1>Hello {params.name}</h1>
}
export default Greeting;
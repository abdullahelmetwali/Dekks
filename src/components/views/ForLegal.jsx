import { useParams } from "react-router-dom"
const ForLegal = () => {
    const param = useParams()
    return (
        <h1 className="article-txt text-center my-36"><span className="text-[#a3a3a3]">Hey Yoo! This is</span> {param.item.toUpperCase()} PAGE.</h1>
    )
}
export default ForLegal
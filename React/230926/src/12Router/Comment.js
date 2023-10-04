import { useParams, useOutletContext } from "react-router-dom"
import { users } from "./User"
export default function Comment() {

    const ctx = useOutletContext()
    console.log(ctx)

    return (
        <>
            {
                ctx.map(((comment, index) => {
                    return(
                        <p key={index}>{comment}</p>
                    )
                }))
            }
        </>
    )
}
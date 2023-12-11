import { useParams } from "react-router"

function SinglePost() {
    const {id} = useParams()
  return (
    <div>SinglePost {id}</div>
  )
}

export default SinglePost
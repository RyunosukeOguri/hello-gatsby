import * as React from "react"
import { Link } from "gatsby"

type Props = {
  data: Item
}

interface Item {
  id: number
  title: string
  author: string
}

const ListItem = ({ data }: Props ) => (
  <Link to={`/posts/${data.id}`}>
    <a>
      title: {data.title}, author: {data.author}
    </a>
  </Link>
)

export default ListItem

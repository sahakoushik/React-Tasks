import { useState } from "react"
import explorer from "./data/folderData"
import Folder from "./component/Folder"

const Main = () => {
  const [explorerData, setExplorerData] = useState(explorer)
  return (
    <div>
      <Folder explorer={explorerData}/>
    </div>
  )
}

export default Main
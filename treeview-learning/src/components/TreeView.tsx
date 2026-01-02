import type { TreeNode } from "../types/tree";
import { TreeNodeItem } from "./TreeNodeItem";
import "../styles/tree.css";

interface TreeViewProps{
  data: TreeNode[];
}

export function TreeView({data}:TreeViewProps){
  return(
    <div className="treeno" role="tree" aria-label="Tree View">
      {data.map((node)=>(
        <TreeNodeItem
        key={node.id}
        node={node}
        level={1}/>
      ))}
    </div>
  )
}
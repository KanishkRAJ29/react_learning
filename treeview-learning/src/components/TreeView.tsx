import type { TreeNode } from "../types/tree";
import { TreeNodeItem } from "./TreeNodeItem";


interface TreeViewProps{
  data: TreeNode[];
}

export function TreeView({data}:TreeViewProps){
  return(
    <div role="tree" aria-label="Tree View">
      {data.map((node)=>(
        <TreeNodeItem
        key={node.id}
        node={node}
        level={1}/>
      ))}
    </div>
  )
}
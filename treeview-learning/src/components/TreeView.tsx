import type { TreeNode } from "../types/tree";
import { TreeNodeItem } from "./TreeNodeItem";
import "../styles/tree.css";
import { useState } from "react";

interface TreeViewProps{
  data: TreeNode[];
}

export function TreeView({data}:TreeViewProps){
   const [activeId, setActiveId] = useState<string | null>(null);
  return(
    <div className="tree" role="tree" aria-label="Tree View">
      {data.map((node)=>(
        <TreeNodeItem
        key={node.id}
        node={node}
        level={1}
        activeId={activeId}
        setActiveId={setActiveId}
        parentActive={false}
        />
      ))}
    </div>
  )
}
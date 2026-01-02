import { useState } from "react";
import type { TreeNode } from "../types/tree";

interface TreeNodeItemProps {
  node: TreeNode;
  level: number;
}

export function TreeNodeItem({ node, level }: TreeNodeItemProps) {
  const hasChildren = Boolean(
    (node.children && node.children.length > 0) || node.hasChildren
  );

  const [isExpanded, setIsExpanded] = useState(false);

  function toggle() {
    if (!hasChildren) {
      return;
    }
    setIsExpanded((prev) => !prev);
  }

  return (
    <div>
      {/*Tree Item*/}
      <div role="treeitem" aria-level={level}
      aria-expanded={hasChildren?isExpanded:undefined}
      >
        <div style={{ paddingLeft: (level - 1) * 16,cursor: hasChildren?"pointer":"default" }} onClick={toggle}>
          {hasChildren&&(isExpanded?"||":">")}
          
          {node.label}</div>
      </div>

      {/*child group*/}
      {hasChildren && isExpanded && node.children &&(
        <div role="group">
          {node.children.map((child) => (
            <TreeNodeItem 
            key={child.id} 
            node={child} 
            level={level + 1}
             />
          ))}
        </div>
      )}
    </div>
  );
}

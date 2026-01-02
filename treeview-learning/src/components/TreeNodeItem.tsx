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
  const levelStyle={["--level" as any]:level}
  return (
    <div className="tree__node" style={levelStyle}>
      {/*Tree Item*/}
      <div className="tree__row" role="treeitem" aria-level={level}
      aria-expanded={hasChildren?isExpanded:undefined}
      >
        <span
          className={
            "tree__arrow " +
            (hasChildren ? "is-expandable " : "is-hidden ") +
            (isExpanded ? "is-open" : "")
          }
          onClick={toggle}
          aria-hidden={true}
        />
        <div
          className={
            "tree__label " + (hasChildren ? "tree__label--clickable" : "")
          }
          onClick={toggle}
        >
          {node.label}
        </div>
      </div>

      {/*child group*/}
      {hasChildren && isExpanded && node.children &&(
        <div className="tree__group" role="group">
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

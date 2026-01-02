import type { TreeNode } from "../types/tree";

interface TreeNodeItemProps {
  node: TreeNode;
  level: number;
}

export function TreeNodeItem({ node, level }: TreeNodeItemProps) {
  const hasChildren = Boolean(node.children && node.children.length > 0);
  return (
    <div>
      {/*Tree Item*/}
      <div role="treeitem" aria-level={level}>
        <div style={{ paddingLeft: (level-1) * 16 }}>{node.label}</div>
      </div>

      {/*child group*/}
      {hasChildren && (
        <div role="group">
          { node.children!.map((child)=>(
            <TreeNodeItem
            key={child.id}
            node={child}
            level={level + 1}/>
            
          ))}
        </div>
      )}

      
    </div>
  );
}

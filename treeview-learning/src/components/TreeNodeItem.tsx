import type { TreeNode } from "../types/tree";

interface TreeNodeItemProps {
  node: TreeNode;
  level: number;
}

export function TreeNodeItem({ node, level }: TreeNodeItemProps) {
  return (
    <div>
      {/*Node label*/}
      <div style={{ paddingLeft: level * 16 }}>{node.label}</div>

      {/*children*/}
      {node.children &&
        node.children.map((child) => (
          <TreeNodeItem key={child.id} node={child} level={level + 1} />
        ))}
    </div>
  );
}

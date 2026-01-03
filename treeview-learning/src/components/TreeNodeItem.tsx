import { memo, useState } from "react";
import type { TreeNode } from "../types/tree";

interface TreeNodeItemProps {
  node: TreeNode;
  level: number;
  activeId: string | null;
  setActiveId: (id: string|null) => void;
  parentActive?: boolean;
}

function TreeNodeItemInner({
  node,
  level,
  activeId,
  setActiveId,
  parentActive = false,
}: TreeNodeItemProps) {
  const hasChildren = Boolean(
    (node.children && node.children.length > 0) || node.hasChildren
  );
  const isActive = activeId === node.id;

  const [isExpanded, setIsExpanded] = useState(false);

  function toggle() {
    if (!hasChildren) {
      return;
    }
    const next = !isExpanded;
    setIsExpanded(next);

    // only set active when node becomes expanded; clear on collapse
    setActiveId(next ? node.id : null);
  }
  const levelStyle = { ["--level" as any]: level };
  const rowClass =
    "tree__row " +
    (isActive ? "is-active " : "") +
    (!isActive && parentActive ? "is-child-of-active " : "") +
    (isExpanded && !isActive ? "is-expanded-passive " : "");

  const arrowClass =
    "tree__arrow " +
    (hasChildren ? "is-expandable " : "is-hidden ") +
    (isExpanded ? "is-open" : "");
  return (
    <div className="tree__node" style={levelStyle}>
      {/*Tree Item*/}
      <div
        className={
          rowClass
        }
        role="treeitem"
        aria-level={level}
        aria-expanded={hasChildren ? isExpanded : undefined}
      >
        <span
          className={arrowClass
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
      {hasChildren && isExpanded && node.children && (
        <div className="tree__group" role="group">
          {node.children.map((child) => (
            <MemoizedTreeNodeItem
              key={child.id}
              node={child}
              level={level + 1}
              activeId={activeId}
              setActiveId={setActiveId}
              parentActive={isActive}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const MemoizedTreeNodeItem = memo(TreeNodeItemInner);

export { MemoizedTreeNodeItem as TreeNodeItem };
//prevents re-render of a node if its props didn’t change when parent re-renders.
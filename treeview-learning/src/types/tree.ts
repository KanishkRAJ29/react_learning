export type NodeId =string;
export interface TreeNode<T = unknown>{
  id: NodeId;
  label: string;
  data?:T;

  children?:TreeNode<T>[];
  hasChildren?: boolean;
  isLoading?: boolean;
}
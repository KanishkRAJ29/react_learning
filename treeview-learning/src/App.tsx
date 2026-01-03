import { TreeView } from "./components/TreeView";
import { makeSmallTree } from "./utils/generateTestTree";

export default function App() {
  const treeData = makeSmallTree();

  return (
    <div style={{ padding: 20 }}>
      <h1>TreeView Learning </h1>

      <aside className="sidebar">
      <TreeView data={treeData}/>

      </aside>
      
    </div>
  );
}

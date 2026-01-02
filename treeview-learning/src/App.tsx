import { TreeView } from "./components/TreeView";
import { makeSmallTree } from "./utils/generateTestTree";

export default function App() {
  const treeData = makeSmallTree();

  return (
    <div style={{ padding: 20 }}>
      <h1>TreeView Learning Playground</h1>

      {/* TreeView will be mounted here later */}
      <TreeView data={treeData}/>
      
    </div>
  );
}

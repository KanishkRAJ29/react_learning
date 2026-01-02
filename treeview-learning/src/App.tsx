import { makeSmallTree } from "./utils/generateTestTree";

export default function App() {
  const treeData = makeSmallTree();

  return (
    <div style={{ padding: 20 }}>
      <h1>TreeView Learning Playground</h1>

      {/* TreeView will be mounted here later */}
      <pre>{JSON.stringify(treeData, null, 2)}</pre>
    </div>
  );
}

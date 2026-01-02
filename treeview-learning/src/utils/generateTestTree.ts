import type { TreeNode } from "../types/tree";

export function makeSmallTree():TreeNode[]{
  return [
    {
      id: "1",
      label:"Application",
      children:[
        {
          id:
"1-1",
label:"VS Code",
      },
      {
        id:"1-2",
        label:"Chrome",
      },
      ],
    },
    {
      id:"2",
      label:"Documents",
      children:[
        {
          id:"2-1",
          label:"Projects",
          children:[
            {
              id:"2-1-1",
              label: "TreeView",
            },
          ],
        },
        {
          id:"2-2",
          label:"Resume.pdf",
        },
      ],
    },
     {
      id: "3",
      label: "Downloads",
      hasChildren: true, // simulate lazy-loaded folder
    },
  ];
}
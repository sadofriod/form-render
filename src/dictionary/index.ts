/** @format */

const testDic: IDictionary[] = [
  {
    name: "root",
    type: "Default",
    label: "root node",
    children: [
      {
        name: "name",
        type: "Text",
        label: "user name",
        defaultValue: "ashes born",
      },
      {
        name: "sex",
        type: "Text",
        label: "user sex",
        defaultValue: 1,
        props: {
          mapProps: {
            option: [
              {
                key: 1,
                value: "boy",
              },
              {
                key: 0,
                value: "girl",
              },
            ],
          },
        },
      },
      {
        name: "password",
        type: "Text",
        label: "password",
        defaultValue: "123456",
        props: {
          mapProps: {
            placeholder: "please input your password",
            inputType: "password",
          },
        },
      },
      {
        name: "voke",
        type: "Default",
        label: ["insert", "delete", "update", "select"],
        props: {
          mapProps: {
            isOpen: true,
          },
        },
        nested: true,
        defaultValue: [0, 1, 1, 0],
        children: [
          {
            name: "rootName",
            type: "Text",

            props: {
              mapProps: {
                option: [
                  {
                    key: 1,
                    value: "Yes",
                  },
                  {
                    key: 0,
                    value: "No",
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
];

export default testDic;

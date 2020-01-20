import { TreeTableNode } from '../models';
import { Folder } from './models';

export const mockTreeTableTree: TreeTableNode<Folder> = {
  value: {
    name: 'Reports',
    owner: 'Eric',
    column2: '',
    column3: '',
    column4: '',
    column5: '',
    column6: '',
    column7: '',
    protected: true,
    backup: true
  },
  children: [
    {
      value: {
        name: 'Charts',
        owner: 'Stephanie',
        column2: '',
        column3: '',
        column4: '',
        column5: '',
        column6: '',
        column7: '',
        protected: false,
        backup: true
      },
      children: [],
      id: '34e8b657-cbde-4ab7-888f-0c95e1e73dee',
      depth: 1,
      isExpanded: true,
      isVisible: true
    },
    {
      value: {
        name: 'Sales',
        owner: 'Virginia',
        column2: '',
        column3: '',
        column4: '',
        column5: '',
        column6: '',
        column7: '',
        protected: false,
        backup: true
      },
      children: [],
      id: '1c25d8e7-7c5d-4af4-8552-0425fe999fdc',
      depth: 1,
      isExpanded: true,
      isVisible: true
    },
    {
      value: {
        name: 'US',
        owner: 'Alison',
        column2: '',
        column3: '',
        column4: '',
        column5: '',
        column6: '',
        column7: '',
        protected: true,
        backup: false
      },
      children: [
        {
          value: {
            name: 'California',
            owner: 'Claire',
            column2: '',
            column3: '',
            column4: '',
            column5: '',
            column6: '',
            column7: '',
            protected: false,
            backup: false
          },
          children: [],
          id: '36faef50-fc12-4ea0-a330-3222b67fa49e',
          depth: 2,
          isExpanded: true,
          isVisible: true
        },
        {
          value: {
            name: 'Washington',
            owner: 'Colin',
            column2: '',
            column3: '',
            column4: '',
            column5: '',
            column6: '',
            column7: '',
            protected: false,
            backup: true
          },
          children: [
            {
              value: {
                name: 'Domestic',
                owner: 'Oliver',
                column2: '',
                column3: '',
                column4: '',
                column5: '',
                column6: '',
                column7: '',
                protected: true,
                backup: false
              },
              children: [],
              id: '2b0085e4-0d5c-45a9-a505-7706e1cfbc67',
              depth: 3,
              isExpanded: true,
              isVisible: true
            },
            {
              value: {
                name: 'International',
                owner: 'Oliver',
                column2: '',
                column3: '',
                column4: '',
                column5: '',
                column6: '',
                column7: '',
                protected: true,
                backup: true
              },
              children: [],
              id: '6dfb3d53-3062-44a6-9be9-e86051a2b071',
              depth: 3,
              isExpanded: true,
              isVisible: true
            }
          ],
          id: '554eea5b-e7f9-460e-95af-f7a68138fc7a',
          depth: 2,
          isExpanded: true,
          isVisible: true
        }
      ],
      id: 'c52f0131-1280-49cf-813f-57b607544220',
      depth: 1,
      isExpanded: true,
      isVisible: true
    }
  ],
  id: '20ed5fcc-d4f2-4aa3-b5a2-57d9a91057a7',
  depth: 0,
  isExpanded: true,
  isVisible: true
};

import { SearchableNode } from '../models';
import { Folder } from './models';

export const mockSearchableTree: SearchableNode<Folder> = {
  id: '1',
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
      id: '11',
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
      children: []
    },
    {
      id: '12',
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
      children: []
    },
    {
      id: '13',
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
          id: '131',
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
          children: []
        },
        {
          id: '132',
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
              id: '1321',
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
              children: []
            },
            {
              id: '1322',
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
              children: []
            }
          ]
        }
      ]
    }
  ]
};

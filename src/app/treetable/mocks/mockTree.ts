import { Node } from '../models';
import { Folder } from './models';

export const mockTree: Node<Folder> = {
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
      children: []
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
      children: []
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
          children: []
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
              children: []
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
              children: []
            }
          ]
        }
      ]
    }
  ]
};


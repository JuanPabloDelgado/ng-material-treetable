import { Node } from '../models';
import { Folder } from './models';
import { NodoTest } from './models';

export const mockTreeTest: Node<NodoTest> = {
  value: {
    nombre: 'test1',
    partida: {
      partidaPresupuestariaId: 1,
      creditoInicial: 1,
      creditoProyectado: 1,
      saldoAlerta: 1,
      creditoModificado: 1,
      cuentaPresupuestoId: 1,
      nivel: 1,
      codigo: '0001',
      codigoCompleto: '000000001',
      nombre: 'testing',
      cuentaPresupuestoSuperiorId: 1,
      tieneHijos: false,
      montoLimite: 1,
      gastosCapital: false,
      clasificacion: 'lalalala'
    },
    expandido: false,
    creditoInicial: 1,
    creditoProyectado: 1,
    creditoAsignado: 1,
    creditoVigente: 1,
    saldoAlerta: 1,
    modificacion: 1,
    creditoDiferencia: 1,
    editableModificar: false,
    montoLimite: 1
  },
  children: []
}



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


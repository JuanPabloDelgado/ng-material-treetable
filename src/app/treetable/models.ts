export interface Node<T> {
  value: T;
  children: Node<T>[];
}

interface PartidaPresupuestariaDto {
  partidaPresupuestariaId: number;
  creditoInicial: number;
  creditoProyectado: number;
  saldoAlerta: number;
  creditoModificado: number;
  cuentaPresupuestoId: number;
  nivel: number;
  codigo: string;
  codigoCompleto: string;
  nombre: string;
  cuentaPresupuestoSuperiorId: number;
  tieneHijos: false;
  montoLimite: number;
  gastosCapital: boolean;
  clasificacion: string;
}

export interface Nodo {
  hijos: Nodo[];
  nombre: string;
  partida: PartidaPresupuestariaDto;
  expandido: false;
  creditoInicial: number;
  creditoProyectado: number;
  creditoAsignado: number;
  creditoVigente: number;
  saldoAlerta: number;
  modificacion: number;
  creditoDiferencia: number;
  editableModificar: false;
  montoLimite: number;
}

export interface SearchableNode<T> extends Node<T> {
  id: string;
  children: SearchableNode<T>[];
}

export interface TreeTableNode<T> extends SearchableNode<T> {
  depth: number;
  isVisible: boolean;
  isExpanded: boolean;
  children: TreeTableNode<T>[];
}

export interface NodeInTree<T> extends SearchableNode<T> {
  pathToRoot: SearchableNode<T>[];
}

export interface Options<T> {
  verticalSeparator?: boolean;
  capitalisedHeader?: boolean;
  highlightRowOnHover?: boolean;
  customColumnOrder?: Array<keyof T> & string[];
	elevation?: number;
	firstColumnMinWidth?: string;
	firstColumnMaxWidth?: string;
	defaultColumnMinWidth?: string;
	defaultColumnMaxWidth?: string;

}

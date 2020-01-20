export interface Folder {
  name: string;
  owner: string;
  column2: string,
  column3: string,
  column4: string,
  column5: string,
  column6: string,
  column7: string,
  protected: boolean;
  backup: boolean;
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

export interface NodoTest {
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

export interface Task {
  name: string;
  completed: boolean;
  owner: string;
}


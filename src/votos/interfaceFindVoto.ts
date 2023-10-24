export interface ResponseFind {
  readonly _id: string;
  readonly infoCandidato: {
    readonly _id: string;
    readonly nombre: string;
  };

  readonly infoPartido: {
    readonly _id: string;
    readonly nombre: string;
  };
  readonly created_at: string;
}

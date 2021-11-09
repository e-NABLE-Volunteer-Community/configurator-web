export type DocumentId = string;
export type WorkspaceId = string;
export type ElementId = string;
export type PartId = string;
export type VersionId = string;
export type MicroversionId = string;
export type PartName = string;

interface BillOfMaterialsLocation {
  type: "Fusion360" | "Onshape";
}

export interface BillOfMaterials<L extends BomLocationType = BomLocationType> {
  name: string;
  location: BomLocation<L>;
  materials: Record<PartName, BomLine>;
}

export enum BomLocationType {
  Fusion360 = "Fusion360",
  Onshape = "Onshape",
}
export interface BomLocation<L extends BomLocationType> {
  type: L;
}

export interface Fusion360BomLocation
  extends BomLocation<BomLocationType.Fusion360> {
  type: BomLocationType.Fusion360;
  dir: string;
}

export interface OnshapeBomLocation
  extends BomLocation<BomLocationType.Onshape> {
  type: BomLocationType.Onshape;
  documentId: DocumentId;
  workspaceId: WorkspaceId;
}
export interface OnshapeBom extends BillOfMaterials<BomLocationType.Onshape> {
  location: OnshapeBomLocation;
}
export interface Fusion360Bom
  extends BillOfMaterials<BomLocationType.Fusion360> {
  location: Fusion360BomLocation;
}

type BomLine = BillOfMaterialsDefaultLine | BillOfMaterialsConfiguredLine;
type BillOfMaterialsDefaultLine = { count: number };
const isDefaultBomLine = (line: BomLine): line is BillOfMaterialsDefaultLine =>
  "count" in line;
type BillOfMaterialsConfiguredLine = { instances: BillOfMaterialsInstance[] };
const isConfiguredBomLine = (
  line: BomLine
): line is BillOfMaterialsConfiguredLine => "instances" in line;
type BillOfMaterialsInstance = {
  name: string;
  parameters: BillOfMaterialsParameters;
};
export type ParameterName = string;
export type BillOfMaterialsParameters = Record<ParameterName, string>;
export type Device = {
  name: string;
  documentId: DocumentId;
  workspaceId: WorkspaceId;
  billOfMaterials: BillOfMaterials;
};
export type DocumentAndWorkspaceIds = {
  documentId: string;
  workspaceId: string;
};

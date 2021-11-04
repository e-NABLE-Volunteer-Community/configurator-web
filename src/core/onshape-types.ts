export type DocumentId = string;
export type WorkspaceId = string;
export type ElementId = string;
export type PartId = string;
export type VersionId = string;
export type MicroversionId = string;
export type PartName = string;
export type BillOfMaterials = {
  documentId: DocumentId;
  workspaceId: WorkspaceId;
  materials: Record<PartName, BillOfMaterialsLine>;
};
type BillOfMaterialsLine =
  | BillOfMaterialsDefaultLine
  | BillOfMaterialsConfiguredLine;
type BillOfMaterialsDefaultLine = { count: number };
const isDefaultBomLine = (
  line: BillOfMaterialsLine
): line is BillOfMaterialsDefaultLine => "count" in line;
type BillOfMaterialsConfiguredLine = { instances: BillOfMaterialsInstance[] };
const isConfiguredBomLine = (
  line: BillOfMaterialsLine
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

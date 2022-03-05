export type DocumentId = string;
export type WorkspaceId = string;
export type ElementId = string;
export type PartId = string;
export type VersionId = string;
export type PartName = string;

export interface Authorization {
  accessToken: string;
  refreshToke: string;
}

export interface BillOfMaterials {
  name: string;
  authorization: Authorization;
  location: BillOfMaterialsLocation;
  materials: Record<PartName, BomLine>;
}

export interface BillOfMaterialsLocation {
  documentId: DocumentId;
  workspaceId: WorkspaceId;
}

type BomLine = BillOfMaterialsDefaultLine | BillOfMaterialsConfiguredLine;
type BillOfMaterialsDefaultLine = { count: number };
type BillOfMaterialsConfiguredLine = { instances: BillOfMaterialsInstance[] };
type BillOfMaterialsInstance = {
  name: string;
  parameters: BillOfMaterialsParameters;
};
export type ParameterName = string;
export type BillOfMaterialsParameters = Record<ParameterName, string>;

export type DeviceId = number;
export type Device = {
  id: DeviceId;
  name: string;
  description: string;
  documentId: DocumentId;
  workspaceId: WorkspaceId;
  billOfMaterials: BillOfMaterials;
};

export type ProfileDevice = {
  device: Device;
  notes: string;
};

export type DocumentAndWorkspaceIds = {
  documentId: string;
  workspaceId: string;
};

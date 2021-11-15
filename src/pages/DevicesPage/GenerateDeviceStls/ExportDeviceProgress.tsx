import {
  useDownloadExportedDevice,
  useExportStatus,
} from "../../../core/stores/app";
import { VFC } from "react";
import { isLoading } from "../../../core/stores/utils";
import * as R from "ramda";
import { IonButton } from "@ionic/react";
import { ExportId } from "../../../core/stores/export-status";

const ExportDeviceProgress: VFC = () => {
  const status = useExportStatus();
  console.log(status);
  const download = useDownloadExportedDevice();

  // TODO: Loading spinner
  if (!status || isLoading(status)) return <>Loading..</>;

  if (status.state === "queued") return <>Queued...</>;
  if (status.state === "exporting")
    return (
      <div>
        Exporting...
        {R.toPairs(status.parts).map(([k, v]) => (
          <div>
            {k}: {v}
          </div>
        ))}
      </div>
    );
  if (status.state === "exported") return <>Exported.</>;
  if (status.state === "zipping") return <>Zipping...</>;
  if (status.state === "completed")
    return (
      <>
        Completed.
        <IonButton onClick={() => download(status.exportId, "Phoenix V3")}>
          Download
        </IonButton>
      </>
    );

  return <>Failed.</>;
};

export default ExportDeviceProgress;

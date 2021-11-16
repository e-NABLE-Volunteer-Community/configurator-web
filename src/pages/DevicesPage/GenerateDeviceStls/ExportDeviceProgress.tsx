import { VFC } from "react";
import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonProgressBar,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./export-device-progress.css";
import {
  CompletedExportStatus,
  ExportingExportStatus,
} from "../../../core/stores/export-status";
import * as R from "ramda";
import {
  useDownloadExportedDevice,
  useExportStatus,
} from "../../../core/stores/app";
import { isLoading } from "../../../core/stores/utils";
import {
  checkmarkCircleOutline,
  ellipsisHorizontalCircleOutline,
  hourglassOutline,
  syncCircleOutline,
} from "ionicons/icons";
import * as framer from "framer-motion";
const { motion } = framer;

const Queued: VFC = () => {
  return (
    <>
      <IonContent>
        <div className="center">
          <IonText color="primary">
            <h1>On Your Marks, Get Set...</h1>
          </IonText>
          <IonText>
            <h3>Your export request is in the queue.</h3>
          </IonText>
        </div>
      </IonContent>
    </>
  );
};

const Exporting: VFC<{ status: ExportingExportStatus }> = ({ status }) => {
  const numParts = R.keys(status.parts).length;
  const numDoneParts = R.values(status.parts).filter(
    (state) => state === "exported"
  ).length;

  return (
    <>
      <IonContent>
        <div className="center">
          <IonText color="primary">
            <h1>And They're Off!</h1>
          </IonText>
          <IonText>
            <h3>Your export request is being processed.</h3>
          </IonText>
          <IonProgressBar value={numDoneParts / numParts} color="success" />
          <div className="grid">
            {R.toPairs(status.parts).map(([partName, state]) => {
              const icon = {
                pending: ellipsisHorizontalCircleOutline,
                queued: hourglassOutline,
                exporting: syncCircleOutline,
                exported: checkmarkCircleOutline,
              }[state];
              return (
                <motion.div
                  className="card-container"
                  animate={state}
                  variants={{
                    pending: { "--tint": "var(--ion-color-medium)" } as any,
                    queued: { "--tint": "var(--ion-color-medium)" } as any,
                    exporting: { "--tint": "var(--ion-color-primary)" } as any,
                    exported: { "--tint": "var(--ion-color-success)" } as any,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <IonCard>
                    <IonIcon icon={icon} color={"light"} />
                    <IonText>{partName}</IonText>
                  </IonCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </IonContent>
    </>
  );
};

const Exported: VFC = () => {
  return (
    <>
      <IonContent>
        <div className="center">
          <IonText color="primary">
            <h1>We've Got The Goods.</h1>
          </IonText>
          <IonText>
            <h3>Your export request has completed.</h3>
            <h3>Please wait while we process and save the results for you.</h3>
          </IonText>
        </div>
      </IonContent>
    </>
  );
};

const Zipping: VFC = () => {
  return (
    <>
      <IonContent>
        <div className="center">
          <IonText color="primary">
            <h1>Almost There...</h1>
          </IonText>
          <IonText>
            <h3>Your results are being zipped up for download.</h3>
          </IonText>
        </div>
      </IonContent>
    </>
  );
};

const Completed: VFC<{ status: CompletedExportStatus }> = ({ status }) => {
  const download = useDownloadExportedDevice();
  return (
    <>
      <IonContent>
        <div className="center">
          <IonText color="primary">
            <h1>All Done!</h1>
          </IonText>
          <IonText>
            <h3>Your results are ready for download.</h3>
          </IonText>
          <IonText>
            <h3>Please use the button below to download your results.</h3>
          </IonText>
          <IonButton onClick={() => download(status.exportId, "Phoenix V3")}>
            Download
          </IonButton>
        </div>
      </IonContent>
    </>
  );
};

const Failed: VFC = () => {
  return (
    <>
      <IonContent>
        <div className="center">
          <IonText color="primary">
            <h1>Failed</h1>
          </IonText>
          <IonText>
            <h3></h3>
          </IonText>
        </div>
      </IonContent>
    </>
  );
};

const ExportDeviceProgress: VFC = () => {
  const status = useExportStatus();

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Exporting Device</IonTitle>
        </IonToolbar>
      </IonHeader>
      {(() => {
        if (!status || isLoading(status)) return <>Loading</>; //TODO: Loading spinner
        switch (status?.state) {
          case "queued":
            return <Queued />;
          case "exporting":
            return <Exporting status={status} />;
          case "exported":
            return <Exported />;
          case "zipping":
            return <Zipping />;
          case "completed":
            return <Completed status={status} />;
          case "failed":
            return <Failed />;
        }
      })()}
    </>
  );
};

export default ExportDeviceProgress;

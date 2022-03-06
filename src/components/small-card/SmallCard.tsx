import { VFC } from "react";
import { IonImg, IonItem, IonLabel } from "@ionic/react";
import "./small-card.scss";

type SmallCardProps = {
  routerLink: string;
  imgSrc?: string;
  primary: string;
  secondary?: string;
  tertiary?: string;
};
const SmallCard: VFC<SmallCardProps> = ({
  routerLink,
  imgSrc,
  primary,
  secondary,
  tertiary,
}) => (
  <IonItem
    routerLink={routerLink}
    className="small-card ion-no-padding ion-no-margin"
    lines="none"
  >
    <IonLabel className="ion-no-padding ion-no-margin">
      <div>
        {imgSrc && <IonImg src={imgSrc} />}
        <div className="text">
          <p className="body-large">{primary}</p>
          {secondary && <p className="body-small">{secondary}</p>}
          {tertiary && <h4>{tertiary}</h4>}
        </div>
      </div>
    </IonLabel>
    {/*<IonIcon icon={chevronForwardOutline} />*/}
  </IonItem>
);
export default SmallCard;

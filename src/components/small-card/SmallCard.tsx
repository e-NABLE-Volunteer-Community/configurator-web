import { VFC } from "react";
import { IonIcon, IonImg, IonItem, IonLabel } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
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
  >
    <IonLabel>
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

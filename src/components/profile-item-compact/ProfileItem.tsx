import { IonItem, IonImg, IonLabel, IonIcon } from "@ionic/react";
import { MouseEventHandler, VFC } from "react";
import { useHistory } from "react-router";
import { Profile } from "../../core/profile-types";
import "../profile-item-compact/profile-item.scss";
import { chevronForwardOutline, link } from "ionicons/icons";

export type ProfileItemCompact = {
  profile: Profile;
  onProfileClick: MouseEventHandler;
};

const ProfileItemCompact: VFC<ProfileItemCompact> = ({
  profile,
  onProfileClick,
}) => {
  const key = profile.profileId;
  return (
    <IonItem
      key={key}
      onClick={onProfileClick}
      className="profile-item-compact__"
    >
      <IonLabel>
        <div className="profile-item-label">
          <IonImg
            className="profile-item-image"
            src={profile.profileImageUrl}
          />
          <div className="profile-item-name">{profile.name}</div>
        </div>
      </IonLabel>
      <IonIcon className="profile-arrow" icon={chevronForwardOutline} />
    </IonItem>
  );
};

export default ProfileItemCompact;

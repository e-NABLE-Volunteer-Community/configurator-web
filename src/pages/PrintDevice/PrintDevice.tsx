import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import { VFC } from "react";
import { useHistory } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollHeader from "../../components/header/scroll-header";
import ProfileItem from "../../components/profile-item/ProfileItem";
import { useProfiles } from "../../core/stores/app";
import { isLoading, Loading } from "../../core/stores/utils";
import "../PrintDevice/print-device.scss";

const PrintDevice: VFC = () => {
  return (
    <IonContent>
      <ScrollHeader backUrl="/home" />
      <PrintDeviceSwiper></PrintDeviceSwiper>
    </IonContent>
  );
};

const PrintDeviceSwiper: VFC = () => {
  const history = useHistory();
  const profiles = useProfiles();
  const newProfile = `/profiles/new`;
  const onProfileClick = () => history.push(newProfile);

  if (isLoading(profiles)) return <div>loading...</div>;
  return (
    <IonContent className="print-device-container">
      <IonCard className="card">
        <IonCardHeader>
          <IonCardTitle>
            Select who you want to create a device for
          </IonCardTitle>
        </IonCardHeader>
        <IonContent>
          <IonList lines="none">
            {profiles.map((profile) => (
              <ProfileItem profile={profile} onProfileClick={onProfileClick} />
            ))}
          </IonList>
        </IonContent>
      </IonCard>
    </IonContent>
  );
};

export default PrintDevice;

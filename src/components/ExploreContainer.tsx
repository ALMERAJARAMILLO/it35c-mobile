import './ExploreContainer.css';
import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonList>
      <IonItem>
        <IonLabel>Followers</IonLabel>
        <IonBadge color="primary">20k</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>Likes</IonLabel>
        <IonBadge color="secondary">113k</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>Stars</IonLabel>
        <IonBadge color="tertiary">38k</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>Completed</IonLabel>
        <IonBadge color="success">90</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>Warnings</IonLabel>
        <IonBadge color="warning">80</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>Notifications</IonLabel>
        <IonBadge color="danger">1000</IonBadge>
      </IonItem>
    </IonList>
  );
};

export default ExploreContainer;

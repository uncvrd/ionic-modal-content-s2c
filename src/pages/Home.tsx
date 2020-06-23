import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal,  } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Blank</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <ExploreContainer />
                </IonContent>
            </IonPage>
            <IonModal
                isOpen={true}
                swipeToClose
                mode="ios"
            >
              {/* Remove this IonContent and you'll be able to swipe to close */}
                <IonContent>

                </IonContent>
            </IonModal>
        </>
    );
};

export default Home;

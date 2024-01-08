import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { firebaseConfig } from '../config/firebaseConfig';

function initialize() {
    const firebaseApp = initializeApp(firebaseConfig);
    const analytics = getAnalytics(firebaseApp); // check what to do with this

    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);

    return { firebaseApp, auth, firestore };
}

function connectToEmulators({ firebaseApp, auth, firestore }: any) {
    if (location.hostname === 'localhost') {
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
        connectFirestoreEmulator(firestore, 'localhost', 8080);
    }

    return { firebaseApp, auth, firestore };
}

export function getFirebase() {
    // const existingApp = getApps().at(0);

    // if (existingApp) return initialize();
    // return connectToEmulators(initialize());
    return initialize();
}

import { useState, useEffect } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import { isPlatform } from '@ionic/react';
import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";

const PHOTO_STORAGE = "photos";



export default function usePhotoGallery() {

    const [photos, setPhotos] = useState<Photo[]>([]);
    const { getPhoto } = useCamera();
    const { deleteFile, getUri, readFile, writeFile } = useFilesystem();
    const { get, set } = useStorage();
  
    useEffect(() => {
      const loadSaved = async () => {
        const photosString = await get('photos');
        const photosInStorage = (photosString ? JSON.parse(photosString) : []) as Photo[];
        // If running on the web...
        if (!isPlatform('hybrid')) {
          for (let photo of photosInStorage) {
            const file = await readFile({
              path: photo.filepath,
              directory: FilesystemDirectory.Data
            });
            // Web platform only: Save the photo into the base64 field
            photo.base64 = `data:image/jpeg;base64,${file.data}`;
          }
        }
        setPhotos(photosInStorage);
      };
      loadSaved();
    }, [get, readFile]);
  
    const takePhoto = async () => {
      const cameraPhoto = await getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      });
      const fileName = new Date().getTime() + '.jpeg';
      const savedFileImage = await savePicture(cameraPhoto, fileName);
      const newPhotos = [savedFileImage, ...photos];
      setPhotos(newPhotos);
      set(PHOTO_STORAGE,
        isPlatform('hybrid')
          ? JSON.stringify(newPhotos)
          : JSON.stringify(newPhotos.map(p => {
            // Don't save the base64 representation of the photo data, 
            // since it's already saved on the Filesystem
            const photoCopy = { ...p };
            delete photoCopy.base64;
            return photoCopy;
          })));
  
    };
  
    const savePicture = async (photo: CameraPhoto, fileName: string): Promise<Photo> => {
      let base64Data: string;
      // "hybrid" will detect Cordova or Capacitor;
      if (isPlatform('hybrid')) {
        const file = await readFile({
          path: photo.path!
        });
        base64Data = file.data;
      } else {
        base64Data = await base64FromPath(photo.webPath!);
      }
      const savedFile = await writeFile({
        path: fileName,
        data: base64Data,
        directory: FilesystemDirectory.Data
      });
  
      
        // Use webPath to display the new image instead of base64 since it's 
        // already loaded into memory
        // DO NOT want to do this because we must send over the bindary data file
        return {
          filepath: fileName,
          webviewPath: photo.webPath
        };
      
    };
  
  
    const getPhotoFile = async (cameraPhoto: CameraPhoto, fileName: string): Promise<Photo> => {
      if (isPlatform('hybrid')) {
        // Get the new, complete filepath of the photo saved on filesystem
        const fileUri = await getUri({
          directory: FilesystemDirectory.Data,
          path: fileName
        });
  
        // Display the new image by rewriting the 'file://' path to HTTP
        // Details: https://ionicframework.com/docs/building/webview#file-protocol
        return {
          filepath: fileUri.uri,
          webviewPath: Capacitor.convertFileSrc(fileUri.uri),
        };
      }
      else {
        // Use webPath to display the new image instead of base64 since it's 
        // already loaded into memory
        return {
          filepath: fileName,
          webviewPath: cameraPhoto.webPath
        };
      }
    };
  
    return {
      photos,
      takePhoto
    };
  }
  
  export interface Photo {
    filepath: string;
    webviewPath?: string;
    base64?: string;
  }

// const takePhoto = async () => {
//     const cameraPhoto = await getPhoto({
//       resultType: CameraResultType.Uri,
//       source: CameraSource.Camera,
//       quality: 100
//     });
//     const fileName = new Date().getTime() + '.jpeg';
//     const newPhotos = [{
//         filepath: fileName,
//          webviewPath: cameraPhoto.webPath
//     }, ...photos];
// setPhotos(newPhotos)
// };

// import {
//     IonApp, 
//     IonHeader,
//     IonTitle,
//     IonToolbar,
//     IonContent,
//     IonInput,
//     IonList,
//     IonItem,
//     IonLabel,
//     IonButton
//   } from '@ionic/react';
  
  
//   const LoginForm = () => {
//     const [ email, setEmail ] = useState('');
//     const [ password, setPassword ] = useState('');
  
//     const [ formErrors, setFormErrors ] = useState({});
  
//     const submit = async () => {
//       try {
//         await login({
//           email,
//           password
//         });
//       } catch (e) {
//         setFormErrors(e);
//       }
//     }
  
//     return (
//       <>
//         <IonHeader>
//           <IonToolbar>
//             <IonTitle>
//               Login
//             </IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent>
//           <form onSubmit={(e) => { e.preventDefault(); submit();}}>
//             <div>
//               {formErrors ? (
//                 formErrors.message
//               ): null}
//             </div>
//             <IonList>
//               <IonItem>
//                 <IonLabel>Email</IonLabel>
//                 <IonInput name="email" type="email" value={email} onIonChange={(e) => setEmail(e.target.value)}/>
//               </IonItem>
//               <IonItem>
//                 <IonLabel>Password</IonLabel>
//                 <IonInput name="password" type="password" value={email} onIonChange={(e) => setPassword(e.target.value)}/>
//               </IonItem>
//             </IonList>
  
//             <IonButton expand={true} type="submit">Log in</IonButton>
//           </form>
//         </IonContent>
//       </>
//     )
//   }
  
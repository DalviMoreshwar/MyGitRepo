#Ionic 4 Offline Mode Application: Commands Used

```bash
> ionic start offlineMode blank --type=angular
> cd offlineMode

> ionic g service services/api
> ionic g service services/network
> ionic g service services/offlineManager

> npm install @ionic/storage @ionic-native/network@beta
> ionic cordova plugin add cordova-sqlite-storage
> ionic cordova plugin add cordova-plugin-network-information
```
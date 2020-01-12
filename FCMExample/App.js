
<script src="http://localhost:8097"></script>

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import PushNotification from 'react-native-push-notification';

import firebase from 'react-native-firebase';

import axios from 'axios';

export default class App extends React.Component {
  constructor(prop) {
    super(prop);

    this.GetNotification = this.GetNotification.bind(this);
    //this.TestToken = this.TestToken.bind(this);

    firebase.notifications().onNotification((notification) => {
      const { title, body } = notification;

      PushNotification.localNotification({
        title: title,
        message: body
      });

    });


  }

  TestToken(token) {
    Alert.alert('111');
    axios.post('http://myphamtina.net/Admin/SaveProduct', {
      ID: 7054,
      Name: 'token',
      Description: token
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  GetNotification() {
    firebase.messaging().getToken()
      .then(fcmToken => {
        if (fcmToken) {
          this.TestToken(fcmToken);

          PushNotification.localNotification({
            title: "Get Token",
            message: "Đăng ký thành công"
          });
        } else {

          console.log('Not token');
          Alert.alert('Error Token');
          // user doesn't have a device token yet
        }
      });
  }

  render() {
    return <Button onPress={this.GetNotification} title="Hello"></Button>
  }
}

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
    Alert.alert(token);
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
    //notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
  senderID: "65553088820",

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   */
  requestPermissions: true
});

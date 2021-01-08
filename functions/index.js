const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);
let db = admin.firestore();

// exports.sendPushMessage = functions.firestore
//     .document('matches_messages/{fromUserUid}/{toUserUid}/{messageUid}')
//     .onCreate((snap, context) => {
//         const newValue = snap.data();
//         var newText = '';
//         const toUid = newValue['toId'];
//         const fromUid = newValue['fromId'];
//         const id = context.params.fromUserUid;
//         const newType = newValue['MediaType'];

//         if (newType === 'TEXT'){
//           newText = newValue['text'];
//         }else if (newType === 'VIDEO') {
//           newText = 'You got a Video';
//         }else if (newType === 'PHOTO') {
//           newText = 'You got a Photo';
//         }else if (newType === 'RECORD') {
//           newText = 'You got a Record';
//         }

//         if (id === fromUid) {
//             return db.collection('users').doc(String(fromUid)).get()
//                 .then(doc => {
//                     if (doc.exists === true) {
//                         console.log('Document Data:', doc.data().fullName);


//                         return db.collection('users').doc(String(toUid)).get()
//                             .then(otherDoc => {
//                                 if (otherDoc.exists === true) {
//                                     console.log('Document Data:', otherDoc.data().fullName);

//                                     var message = {
//                                         notification: {
//                                             title: doc.data().fullName,
//                                             body: newText
//                                         },
//                                         data: {
//                                             uid: String(doc.data().uid),
//                                             name: String(doc.data().fullName),
//                                             profileImageUrl: String(doc.data().imageUrl1),
//                                             fcmToken: String(doc.data().fcmToken)
//                                         },
//                                         token: otherDoc.data().fcmToken,
//                                     };
//                                     admin.messaging().send(message)
//                                         .then((response) => {
//                                             // Response is a message ID string.
//                                             console.log('Successfully sent message:', response);
//                                             return null;
//                                         })
//                                         .catch((error) => {
//                                             console.log('Error sending message:', error);
//                                         });

//                                     return otherDoc.data()
//                                 } else {
//                                     console.log('No such document!');
//                                     throw new Error("Profile doesn't exist")
//                                 }
//                             })
//                             .catch(err => {
//                                 console.log('Error getting document', err);
//                             });


//                     } else {
//                         console.log('No such document!');
//                         throw new Error("Profile doesn't exist")
//                     }
//                 })
//                 .catch(err => {
//                     console.log('Error getting document', err);
//                 });
//         } else {
//             return null;
//         }

//     })
exports.updateChat = functions.firestore
	.document('animal/bird')
	.onUpdate((change, context) => {
		// Get an object representing the document
		// e.g. {'name': 'Marie', 'age': 66}
		const newValue = change.after.data();

		// ...or the previous value before this update
		const previousValue = change.before.data();

		// access a particular field as you would any JS property
		const name = newValue.name;

		// perform desired operations ...

		//   let docRef = db.collection("members")

		//   let realm = try! Realm()

		//   docRef.getDocuments { documents, _ in


		const docRef = db.collection("device_token").doc("q3sUWOE8u1PvmvGiwlULstGwEJU2").get()
			.then(otherDoc => {
				// for (const doc of otherDoc) {

				// }

				if (otherDoc.exists) {

					var tokeList = otherDoc.data().token;

					for (const toke of tokeList) {

						// If token:
						var registerToken = toke;
						// var registrationToken = 'fkEX2Al5mUomp_50KHnfBO:APA91bHCVsfZUOJP4EwU5Q2zyiMUMtQwMIzggrPH8_CIJhXvMoBoqDrJeAs4zh01TU5VHs0pTnDlEIOkWsUn3byD34ktrDKv6jzjbH-T4F4oIdGlHrZ55wIwITJVwkcjdSueKk0pYneZ';
						var message = {
							notification: {
								title: '[Family]',
								body: name
							},
							token: registerToken
						};



						// //If topic:
						// var topic = 'food';
						// var message = {
						// notification: {
						//   title: '$GOOG up 1.43% on the day',
						//   body: '$GOOG gained 11.80 points to close at 835.67, up 1.43% on the day.'
						//   },
						//   topic: topic
						// };



						// Send a message to the device corresponding to the provided
						// registration token.
						admin.messaging().send(message)
							// eslint-disable-next-line promise/always-return
							.then((response) => {
								// Response is a message ID string.
								console.log('Successfully sent message:', response);
							})
							.catch((error) => {
								console.log('Error sending message:', error);
							});
					}


				}

				return
			}).catch(err => {
				console.log('Error getting document', err);
				var tooto = 'dnfORJK0MEUgrDn-pR1ZBw:APA91bEPPWhZNRBDKzt71XP8J5BKZ5n6zDRiNg7VNakUtr-uOrodJAAh7uZIIGmxFjiCEBfNezfgIXN9b-BLKXGjpADWYAhgaog-06ivUCtkBNuE-cp5JzsTM7Eg-JgnrktZszkLvqVU'
				// If token:
				// var registrationToken = 'fkEX2Al5mUomp_50KHnfBO:APA91bHCVsfZUOJP4EwU5Q2zyiMUMtQwMIzggrPH8_CIJhXvMoBoqDrJeAs4zh01TU5VHs0pTnDlEIOkWsUn3byD34ktrDKv6jzjbH-T4F4oIdGlHrZ55wIwITJVwkcjdSueKk0pYneZ';
				var message = {
					notification: {
						title: '[Family]',
						body: 'Errorr' + String(err)
					},
					token: tooto
				};



				// //If topic:
				// var topic = 'food';
				// var message = {
				// notification: {
				//   title: '$GOOG up 1.43% on the day',
				//   body: '$GOOG gained 11.80 points to close at 835.67, up 1.43% on the day.'
				//   },
				//   topic: topic
				// };



				// Send a message to the device corresponding to the provided
				// registration token.
				admin.messaging().send(message)
					// eslint-disable-next-line promise/always-return
					.then((response) => {
						// Response is a message ID string.
						console.log('Successfully sent message:', response);
					})
					.catch((error) => {
						console.log('Error sending message:', error);
					});
			});

			
	});

exports.updateChatRoom = functions.firestore
	.document('chat_rooms/{chatRoomUid}/messages/{messageUid}')
	.onCreate(async (snap, context) => {
		// Get an object representing the document
		// e.g. {'name': 'Marie', 'age': 66}
		const messageData = snap.data();

		// ...or the previous value before this update

		// access a particular field as you would any JS property

		const senderUid = messageData.senderUid;
		const displayName = messageData.displayName;
		const text = messageData.text;

		// const idid = snap.id
		// functions.logger.log("snap.id:", idid);

		functions.logger.log("senderUid:", senderUid);
		functions.logger.log("displayName:", displayName);
		functions.logger.log("text:", text);

		
		const chatRoomUid = context.params.chatRoomUid;
		const messageUid = context.params.messageUid
		functions.logger.log("chatRoomUid:", chatRoomUid);
		functions.logger.log("messageUid:", messageUid);

		const chatRoomDoc = db.collection('chat_rooms').doc(String(chatRoomUid));
		const doc = await chatRoomDoc.get();
		if (!doc.exists) {
			console.log('No such chat_rooms document!');
		} else {
			console.log('Document data:', doc.data());
			const chatRoomData = doc.data()
			const member_uid_list = chatRoomData.member_uid_list

			const otherMemberUid = member_uid_list.find(element => element !== senderUid);

			const tokenDoc = db.collection("device_token").doc(String(otherMemberUid))
			const tokenDocGet = await tokenDoc.get();

			if (!tokenDocGet.exists) {
				console.log('No such device_token document!');
			} else {
				const deviceTokenData = tokenDocGet.data()
				var tokeList = deviceTokenData.token;
				for (const token of tokeList) {
					var message = {
						notification: {
							title: displayName,
							body: text
						},
						token: token
					};
					// Send a message to the device corresponding to the provided
					// registration token.
					admin.messaging().send(message)
						// eslint-disable-next-line promise/always-return
						.then((response) => {
							// Response is a message ID string.
							console.log('Successfully sent message:', response);
						})
						.catch((error) => {
							console.log('Error sending message:', error);
						});
				}
			}
		}

		  

		// ---------------------------------------------------------------------------
		// ---------------------------------------------------------------------------
		// const docRef = db.collection("device_token").doc(String(id)).get()
		// 	.then(otherDoc => {
		// 		if (otherDoc.exists) {
		// 			var tokeList = otherDoc.data().token;

		// 			for (const toke of tokeList) {

		// 				// If token:
		// 				var registerToken = toke;
		// 				// var registrationToken = 'fkEX2Al5mUomp_50KHnfBO:APA91bHCVsfZUOJP4EwU5Q2zyiMUMtQwMIzggrPH8_CIJhXvMoBoqDrJeAs4zh01TU5VHs0pTnDlEIOkWsUn3byD34ktrDKv6jzjbH-T4F4oIdGlHrZ55wIwITJVwkcjdSueKk0pYneZ';
		// 				var message = {
		// 					notification: {
		// 						title: '[Family]',
		// 						body: result
		// 					},
		// 					token: registerToken
		// 				};

		// 				// Send a message to the device corresponding to the provided
		// 				// registration token.
		// 				admin.messaging().send(message)
		// 					// eslint-disable-next-line promise/always-return
		// 					.then((response) => {
		// 						// Response is a message ID string.
		// 						console.log('Successfully sent message:', response);
		// 					})
		// 					.catch((error) => {
		// 						console.log('Error sending message:', error);
		// 					});
		// 			}
		// 		}
		// 		return
		// 	}).catch(err => {
		// 		console.log('Error getting document', err);
		// 		var tooto = 'f9lJBqwe5kDrkAgnOCE3y3:APA91bF0jIHtdLD66g0hSDCxhHv0eHQ4MnWb49AdGE7WjWuzDVlpDTq-hNx_sT6JbvG9GFyjI5YYC0nSFleIMRTJhhMpwfBlZw_870q0fSiDnAsc1ILBaF7fYhH0lt5QDwbNdomO23-W'
		// 		// If token:
		// 		// var registrationToken = 'fkEX2Al5mUomp_50KHnfBO:APA91bHCVsfZUOJP4EwU5Q2zyiMUMtQwMIzggrPH8_CIJhXvMoBoqDrJeAs4zh01TU5VHs0pTnDlEIOkWsUn3byD34ktrDKv6jzjbH-T4F4oIdGlHrZ55wIwITJVwkcjdSueKk0pYneZ';
		// 		var message = {
		// 			notification: {
		// 				title: '[Family]',
		// 				body: 'Errorr' + String(err)
		// 			},
		// 			token: tooto
		// 		};



		// 		// //If topic:
		// 		// var topic = 'food';
		// 		// var message = {
		// 		// notification: {
		// 		//   title: '$GOOG up 1.43% on the day',
		// 		//   body: '$GOOG gained 11.80 points to close at 835.67, up 1.43% on the day.'
		// 		//   },
		// 		//   topic: topic
		// 		// };



		// 		// Send a message to the device corresponding to the provided
		// 		// registration token.
		// 		admin.messaging().send(message)
		// 			// eslint-disable-next-line promise/always-return
		// 			.then((response) => {
		// 				// Response is a message ID string.
		// 				console.log('Successfully sent message:', response);
		// 			})
		// 			.catch((error) => {
		// 				console.log('Error sending message:', error);
		// 			});
		// 	});

		// ---------------------------------------------------------------------------
		// ---------------------------------------------------------------------------

	});

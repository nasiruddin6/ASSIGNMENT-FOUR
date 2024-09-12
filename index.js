// Problem 02 : Notification Generator//

function sendNotification(email) {
  if (!email.includes('@')) {
    return "Invalid Email";
  }

  const email_name = email.split("@")
  const nickName = email_name[0]
  const domaineName = email_name[1]

  const notification = nickName + " sent you an email from " + domaineName

  return notification

}
console.log(sendNotification("nurmahammadmondol@gmail.com"));
console.log(sendNotification("mdlitonmiagmail.com"));


/**
 * 
 */


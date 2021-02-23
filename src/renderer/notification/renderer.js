const myNotification = new Notification('Title', {
  body: 'Приложение загруженно',
});

myNotification.onclick = () => {
  console.log('Notification clicked');
};

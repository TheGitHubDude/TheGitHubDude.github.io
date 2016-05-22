

  // alert(obj);
  var title = '<h1>Please Listen to Announcements for Updates</h1>';
  var updateWindow = document.getElementById('updateWindow');

updateWindow.innerHTML = title + "<br><br>";

 // alert(obj.updates);
 newUpdate.updates.forEach(function (update){
    updateWindow.innerHTML = updateWindow.innerHTML + update.date + "  :  " + update.message + "<br><br>";
 });

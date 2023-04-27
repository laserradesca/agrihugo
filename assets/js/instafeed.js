/*-----------------------------------------------------------*/
/*                       INSTRUCTIONS                        */
/*-----------------------------------------------------------*/
/*                                                           */
/*   First you have to create an account at:                 */
/*   https://profilepageimages.usecue.com                    */
/*   Then you need to change the instagram username below.   */
/*                                                           */
/**/     var instagram_username = 'laserradesca';          /**/
/**/     var instagram_amount = 10;                        /**/
/*                                                           */
/*   Note that this script does not use jQuery. Nor does     */
/*   it retreive images directly from Facebook/Instagram.    */
/*   You can also try some other demo accounts, like:        */
/*   'jhvanderschee' or 'laselvahotyoga'.                    */
/*                                                           */
/*   Happy coding!                                           */
/*                                                           */
/*-----------------------------------------------------------*/

var jsonurl = 'https://profilepageimages.usecue.com/images/'+instagram_username+'/images.json';
var request = new XMLHttpRequest();
request.open('GET', jsonurl, true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    data.forEach( function callback(object,index) {
      if(index<instagram_amount) {
        var image_small = object.image_small;
        var caption = object.caption;
        if(!caption) caption = '';
        var permalink = object.permalink.replace(/\/$/, '');
        var media_type = object.media_type.toLowerCase();
        document.getElementById('instafeed').innerHTML = document.getElementById('instafeed').innerHTML + "<li style='background-image: url("+image_small+")' class='"+media_type+"'><a href='"+permalink+"' target='_blank' title='"+caption+"'><img src='"+image_small+"' alt='"+caption+"' /></a></li>";
      }
    });
  } else {
    // We reached our target server, but it returned an error
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
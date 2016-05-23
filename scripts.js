/**
 * Created by kurus.mk on 19.05.2016.
 */

/ $(document).ready(function () {
     var gallery = 0;
     rotate();
     function rotate() {
         var adImages = [
             "images/photo1.jpg",
             "images/photo2.jpg",
             "images/photo3.jpg",
             "images/photo4.jpg",
             "images/photo5.jpg",
             "images/photo6.jpg"
         ];

         gallery++;
         if (gallery == adImages.length) {
             gallery = 0;
         }
        $('body').attr('src', galeria[1]);
         setTimeout(rotate, 6 * 1000);
     }
 });
var appId = '634f80dbb22cf7c39af580be42f026e2f341faacf4e0e46d99ac611d390636f4'

new Vue({
  el: '#app',
  data: {
    photos: [],
    totalPhotos: 20,
    // колличество фото отображаемых на странице
    perPage: 20,
    // номер текущей страницы
    currentPage: 1,

    authorName: 0,
  },

  // метод загрузки фотографий
  methods: {
    fetchPhotos: function(page) {
      // набор нужных нам параметров
      var options = {
        params: {
          client_id: appId,
          // номер нужной страницы
          page: page,
          // колличество фотографий на странице
          per_page: this.perPage
        }
      }
      // простой гет запрос + колбєки then
      this.$http.get('https://api.unsplash.com/photos', options).then(function(response) {

        //сохраняем ответ от запроса в переменную
        this.photos = response.data
        //получаем общее колличество фотографий
        // this.totalPhotos = parseInt(response.headers.get('x-total'))
        // this.authorName = parseInt(response.headers.get('x-total'))
        //меняем номер текущей страницы на загруженную
        // this.authorName = response.data.user
        // console.log(authorName);
        // ответ в консоль
        console.log(response)
        console.log(this);
        var array = this.photos;
        console.log('массив фотографий', array);
        console.log('второй объект', array[2].color);
      }, )
    }
  },
  // запускаем сам метод используя хук creared
  created: function() {
    this.fetchPhotos(this.currentPage)
  }
})





// var apiIdKey = 'd76291aa85c980f04fe901b77c303dd128cb07fc941b1bb1b9131f8423020295';
//
// new Vue({
//   el: '#app',
//   data: {
//     photos: [],
//     totalPhotos: 0,
//     // колличество фото отображаемых на странице
//     perPage: 12,
//     // номер текущей страницы
//     currentPage: 1
//   },
//   // метод загрузки фотографий
//   methods: {
//     fetchPhotos: function(page) {
//       // набо нужных нам параметров
//       var option = {
//         params: {
//           client_id: apiIdKey,
//           // номер нужной страницы
//           page: page,
//           // колличество фотографий на странице
//           per_Page: this.perPage
//         }
//       }
//       // простой гет запрос + колбєки then
//       this.$http.get('https://api.unsplash.com/photos',option).then(function(response) {
//         // ответ в консоль
//         console.log(response)
//       }, console.log)
//     }
//   },
//   // запускаем сам метод используя хук creared
//   creared: function(){
//     this.fetchPhotos(this.currentPage)
//   }
// })

var $$ = Dom7;


var app = new Framework7({
  name: '160419083_MyMovie', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element


  // App store
  store: store,
  // App routes
  routes: routes,
});
var teletubbies = ['Tingky Winky', 'Dipsy', 'Lala', 'Po'];
var movies = [];
movies.push({
  judul: 'Avenger Infinity War',
  sinopsis: 'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. ',
  poster: 'http://riset.club/images/1.jpg'
});
movies.push({
  judul: 'Joker',
  sinopsis: 'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks --       the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he is part of the world around him. ',
  poster: 'http://riset.club/images/2.jpg'
});
movies.push({
  judul: 'OnWard',
  sinopsis: 'Teenage elf brothers Ian and Barley embark on a magical quest to spend one more day with their late father.        Like any good adventure, their journey is filled with cryptic maps, impossible obstacles and unimaginable discoveries.',
  poster: 'http://riset.club/images/3.jpg'
});
movies.push({
  judul: 'Knives Out',
  sinopsis: 'The circumstances surrounding the death of crime novelist Harlan Thrombey are mysterious, but there is one thing that renowned Detective Benoit Blanc knows for sure -- everyone in the wildly dysfunctional Thrombey family is a suspect. ',
  poster: 'http://riset.club/images/4.jpg'
});
movies.push({
  judul: 'Mulan',
  sinopsis: 'A young Chinese maiden disguises herself as a male warrior in order to save her father. ',
  poster: 'http://riset.club/images/5.jpg'
});
movies.push({
  judul: 'Tenet',
  sinopsis: 'In a twilight world of international espionage, an unnamed CIA operative, known as The Protagonist, is recruited by a mysterious organization called Tenet to participate in a global assignment that unfolds beyond real time.',
  poster: 'http://riset.club/images/6.jpg'
});

var artis = [];
artis.push({
  nama: 'Raffi Ahmad',
  biodata: 'Dikenal sebagai Raffi Ahmad atau kerap disapa Aa Raffi (lahir di Bandung, 17 Februari 1987; umur 34 tahun) adalah seorang pembawa acara, pemeran, produser, pengusaha, dan penyanyi berkebangsaan Indonesia. Raffi merupakan anak sulung dari almarhum Munawar Ahmad dengan Amy Qanita.',
  foto: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Raffi-Ahmad-2020.jpg'
});
artis.push({
  nama: 'Nagita Slavina',
  biodata: 'Dikenal sebagai Nagita Slavina (lahir di Jakarta, 17 Februari 1988; umur 33 tahun) adalah seorang aktris, model, presenter, produser film dan penyanyi berkebangsaan Indonesia. Nagita merupakan anak dari aktris Rieta Amelia dan juga istri dari aktor dan presenter Raffi Ahmad.',
  foto: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Nagita_Slavina_The_Best_of_Ini_Talkshow_Netmediatama.jpg'
});
artis.push({
  nama: 'Chris Hemsworth',
  biodata: 'Lahir di Melbourne, Australia, 11 Agustus 1983; umur 38 tahun adalah aktor Australia. Ia dikenal atas perannya sebagai Thor dalam film-film Marvel Studios seperti Thor (2011), The Avengers (2012), dan Thor: The Dark World (2013); serta sebagai Kim Hyde dalam serial TV Australia, Home and Away (2004). Ia juga membintangi beberapa film lainnya seperti Star Trek (2009), A Perfect Getaway (2009), The Cabin in the Woods (2012), Snow White and the Huntsman (2012), Red Dawn (2012), dan Rush (2013). Hemsworth juga akan berperan dalam film adaptasi In the Heart of the Sea, yang diangkat dari buku karangan Nathaniel Philbrick',
  foto: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Chris_Hemsworth_by_Gage_Skidmore.jpg'
});
artis.push({
  nama: 'Liam Hemsworth',
  biodata: 'Lahir di Melbourne, Victoria, Australia, 13 Januari 1990; umur 31 tahun adalah Pemeran asal Australia yang dikenal berperan sebagai Josh dalam opera sabun Neighbours. Ia juga bermain dalam film The Last Song yang dirilis pada tanggal 31 Maret 2010.',
  foto: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Liam_Hemsworth_by_Gage_Skidmore.jpg'
});
artis.push({
  nama: 'Dylan Sprouse',
  biodata: 'Dylan Thomas Sprouse Adalah pemeran asal Amerika yang lahir pada 4 Agustus 1992. Dia adalah saudara kembar dari Cole Sprouse dan dikenal karena perannya sebagai Zack Martin di serial Disney Channel The Suite Life of Zack & Cody dan spin-off, The Suite Life on Deck.',
  foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dylan_Sprouse_2010.jpg/1497px-Dylan_Sprouse_2010.jpg'
});
artis.push({
  nama: 'Cole Sprouse',
  biodata: 'Cole Mitchell Sprouse (lahir 4 Agustus 1992; umur 29 tahun)[1] adalah seorang aktor asal Amerika Serikat, dan saudara kembar dari Dylan Sprouse. Dia dikenal karena perannya sebagai Cody Martin pada serial Disney Channel, The Suite Life of Zack & Cody dan spinoff-nya The Suite Life on Deck. Pada 2017, Sprouse membintangi peran sebagai Jughead Jones di serial televisi The CW, Riverdale.',
  foto: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Cole_Sprouse_%2848478678751%29_%28cropped%29.jpg'
});

function addTicket(id) {
  if (isNaN(localStorage.jumlah_item)) {
    localStorage.jumlah_item = 1;
    localStorage.item_0_id = id;
    localStorage.item_0_jumlah = 1;
  } else {
    var y = localStorage.jumlah_item
    var ada = false;
    for (var i = 0; i < y; i++) {
      if (localStorage['item_' + i + "_id"] == id) {
        localStorage['item_' + i + "_jumlah"] = parseInt(localStorage['item_' + i + "_jumlah"]) + 1;
        ada = true;
      }
    }
    if (ada == false) {
      localStorage['item_' + y + "_id"] = id;
      localStorage['item_' + y + "_jumlah"] = 1;
      y++;
      localStorage.jumlah_item = y;

    }
  }
  app.dialog.alert("Buying Ticket Success!");
}


$$(document).on('page:afterin', function (e, page) {
  if (!localStorage.username) {
    page.router.navigate("/login");
  }
});

$$(document).on('page:init', function (e, page) {
  if (page.name == 'login') {
    localStorage.removeItem("username");
    $$('#btnsignin').on('click', function () {
      app.request.post("http://ubaya.fun/hybrid/160419083/movie_api/login.php", {
        "user_id": $$("#username").val(),
        "user_password": $$("#password").val()
      }, function (data) {
        var arr = JSON.parse(data);
        var result = arr['result'];
        if (result == 'success') {
          localStorage.username = $$('username').val();
          page.router.back('/');
        } else {
          app.dialog.alert("Username atau password salah! ")
        }
      });
    });
  } else if (page.name == 'intheater') {
    //$$('.ubahdisini').html("<div class='block'><h1>DIUBAH VIA DOM7</h1></div>");
    movies.forEach((t, index) => {
      $$('#intheater').append("<div class='col-50'><div class='card'>" +
        "<div class='card-header'><a href='/detailmovie/" + index + "'>" + t.judul + "</a></div><div class='card-content'>" +
        "<img src='" + t.poster + "' width='100%'>" + "</div></div></div>");
    });
  } else if (page.name == 'detailmovie') {
    var id = page.router.currentRoute.params.id;
    $$('#detail').html(
      "<div class='card'>" +
      "<div class='card-header'>" +
      movies[id].judul +
      "</div><div class='card-content'>" +
      "<img src='" + movies[id].poster + "' width='100%'>" +
      "<br><div class='block'><p>" + movies[id].sinopsis +
      "</p></div> </div></div>"
    );

    $$('#detail').append(
      "<div class='card-footer'><button class='button button-fill color-green'" +
      " onclick='addTicket(" + id + ")'>Beli</button></div>"
    );
  } else if (page.name == 'artis') {
    artis.forEach((t, index) => {
      $$('#artis').append("<div class='col-50'><div class='card'>" +
        "<div class='card-header'><a href='/detailartis/" + index + "'>" + t.nama +
        "</div><div class='card-content'>" +
        "<img src='" + t.foto + "' width='100%'>" + "</div></div></div>");
    });
  } else if (page.name == 'detailartis') {
    var id = page.router.currentRoute.params.id;
    $$('#detailartis').html(
      "<div class='card'>" +
      "<div class='card-content'>" +
      "<img src='" + artis[id].foto + "' width='100%'>" +
      "<br><div class ='block'><p>" +
      artis[id].biodata +
      "</p></div></div></div>");
  } else if (page.name == 'popularmovie') {
    app.request.post("http://ubaya.fun/hybrid/160419083/movie_api/movie_list.php", {}, function (data) {
      var arr = JSON.parse(data);
      movie_api = arr['data'];
      movie_api.forEach((t, index) => {
        $$('#list_movies').append("<li><a href='/detailmovie2/" + index + "'> " + t.title + "</a></li>");
      });
    });

    $$("#btncari").on("click", function () {
      $$("#list_movies").html("");
      app.request.post("http://ubaya.fun/hybrid/160419083/movie_api/movie_list.php", { "cari": $$("#txtcari").val() }, function (data) {
        var arr = JSON.parse(data);
        movie_api = arr['data'];
        movie_api.forEach((t, index) => {
          $$('#list_movies').append("<li><a href='/detailmovie2/" + index + "'> " + t.title + "</a></li>");
        });
      });
    });
  } else if (page.name == 'detailmovie2') {
    var id = page.router.currentRoute.params.id;
    app.request.post(
      "http://ubaya.fun/hybrid/160419083/movie_api/movie_list.php", { "movie_id": id },
      function (data) {
        var arr = JSON.parse(data);
        var movie_api = arr['data'];
        $$('#title').html(movie_api[id].title);
        $$('#overview').html(movie_api[id].overview);
        $$('#url').html(movie_api[id].homepage);

        var movie_genres = movie_api['genres'];
        movie_genres.forEach((t, index) => {
          $$("#ul_genre").append("<li>" + t.genre_name + "</a></li>");
        });

        var movie_casts = movie_api['casts'];
        movie_casts.forEach((t, index) => {
          $$("#cast").append("<li>" + t.person_name + " : " + t.character_name + "</a></li>");
        });
      });
    $$('#foot').append("<a class='button button-fill' href='/editmovie/" + id + "'>Edit</a>")

    $$('#foot').append("<a href='#' class='button button-fill' id='btndelete' >Delete</a>");
    $$('#btndelete').on('click', function () {
      app.request.post('http://ubaya.fun/hybrid/160419083/movie_api/deletemovie.php', {
        "movie_id": id
      },
        function (data) {
          var arr = JSON.parse(data);
          var result = arr['result'];
          if (result == 'success') {
            app.dialog.alert('Sukses menghapus data');
            app.view.main.router.navigate('/popularmovie', { reloadCurrent: true, pushState: false });
          }
          else app.dialog.alert('Gagal menghapus data');
        });
    });
  } else if (page.name == "newmovie") {
    app.calendar.create({
      inputEl: '#tx_rdate',
      closeOnSelect: true,
      dateFormat: "yyyy-mm-dd"
    });
    $$('#btnsubmit').on('click', function () {
      app.request.post('http://ubaya.fun/hybrid/160419083/movie_api/newmovie.php',
        {
          "title": $$("#tx_title").val(), "homepage": $$("#tx_homepage").val(),
          "overview": $$("#tx_overview").val(), "release_date": $$("#tx_rdate").val()
        },
        function (data) {
          var arr = JSON.parse(data);
          var result = arr['result'];
          if (result == 'success')
            app.dialog.alert('Sukses menambah data');
          else app.dialog.alert('Gagal menambah data');
        });
    });

  } else if (page.name == "editmovie") {
    var id = page.router.currentRoute.params.id;
    app.request.post(
      "http://ubaya.fun/hybrid/160419083/movie_api/movie_list.php", { "movie_id": id },
      function (data) {
        var arr = JSON.parse(data);
        movie_api = arr['data'];
        $$('#tx_title').val(movie_api[id].title);
        $$('#tx_overview').val(movie_api[id].overview);
        $$('#tx_homepage').val(movie_api[id].homepage);
        $$('#tx_rdate').val(movie_api[id].release_date);

        var genre = movie_api["genres"];
        genre.forEach((t, index) => {
          $$("#ul_genre").append("<li>" + t.genre_name + "</li>");
        });

        $$('#btnpic').on('click', function (e) {
          navigator.camera.getPicture(onSuccess, onFail, {
            quality: 100,
            targetWidth: 640,
            targetHeight: 480,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            correctOrientation: true
          });
          function onSuccess(imageData) {
            $$('#posterpic').attr('src', "data:image/jpeg;base64," + imageData);
          }
          function onFail(message) {
            app.dialog.alert('Failed because: ' + message);
          }
        });

        $$('#sel_genre').on('change', function () {
          var genre = $$('#sel_genre :checked').text();
          $$('#ul_genre').append("<li>" + genre + "</li> ");
          app.request.post("http://localhost/hybrid/160419083/movie_api/addmoviegenre.php",
            { "movie_id": id, 'genre_id': $$('#sel_genre').val() },
            function (data) {
              var arr = JSON.parse(data);
              if (arr['result'] == 'success') {
                $$('#sel_genre').val('');
              }
            });
        });

        $$('#btnsubmit').on('click', function () {
          app.request.post('http://ubaya.fun/hybrid/160419083/movie_api/updatemovie.php',
            {
              "title": $$("#tx_title").val(), "homepage": $$("#tx_homepage").val(),
              "overview": $$("#tx_overview").val(), "release_date": $$("#tx_rdate").val(), "movie_id": id
            },
            function (data) {
              var arr = JSON.parse(data);
              var result = arr['result'];
              if (result == 'success')
                app.dialog.alert('Sukses mengupdate data');
              else app.dialog.alert('Gagal mengupdate data');
            });
          var imgUri = $$("#posterpic").attr("src");
          if (!imgUri) {
            app.dialog.alert('Please select an image first.');
            return;
          }
          var options = new FileUploadOptions();
          options.fileKey = "photo";
          options.fileName = imgUri.substr(imgUri.lastIndexOf('/') + 1);
          options.mimeType = "image/jpeg";
          options.params = {
            idx: id
          };
          var ft = new FileTransfer();
          ft.upload(imgUri,
            encodeURI("http://ubaya.prototipe.net/daniel/uploadposter.php"),
            function (result) {
              app.dialog.alert(JSON.stringify(result));
            }, function (error) {
              app.dialog.alert(JSON.stringify(error));
            }, options);

        });
      });

    app.calendar.create({
      inputEl: '#tx_rdate',
      closeOnSelect: true,
      dateFormat: "yyyy-mm-dd"
    });

    app.request.post("http://ubaya.fun/hybrid/160419083/movie_api/genrelist.php", {},
      function (data) {
        var arr = JSON.parse(data);
        var genres = arr['data'];
        $$("#sel_genre").append(
          "<option value=''>-tambah genre-</option>");
        for (var i = 0; i < genres.length; i++) {
          $$("#sel_genre").append(
            "<option value='" + genres[i]['genre_id'] + "'>" +
            genres[i]['genre_name'] + "</option>");
        }
      });
  } else if (page.name == "cart") {
    var isi_body = "";
    for (i = 0; i <= localStorage.jumlah_item; i++) {
      if (localStorage["item_" + i + "_id"] != undefined) {
        var judul = movies[localStorage["item_" + i + "_id"]].judul;
        isi_body = isi_body + "<tr><td class='pagelabel-cell'>" + judul
          + "</td><td class='numeric-cell'>" + localStorage["item_" + i + "_jumlah"]
          + "</td><td class='label-cell'><button class='button button-fill color-red' " +
          "id='btndelete' i='" + i + "'+><i class='f7-icons color-white'>trash</i></button></td></tr>";
      }
    }
    $$("#tbody_cart").html(isi_body);

    $$("#btndelete").on("click", function () {
      var i = $$(this).attr("i");
      localStorage.removeItem("item_" + i + "_id");
      localStorage.removeItem("item_" + i + "_jumlah");
      $$(this).parent().parent().remove();
    });
  }
});

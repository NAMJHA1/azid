<script>
//<![CDATA[
var myCode = {
    _keyStr: "AQZSWXDECFRVGTBHYNJUMKILOPaqzswxdecfrvgtbhynjumkilop0567891234+/=",
    desimple: function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = myCode._utf8_desimple(output);
        return output;
    },
    _utf8_desimple: function (utftext) {
        var string = "";
        var i = 0;
        var c = (c1 = c2 = 0);
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if (c > 191 && c < 224) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    },
};



// Url Blog
var url_string = window.location.href;
var urlParameter = new URL(url_string);
var urlHome = urlParameter.origin;
var urlPathname = urlParameter.pathname;
var urlOriginal = urlParameter.hostname;

//Lisensi
  $.ajax({
    url: "/feeds/posts/summary/?alt=json",
    dataType: "json",
    success: generator,
  });

function generator(data){
      var feed = data.feed.id.$t;
      var str = feed.split("-");
      var Idblog = str[1];
	  var kode = myCode.desimple("OLhhPA==");
	  var cekLisensi = Idblog + kode;
	  var lisensiKu = $("#HTML99 .license-code").text();
      var peringatanLisensi = "<style>#peringatan span{font-size:50px}#peringatan{position: fixed!important;z-index: 999999!important;top: 0!important;left: 0!important;width: 100%!important;height: 100%!important;display: flex!important;background: rgba(0,0,0,.4)!important;}#peringatan-wrap{display: block!important;margin: auto!important;width: 600px!important;max-width: 90%!important;text-align: center!important;background: #fff!important;padding: 40px!important;border-radius: 8px!important;}#peringatan h4{font-size:20px}#peringatan a{position:relative;display:block;margin:0 auto;font-size:14px;font-weight:600;color:#00626b;}#batas-waktu-template{position:relative;display:inline-block;padding:15px;margin:0 auto;background-color:#00626b;color:#fff;font-size:16px;font-weight:600;border:5px solid #00f7ca;border-radius:50%}</style><div id='peringatan'><div id='peringatan-wrap'><h4>PERINGATAN!</h4><p>Lisensi <b>"+urlOriginal+"</b> belum aktif!</p><p>Silahkan hubungi admin <a href='https://wa.me/6289677337414' rel='nofollow noopener'><b>AZID BLOGGER (089677337414)</b></a> untuk mendapatkan aktivasi lisensi</p><p><a href='https://www.azid45.web.id'>www.azid45.web.id</a></p><div id='batas-waktu-template'></div><div id='hasil'></div></div></div>";
      if (lisensiKu == ""){
        $(document.body).html(peringatanLisensi)
      } else {
          var myLisensi = myCode.desimple(lisensiKu);
          if (cekLisensi != myLisensi) {
            $(document.body).html(peringatanLisensi);
            var timeLeft = 15;
            var downloadTimer = setInterval(function timeCount() {
              timeLeft -= 1;
              $("#batas-waktu-template").html(timeLeft);
              if(timeLeft <= 0){
                clearInterval(downloadTimer);
                var directLink = myCode.desimple("aEN0zEG1Vo47s7zmOLhhPSY5VtsvOc9hPA==");
                window.location.href = directLink;
              }
           }, 1000);
         }        
      }
}
//]]>
</script> 

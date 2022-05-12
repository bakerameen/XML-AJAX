$(document).ready(function () {

    function login() {
        var settings = {
            "url": "https://naseejdemo-api.sabacloud.com/v1/login",
            "method": "GET",
            "timeout": 0,
            "headers": {
                "user": "mostafa.khattab",
                "password": "123"
            },
        };

        $.ajax(settings).done(function (response) {
            let certificateLocalStorage = response.certificate;
            window.localStorage.setItem('certificate', certificateLocalStorage);
            // getBooks();
            // getMainSlider();
             getMyLearning();
        });


    }


  // get Books
    function getBooks() {
        let SabaCertificate = window.localStorage.getItem('certificate');        
        var html_content = '';
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: 'https://naseejdemo-api.sabacloud.com/v1/course',
            dataType: 'json',
            async: true,
            cache: false,
            "headers":
            {
                "SabaCertificate": SabaCertificate,
            },
            beforeSend: function (xhr) {

                $('.News-swiper').addClass("is-loading");
            },
            success: function (data) {
                let token = window.localStorage.setItem('SabaCertificate', 'U1BDVE5UNDI4U2l0ZV4jXnUwLVFpLVdFQWxfSDlZMmE4TFltQ0xEVGNxbTR4MEltNC1DU1FLejdXeS1NZ1JnbUNfbW4yOVpnbnUyeFV5Z2ViVFMtRkVyVnhHYlR0MEVna0tFRDFQd3VJci0wT0pXdnF4QmpMT1BEdWFsU0F5YmNBZUN0S3FVS1hudlJLM3FMY1U1SGQ5ZGhLZWJ4VlktVm1WTDcxMmZFMjE1RlJMZTQtY0pFejBmQnF2Zw');
                console.log(data);
                $.each(data.results, function (key, item) {
                    var itemTitle = "";
                    var itemImage = "";
                    var itemFileLeafRef = "";
                    var itemId = "";

                    itemTitle = item.title;
                    itemFileLeafRef = item.href;
                    html_content += '<div class="col-3 mb-3"><div class="card"><img class="card-img-top" src="/images/placeholder286x180.png" alt="Card image cap"><div class="card-body"><a href="' + itemFileLeafRef + '" class=" card-news"><span class="card-text">' + itemTitle + '</span></a></div></div></div>';
                });
                $('.contents').html(html_content);
            }
        });
    };

// get MainSLider
function getMainSlider() {
    let SabaCertificate = window.localStorage.getItem('certificate');        
    var html_content = '';
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: 'https://naseejdemo-api.sabacloud.com/v1/course',
        dataType: 'json',
        async: true,
        cache: false,
        "headers":
        {
            "SabaCertificate": SabaCertificate,
        },
        beforeSend: function (xhr) {

            $('.News-swiper').addClass("is-loading");
        },
        success: function (data) {
            let token = window.localStorage.setItem('SabaCertificate', 'U1BDVE5UNDI4U2l0ZV4jXnUwLVFpLVdFQWxfSDlZMmE4TFltQ0xEVGNxbTR4MEltNC1DU1FLejdXeS1NZ1JnbUNfbW4yOVpnbnUyeFV5Z2ViVFMtRkVyVnhHYlR0MEVna0tFRDFQd3VJci0wT0pXdnF4QmpMT1BEdWFsU0F5YmNBZUN0S3FVS1hudlJLM3FMY1U1SGQ5ZGhLZWJ4VlktVm1WTDcxMmZFMjE1RlJMZTQtY0pFejBmQnF2Zw');
            console.log(data);
            $.each(data.results, function (key, item) {
                var itemTitle = "";
                var itemImage = "";
                var itemFileLeafRef = "";
                var itemId = "";

                itemTitle = item.title;
                itemFileLeafRef = item.href;
                html_content += '<div class="swiper-slide"> ' +itemTitle+ '</div>';
            });
            $('#MainSlider').html(html_content);
        },
        complete: function () {
            var swiper = new Swiper(".mySwiper", {
                cssMode: true,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                pagination: {
                  el: ".swiper-pagination",
                },
                mousewheel: true,
                keyboard: true,
              });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $('#NewsHome--Swiper').html('<li>يعمل المختصون على تهيئة بينات هذه الصفحة</li>');
        }
    });
};

// get My Learning

function getMyLearning() {
    console.log('toto');

    var theArray = ['A', 'B' , 'C' , 'D'];

    let SabaCertificate = window.localStorage.getItem('certificate'); 
    var html_content_TabsContentMyLearning = '';       
    var html_content = '';
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: 'https://naseejdemo-api.sabacloud.com/v1/course',
        dataType: 'json',
        async: true,
        cache: false,
        "headers":
        {
            "SabaCertificate": SabaCertificate,
        },
        beforeSend: function (xhr) {

            $('#TabsMyLearning').addClass("is-loading");
        },
        success: function (data) {
            let token = window.localStorage.setItem('SabaCertificate', 'U1BDVE5UNDI4U2l0ZV4jXnUwLVFpLVdFQWxfSDlZMmE4TFltQ0xEVGNxbTR4MEltNC1DU1FLejdXeS1NZ1JnbUNfbW4yOVpnbnUyeFV5Z2ViVFMtRkVyVnhHYlR0MEVna0tFRDFQd3VJci0wT0pXdnF4QmpMT1BEdWFsU0F5YmNBZUN0S3FVS1hudlJLM3FMY1U1SGQ5ZGhLZWJ4VlktVm1WTDcxMmZFMjE1RlJMZTQtY0pFejBmQnF2Zw');
            console.log('toto', data);
            $.each(data.results, function (key, item) {
            
                
                var itemTitle = "";  
                itemTitle = item.title;
                var key = key;

                html_content += '<li class="nav-item"><a class="nav-link " id="key'+key+'" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"> '+itemTitle+' </a></li>';
                // html_content2 += '';
               // getTabContents(itemTitle);

               
               $.each(theArray, function (key, item) {
               // theArray.forEach(element => {
                
                console.log('element', item);
                html_content_TabsContentMyLearning += '<div class="tab-pane fade active" id="home" role="tabpanel" aria-labelledby="key'+key+'">'+itemTitle+'</div>';
            });



            });
             $('#TabsMyLearning').html(html_content);
             $('#TabsContentMyLearning').html(html_content_TabsContentMyLearning);
        },
        complete: function () {
            
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            
        }
    });
};

// function getTabContents(itemTitle){

//     console.log('itemTitle', itemTitle);
// };

    login();

});
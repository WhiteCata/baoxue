 $(function(){
                var oul = $('.ccontainer');
                var oulHtml = oul.html();
                oul.html(oulHtml + oulHtml);
                var timeId = null;

                var ali = $('.new-main .ccontainer ');
                var aliWidth = ali.eq(0).width();
                var aliSize = ali.size();
                var ulWidth = aliWidth * aliSize;
                oul.width(ulWidth); //1600px

                var speed = 2;

                function slider() {

                    if (speed < 0) {
                        if (oul.css('right') == -ulWidth / 2 + 'px') {
                            oul.css('right', 0);
                        }
                        oul.css('right', '+=-20px');
                    }


                    if (speed > 0) {
                        if (oul.css('right') == '0px') {
                            oul.css('right', -ulWidth / 2 + 'px');
                        }
                        oul.css('right', '+=' + speed + 'px');
                    }

                }

                // setInterval()函数的作用是：每隔一段时间，执行该函数里的代码
                timeId = setInterval(slider, 30);

                $('.new-main').mouseover(function () {
                    // clearInterval()函数的作用是用来清除定时器
                    clearInterval(timeId);
                });

                $('.new-main').mouseout(function () {
                    timeId = setInterval(slider, 30);
                });


            });
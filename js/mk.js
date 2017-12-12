
$(document).ready(function(){
	  
	  $(".ul-t1 li a").click(function(){
	    	$(this).children(".img1").hide();
	    	$(this).children(".img2").show();
	    	$(this).children("p").css("color","#3890E9");
	    	$(this).parent("li").siblings("li").children("a").children(".img2").hide();
	    	$(this).parent("li").siblings("li").children("a").children(".img1").show();
	    	$(this).parent("li").siblings("li").children("a").children("p").css("color","#999999");
	    	return false;
	  });

});

$(function(){
            $("#zx1").click(function(){  
                      $("#tips1").show();
                      $("#bg1").css({
                          display: "block", height: $(document).height()
                      });
                      return false;
                })
          $("#tips1 a").click(function(){
              $("#bg1").fadeOut();
              $('#tips1').fadeOut();
              })

          $("#zx2").click(function(){  
                      $("#tips2").show();
                      $("#bg1").css({
                          display: "block", height: $(document).height()
                      });
                      return false;
                })
            $("#del3").click(function(){
                      $("#bg1").fadeOut();
                      $('#tips2').fadeOut();
              })
          $(".dg1").click(function(){
                      $("#bg1").fadeOut();
                      $(this).parent(".ul-pass6").parent('#tips2').fadeOut();
              })

          $("#tips2 ul .dg1").click(function(){
                      $(this).addClass("gou1");
                      $(this).siblings("li").removeClass("gou1");
              })

          

          $("#zx3").click(function(){  
                      $("#tips3").show();
                      $("#bg1").css({
                          display: "block", height: $(document).height()
                      });
                      return false;
          })


          $("#zx4").click(function(){  
                      $("#tips4").show();
                      $("#bg1").css({
                          display: "block", height: $(document).height()
                      });
                      return false;
          })
          $(".dg1").click(function(){
                      $("#bg1").fadeOut();
                      $(this).parent(".ul-pass8").parent('#tips4').fadeOut();
              })
          $("#tips4 ul .dg1").click(function(){
                      $(this).addClass("gou1");
                      $(this).siblings("li").removeClass("gou1");
              })
          $(".qiandao1").click(function(){
                     $(this).hide();
                     $(this).next('.qiandao2').show();
              })
})

$(function(){
            $(".del1").click(function() {
                $("input[name='test']").val("").focus(); // 清空并获得焦点
            });
})
$(function(){
            $(".region1").click(function() {
                $(".dl-region").toggle();
            });
})

$(function(){
            $(".del2").click(function() {
                  $(this).parent("div").parent("li").remove();
            });
         
})


var countdown=60; 
function settime(obj) { 
    if (countdown == 0) { 
        obj.removeAttribute("disabled");    
        obj.value="获取验证码"; 
        countdown = 60; 
        return;
    } else { 
        obj.setAttribute("disabled", true); 
        obj.value="重新发送(" + countdown + ")"; 
        countdown--; 
    } 
setTimeout(function() { 
    settime(obj) }
    ,1000) 
}


$(function(){
            $("#btn5").click(function(){  
                      $("#bj1").show();
                      $("#bg1").css({
                          display: "block", height: $(document).height()
                      });
                      return false;
                })
            $(".cz1").click(function(){
              $("#bg1").fadeOut();
              $('#bj1').fadeOut();
              })
          $(".btn4").click(function(){
              $("#bg1").fadeOut();
              $('#bj1').fadeOut();
              })
})


$(function(){
           $("#bj2").click(function(){
                if($(".del4").css("display")=="none"){
                $(".del4").show(1000);
                $(this).attr("value","取消");
                }else{
                $(".del4").fadeOut(1000);
                $(this).attr("value","编辑");
                }
              });
            $(".del4").click(function() {
              if(confirm("确认删除吗")){
                      $(this).parent(".por1").parent("div").parent(".xhlist1").remove();
                     return false;
                   }  
            });

            $("#anniu1").click(function(){
                $(this).children("a").children("img").toggle();
                return false;
            })
              $(".del5").click(function() {
                 if(confirm("确认删除该地址吗")){
                      $(this).parent(".caozuo1").parent("div").parent(".row").parent(".container").remove();
                     return false;
                   }
                
            });
              $(".del6").click(function() {
                 if(confirm("确认删除该地址吗")){
                      $(this).parent("li").parent("ul").parent(".reg2").remove();
                     return false;
                   }
                
            });


            $("#tjdd1").click(function(){  
                          $("#fkxq1").show();
                          $("#bg1").css({
                              display: "block", height: $(document).height()
                          });
                          return false;
                    })
            $("#fukuan1").click(function(){  
                          $("#fkcg1").show();
                           $('#fkxq1').fadeOut();
                          setTimeout(hide1,3000);
                          return false;
                    })
            $(".close2").click(function(){
                  $(this).parent(".tit1").parent("#fkcg1").fadeOut();
                  })
              $(".close1").click(function(){
                  $("#bg1").fadeOut();
                  $(this).parent(".tit1").parent("#fkxq1").fadeOut();
                  $('#fkxq1').fadeOut();
                  })


              $("#zhankai1").click(function(){  
                          $("#pos2").show();
                          $("#bg1").css({
                              display: "block", height: $(document).height()
                          });
                          return false;
                    })
              $(".close3").click(function(){
                    $("#bg1").fadeOut();
                    $(this).parent(".tit1").parent("#pos2").fadeOut();
                    $('#pos2').fadeOut();
                  })


              // 支付成功
              function hide1(){
                   $('#fkcg1').fadeOut();
                   $("#bg1").fadeOut();
                }
              
                 
             
})


$(document).ready(function(){
//加的效果
$(".add").click(function(){
var n=$(this).prev().val();
var num=parseInt(n)+1;
if(num==0){ return;}
$(this).prev().val(num);
});
//减的效果
$(".jian").click(function(){
var n=$(this).next().val();
var num=parseInt(n)-1;
if(num==0){ return}
$(this).next().val(num);
});
})

// 消息
function ajaxa(){
         $.ajax({
                type:"POST",
                dataType : "json",
                async: false,
                url : "${pageContext.request.contextPath}/docinf/sendInform/lookForMsgNum.do",
                data : {},
                success : function(data){
                    if(data !=null){
                        if(parseInt(data)>10){
                            $("#msgNum").show();
                            $("#msgNum").text(parseInt(data));
                        }else if(parseInt(data)> 0){
                            $("#msgNum").show();
                            $("#msgNum").text(parseInt(data));
                        }else{
                            $("#msgNum").hide();
                        }
                    }
                },
                error:function(){
                }
            });
    }





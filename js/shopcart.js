$(document).ready(function () {
    console.log($(".j-check").prop("checked"));

    if(localStorage.shopping){
        var str = localStorage.shopping;
    }
    else{
        str="";
    }
    $("#tbody").html(str);

    getcnt();

    function getcnt(){
        var cnt = 0;
        $(".cart-item").each(function(){
            cnt++;
        });
        $("#mycnt").text(cnt);
    }

    $(".p-action").click(function(){
        $(this).parents(".cart-item").remove();
        getSum();
        getcnt();

        mybody=$("#tbody").html();
        localStorage.shopping=mybody;
    });

    $(".checkall").change(function(){
        $(".j-check").prop("checked",$(this).prop("checked"));
        getSum();
    })

    $(".j-check").change(function () {
        if($(".j-check:checked").length == $(".j-check").length){
            $(".checkall").prop("checked", true);
        }
        else{
            $(".checkall").prop("checked", false);
        }
        getSum();
    });

    $(".itxt").change(function(){
        var n=$(this).val();
        if(n<1){
            $(this).val(1);
            n = 1;
        }
        var p=$(this).parents(".p-num").siblings(".p-price").html();
        var price=(p*n).toFixed(0);
        $(this).parents(".p-num").siblings(".p-sum").text(price);
        getSum();
    });

    $(".inc").click(function(){
        var n=$(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        
        var p=$(this).parents(".p-num").siblings(".p-price").html();
        var price=(p*n).toFixed(0);
        $(this).parents(".p-num").siblings(".p-sum").html(price);
        getSum();
    });
    $(".dec").click(function(){
        var n=$(this).siblings(".itxt").val();
        if(n==1){
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);

        var p=$(this).parents(".p-num").siblings(".p-price").html();
        var price=(p*n).toFixed(0);
        $(this).parents(".p-num").siblings(".p-sum").html(price);
        getSum();
    });

    function getSum(){
        var cnt = 0;
        var item = $(".j-check:checked").parents(".cart-item");
        item.find(".itxt").each(function(index,element){
            cnt += parseFloat($(element).val());
        });
        
        $(".amt").text(cnt);

        var cnt2 = 0;
        var item = $(".j-check:checked").parents(".cart-item");
        item.find(".p-sum").each(function(index,element){
            cnt2 += parseFloat($(element).text());
        });
        
        $(".amt2").text(cnt2);
    }

   
});


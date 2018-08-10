$.get("http://193.112.55.79:9090/api/getindexmenu", "", function (res) {
    console.log(res);
    var html = template("fist", {
        arr: res.result
    });
    $(".logo").html(html);

}, "json")

$.get("http://193.112.55.79:9090/api/getmoneyctrl", "", function (res) {
    console.log(res);
    var html2=template("two",{
        arr:res.result
    });
    $(".mo_title ul").html(html2);
}, "json")

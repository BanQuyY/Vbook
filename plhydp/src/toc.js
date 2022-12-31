function execute(url) {
    
    var doc = fetch(url).html();
    var el = doc.select(".section-box ul li a")
    const list = [];
    for (var i = 12; i < el.size(); i++) {
        var e = el.get(i);
        list.push({
            name: e.text(),
            url: e.attr("href").replace(".html",""),
            host: "http://u.plhydp.com/"
        })
    }
    return Response.success(list)
    

}

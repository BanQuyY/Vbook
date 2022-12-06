function execute(url) {
    const yUrl = url.replace('/book','').replace('.html','/dir.html');
    var doc = fetch(yUrl).html();
    var el = doc.select(".bg-white .pl30 a")
    const list = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        list.push({
            name: e.attr("title"),
            url: e.attr("href"),
            host: "https://m.twfanti.com"
        })
    }
    return Response.success(list)
}

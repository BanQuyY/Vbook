function execute(url) {
    ///////const yUrl = url.replace('m.','www.');
    const doc = fetch(url).html();
    
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".pt-new-item img").first().attr('src'),
        author: doc.select(".flex-wrp a").first().text(),
        description: doc.select(".pt-book-intro").html(),
        detail: doc.select(".booktitle p").html(),
        category: doc.select(".booktitle p").html(),
        host: "https://www.yushubo.net"
    });
}
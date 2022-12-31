function execute(url) {
    let response = fetch(url + "/");
    if (response.ok) {

        let doc = response.html();
        let coverImg = doc.select('meta[name="og:image"]').attr("content");
        if (coverImg.startsWith("//")) {
            coverImg = "https:" + coverImg;
        }
        return Response.success({
            name: doc.select('meta[name="og:novel:book_name"]').attr("content"),
            cover: coverImg,
            author: doc.select('meta[name="og:novel:author"]').attr("content"),
            description: doc.select(".description").text(),
            detail:'作者：'+ doc.select('meta[name="og:novel:author"]').attr("content"),
            host: "https://cn.ttkan.co"
        });
    }
    return null;
}
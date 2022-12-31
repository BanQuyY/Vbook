function execute(url) {
    let response = fetch(url + "/");
    if (response.ok) {

        let doc = response.html();
        let coverImg = doc.select('meta[property="og:image"]').attr("content");
        if (coverImg.startsWith("//")) {
            coverImg = "http:" + coverImg;
        }
        return Response.success({
            name: doc.select('meta[property="og:novel:book_name"]').attr("content"),
            cover: coverImg,
            author: doc.select('meta[property="og:novel:author"]').attr("content"),
            description: doc.select('meta[property="og:description"]').attr("content"),
            detail: "作者：" + doc.select('meta[property="og:novel:author"]').attr("content"),
            host: "http://www.plhydp.com"
        });
    }
    return null;
}
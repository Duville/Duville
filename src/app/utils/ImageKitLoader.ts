export const imageKitLoader = ({ src, width, quality }) => {
    if (src[0] === "/") src = src.slice(1);
    const params = [`w-${width}`];
    if (quality) {
        params.push(`q-${quality}`);
    }
    const paramsString = params.join(",");
    var urlEndpoint =
        // "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public";
        "https://ik.imagekit.io/duvillerealstate/Duville%20Estate/public";
    if (urlEndpoint[urlEndpoint.length - 1] === "/")
        urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
    return `${urlEndpoint}/${src}?tr=${paramsString}`;
};

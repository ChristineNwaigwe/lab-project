export default function importAllImages(r){
    let images = {};
    r.keys().forEach((key)=>{
        const imgName = key.replace('./', '' );
        images[imgNanme] = r(key);
    });
    return images;
}
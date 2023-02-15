// Added this cos of the ts-node build errors complaining about lib: dom 
/// <reference lib="dom" />

export default async (url: string, fileName: string)
  : Promise<void> => {
    const image = await fetch(url);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);
  
    const anchor = document.createElement("a");
    anchor.href = imageURL;
    anchor.download = fileName;
  
    document.body.appendChild(anchor);
    anchor.click();
};

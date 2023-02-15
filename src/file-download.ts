// Added this cos of the ts-node build errors complaining about lib: dom 
/// <reference lib="dom" />

export default async (url: string, fileName: string)
  : Promise<void> => {
  const res = await fetch(
    url,
    {
      method: 'get',
      mode: 'no-cors',
      referrerPolicy: 'no-referrer',
    },
  );

  const res_1 = await res.blob();
  const aElement = document.createElement('a');
  aElement.setAttribute('download', fileName);

  const href = URL.createObjectURL(res_1);
  aElement.href = href;
  // aElement.setAttribute('href', href);
  aElement.setAttribute('target', '_blank');
  aElement.click();

  URL.revokeObjectURL(href);
};

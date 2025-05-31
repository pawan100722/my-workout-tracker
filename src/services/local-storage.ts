// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function saveDataLocally(keyParam: string, valueParam: any) {
  console.log("saving key:", keyParam);
  console.log("saving value:", valueParam);
  localStorage.setItem(keyParam, JSON.stringify(valueParam));
  console.log("Data Saved locally!!!");
}

export function getLocallySavedData(keyParam: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = localStorage.getItem(keyParam);
  return data && data!=='undefined' ? JSON.parse(data) : null;
}

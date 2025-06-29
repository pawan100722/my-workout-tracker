// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function saveDataLocally(keyParam: string, valueParam: any) {
  localStorage.setItem(keyParam, JSON.stringify(valueParam));
}

export function getLocallySavedData(keyParam: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = localStorage.getItem(keyParam);
  return data && data!=='undefined' ? JSON.parse(data) : null;
}


export function clearLocallySavedData(keyParam:string){
  localStorage.removeItem(keyParam);
}
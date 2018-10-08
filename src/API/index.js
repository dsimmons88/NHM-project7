class helper {
  static baseURL(){
    return "https://api.foursquare.com/v2";
  }
  static auth(){
    const keys = {
      client_id: "MJ5O3Y24ZSBNLGHJKUDKCYKXYCBGLZZKRZHEYXGHLRS1BNC3",
      client_secret: "T3EHZUG0FSQZP2555JAOZBXLXEQC43544OUMILBH41051KBO",
      v:"20181007"
    }
    return Object.keys(keys)
    .map(key => `${key}=${keys[key]}`)
    .join("&");
  }
  static urlBuilder(urlPrams) {
    if(!urlPrams) {
      return "";
    }
    return Object.keys(urlPrams)
    .map(key => `${key}=${urlPrams[key]}`)
    .join('&');
  }

  static headers() {
    return {
      Accept: "application/json"
    };
  }
  static simpleFetch(endPoint,method,urlPrams){
    let requestData = {
      method,
      headers: helper.headers()
  };
  return fetch(`${helper.baseURL()}${endPoint}?${helper.auth()}&${helper.urlBuilder(
    urlPrams
  )}`,
  requestData
).then(res => res.json());
  }
}

export default class SquareAPI {
  static search(urlPrams){
    return helper.simpleFetch("/venues/search","Get", urlPrams);
  }
  static getVenueDetails(VENUE_ID) {
    return helper.simpleFetch(`/venues/${VENUE_ID}`,"GET" );
  }
  static getVenuePhotos(VENUE_ID) {
    return helper.simpleFetch(`venues/${VENUE_ID}/photos`, "GET");
  }
}

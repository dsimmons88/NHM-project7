class helper {
//base url

static url() {

  return  "https://api.foursquare.com/v2";
}
// the authenthenication keys for the api
static auth() {
  const keys = {
    client_id: "MJ5O3Y24ZSBNLGHJKUDKCYKXYCBGLZZKRZHEYXGHLRS1BNC3",
    client_secret: "T3EHZUG0FSQZP2555JAOZBXLXEQC43544OUMILBH41051KBO",
    v:"20181007"
  }
  return Object.keys(keys)
  .map(key => `${key}=${keys[key]}`)
  .join("&");
/*
let  client_id= "MJ5O3Y24ZSBNLGHJKUDKCYKXYCBGLZZKRZHEYXGHLRS1BNC3";
let client_secret = "T3EHZUG0FSQZP2555JAOZBXLXEQC43544OUMILBH41051KBO";
let v = "20181008";

let key = `"client_id="+${client_id}+&+"client_secret="${client_secret}+&+"v="+${v}`;
return key;

*/
}
// where you will put the parameter for the api
static urlCreator(urlPrams) {
  if(!urlPrams) {
    return "";
  }
  return Object.keys(urlPrams)
  .map(key => `${key}=${urlPrams[key]}`)
  .join('&');
}
// headers for the api
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
return fetch(`${helper.url()}${endPoint}?${helper.urlCreator(
  urlPrams
)}&${helper.auth()}`,
requestData
).then(res => res.json());
}
}
// api parameters needed for the project
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

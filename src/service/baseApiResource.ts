class BaseApiResource {
  baseUrl: string;
  commonParams?: string;

  constructor(baseUrl: string, commonParams?: any) {
    this.baseUrl = baseUrl;
    // common params like API key that need to be sent with all requests
    this.commonParams = commonParams;
    if (commonParams) {
      let params = ``;
      Object.keys(commonParams).forEach(
        key => (params += `${key}=${commonParams[key]}`),
      );
      this.commonParams = params;
    }
  }

  getAbsoluteUrl(endpoint: string) {
    let url = `${this.baseUrl}/${endpoint}`;
    if (this.commonParams) {
      if (url.includes('?')) {
        url += `&${this.commonParams}`;
      } else {
        url += `?${this.commonParams}`;
      }
    }
    return url;
  }

  async get(endpoint: string) {
    return fetch(this.getAbsoluteUrl(endpoint)).then(res => res.json());
  }

  async post(endpoint: string, body: any) {
    return fetch(this.getAbsoluteUrl(endpoint), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    }).then(res => res.json());
  }
}

export default BaseApiResource;

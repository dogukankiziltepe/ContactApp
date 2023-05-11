import axios, {
    AxiosRequestConfig,
    AxiosInstance,
    AxiosResponse,
    AxiosError,
  } from "axios";
  import store from "@utils/asyncStorage";
  import { castThunkAction } from "@helpers/casting";
  // import * as Network from 'expo-network';
  import { getUrlCreate } from "@config/apiConfig";
  
  export interface RequestConfigWithMetadata extends AxiosRequestConfig {
    metadata: {
      requestStartTimestamp: number;
    };
  }
  
  export class HttpClient {
    static _authenticatedClient?: HttpClient;
    static _client?: HttpClient;
    private axiosClient!: AxiosInstance;
  
    // async getIpAddress() {
    // 	const ipAddress = await Network.getIpAddressAsync();
  
    // 	return ipAddress;
    // }
  
    // async getUserAgent() {
    // 	const userAgent = await Constants.getWebViewUserAgentAsync()
  
    // 	return userAgent;
    // }
  
    post(url: string, request: any): Promise<any> {
      let headers: any = {
        accept: "application/json",
        "content-type": "application/json",
      };
  
      // this.getIpAddress().then(res => { headers["CLIENT_IP"] = res });
      // this.getUserAgent().then(res => { headers["User-Agent"] = res });
  
      return castThunkAction(store.get("userToken")).then((token) => {
        headers["Authorization"] = `Bearer ${token}`;
        headers["ReferenceNo"] = `Can Bey`;
  
        // console.log(url, request, headers, "params")
        return this.axiosClient
          .post(url, request, {
            headers,
          })
          .then((res) => {
            // console.log(JSON.stringify(res.data), "res post")
            return { data: res.data, httpStatus: res.status,headers:res.headers };
          })
          .catch((err) => {
            return { data: null, httpStatus: err.response?.status };
          });
      });
    }
  
    put(url: string, request: any): Promise<any> {
      // console.log(request, "params put")
  
      return castThunkAction(store.get("userToken")).then((token) => {
        return this.axiosClient
          .put(url, request, {
            headers: {
              Authorization: `Bearer ${token}`,
              ReferenceNo: `Can Bey`
            },
          })
          .then((res) => {
            // console.log(res.data, "res put")
            return { data: res.data, httpStatus: res.status };
          })
          .catch((err) => {
            return { data: null, httpStatus: err.response?.status };
          });
      });
    }
  
    patch(url: string, request: any): Promise<any> {
      return castThunkAction(store.get("userToken")).then((token) => {
        return this.axiosClient
          .patch(url, request, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            return { data: res.data, httpStatus: res.status,headers:res.headers };
          })
          .catch((err) => {
            return { data: null, httpStatus: err.response?.status };
          });
      });
    }
  
    get(url: string): Promise<any> {
      let headers: any = {
        accept: "application/json",
        "content-type": "application/json",
      };
  
      // this.getIpAddress().then(res => { headers["CLIENT_IP"] = res });
      // this.getUserAgent().then(res => { headers["User-Agent"] = res });
  
      return castThunkAction(store.get("userToken")).then((token) => {
        headers["Authorization"] = `Bearer ${token}`;
        headers["ReferenceNo"] = `Can Bey`;
  
        // console.log(url, headers, "params GETSS")
  
        return this.axiosClient
          .get(url, {
            headers: headers,
          })
          .then((res) => {
            // console.log(res.data, "res GETTTSS")
            return { data: res?.data, httpStatus: res.status };
          })
          .catch((err) => {
            return { data: null, httpStatus: err.response?.status };
          });
      });
    }
  
    delete(url: string): Promise<any> {
      return castThunkAction(store.get("userToken")).then((token) => {
        // console.log(url, token)
        return this.axiosClient
          .delete(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            return { data: res?.data, httpStatus: res.status };
          })
          .catch((err) => {
            return { data: null, httpStatus: err.response?.status };
          });
      });
    }
    /**
     * Returns the HttpClient that includes Authentication header automatically.
     */
    static getClient(): HttpClient {
      if (!this._authenticatedClient) {
        const client = new HttpClient();
        client.axiosClient = axios.create();
        client.axiosClient.interceptors.request.use((request: any) => {
          return castThunkAction(store.get("userToken")).then((token) => {
            request.headers = {
              ...request.headers,
              Authorization: "Bearer " + token,
              accept: "application/json",
              "content-type": "application/json",
            };
            return request;
          });
        });
  
        client.axiosClient.interceptors.response.use(
          (response: AxiosResponse<any>) => response,
          (error: AxiosError) => {
            const originalRequest = error.config;
            //   console.log(error.response, "error.response");
            if (error.response && error.response.status === 401) {
              // console.log("401 login");
              return castThunkAction(store.get("userToken")).then((token) => {
                if (token) {
                  return castThunkAction(store.get("refreshToken")).then(
                    (refreshToken) => {
  
                      const request = {
                        token,
                        refreshToken,
                      };
  
                      // fetch(getUrlCreate("Account/Account/RefreshLogin"), {
                      //   method: 'POST',
                      //   headers: {
                      //     'Content-Type': 'application/json',
                      //     "accept": "application/json",
  
                      //   },
                      //   body: JSON.stringify(request),
                      // })
                      //   .then(response => response.json())
                      //   .then(data => {
                      //     console.log('Success:', data);
                      //   })
                      //   .catch((error) => {
                      //     console.error('Error:', error);
                      //   });
  
  
  
  
                      return client.axiosClient
                        .post(
                          getUrlCreate("Account/Account/RefreshLogin"),
                          request,
                          {
                            headers: {
                              accept: "application/json",
                              "content-type": "application/json",
                            },
                          }
                        )
                        .then((res) => {
  
                          // console.log('Success:', JSON.stringify(res.data, null, 4));
  
                          if (res.data.status === 200) {
                            // console.log(
                            //   res.data.refreshToken,
                            //   "res.data.refreshToken"
                            // );
                            // console.log("refresh login yapıldı");
                            castThunkAction(
                              store.save("refreshToken", res.data.refreshToken)
                            );
                            castThunkAction(
                              store.save("userToken", res.data.token)
                            ).then(() => {
                              axios.defaults.headers.common[
                                "Authorization"
                              ] = `Bearer ${res.data.token}`;
                              return axios(originalRequest);
                            });
                          }
                        });
                    }
                  );
                }
              });
            }
            //return Promise.reject(error);
  
            return error.response;
          }
        );
  
        this._authenticatedClient = client;
      }
  
      return this._authenticatedClient;
    }
  
    static getDefaultClient(baseURL?: string): HttpClient {
      if (!this._client) {
        const client = new HttpClient();
  
        client.axiosClient = axios.create({
          baseURL,
        });
  
        this._client = client;
      }
  
      return this._client;
    }
  }
  
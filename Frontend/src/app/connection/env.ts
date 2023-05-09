
export const baseUrl =  `${process.env.API_BASE_URL as string}/`;
export const refresh = `auth/refresh`;
export const header = {
      headers: {
          "Content-Type": "application/json",
          withCredentials: true
       }
  }
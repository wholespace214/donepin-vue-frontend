import { useContext } from "@nuxtjs/composition-api";

export default function useAxios() {
  const { $axios, $storage } = useContext();

  const bearerToken = $storage.getLocalStorage("JWT");

  if (bearerToken) $axios.setToken(bearerToken, "Bearer");

  const axiosGet = (url: string, credential?: any) =>
    $axios.get(url, credential);

  const axiosPost = (url: string, credential?: any) =>
    $axios.post(url, credential);

  const axiosPatch = (url: string, credential?: any) =>
    $axios.patch(url, credential)

  const axiosDelete = (url: string, credential?: any) =>
    $axios.delete(url, credential);

  return { axiosGet, axiosPost, axiosDelete, axiosPatch };
}

import { AppState } from "../AppState"
import { Picture } from "../models/Picture"
import { nasaApi } from "./AxiosService"

class PicturesService{
  async getPicture(query){
    try {
      const res = await nasaApi.get('apod?api_key=roWnpkkAZnipBPHr7FjAfhv0ChFGNOVZ9bNKdUBL&date=' + query)
      console.log(res.data)
      AppState.picture = res.data(picture => new Picture(picture))
    } catch (error) {
      console.error(error)
    }
  }
}
export const picturesService = new PicturesService()
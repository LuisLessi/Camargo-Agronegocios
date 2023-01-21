import { http } from './api'

export default {
    listarCidade: () => {
        return http.get('/api/v1/cities') 
      },
}
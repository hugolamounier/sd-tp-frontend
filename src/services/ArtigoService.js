import axiosInstance from '../shared/axiosInstance/axiosInstance';

class ArtigoService {
  static async insertArtigo({ formData }) {
    const response = await axiosInstance.post(`/artigos/`, formData);

    return response;
  }

  static async updateArtigo({ formData, id }) {
    const response = await axiosInstance.put(`/artigos/${id}/`, formData);

    return response;
  }

  static async getArtigo({ id = 0, search = null }) {
    const haveId = id === 0 ? '' : id;
    const haveSearch = search ? `?search=${search}` : '';

    const { data } = await axiosInstance.get(`/artgios/${haveId}${haveSearch}`);

    return await data;
  }

  static async deleteArtigo({ id }) {
    const response = await axiosInstance.delete(`/${id}`);

    return response;
  }
}

export default ArtigoService;

class ArtigoService {
  static API_URL = 'http://127.0.0.1:8000/artigos';

  static async insertArtigo({ formData }) {
    const response = await fetch(`${this.API_URL}/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: formData,
    });

    return response;
  }

  static async updateArtigo({ formData, id }) {
    const response = await fetch(`${this.API_URL}/${id}/`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: formData,
    });

    return response;
  }

  static async getArtigo({id = 0, search = null}){
    const haveId = id === 0 ? "" : id;
    const haveSearch = search ? `?search=${search}` : "";

      const response = await fetch(`${this.API_URL}/${haveId}${haveSearch}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return await response.json();
  }

  static async deleteArtigo({id}){
    const response = fetch(`${this.API_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response;
  }
}

export default ArtigoService;

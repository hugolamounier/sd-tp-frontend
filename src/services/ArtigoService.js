class ArtigoService {
  static API_URL = 'http://127.0.0.1:8000/artigos/';

  static async insertArtigo({ formData }) {
    const response = await fetch(`${this.API_URL}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: formData,
    });

    return response;
  }
}

export default ArtigoService;

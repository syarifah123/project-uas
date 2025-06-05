import axios from "axios";

const API_URL = "https://cqhgxggulbpxckhxzvsq.supabase.co/rest/v1/produk";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxaGd4Z2d1bGJweGNraHh6dnNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDg2MzEsImV4cCI6MjA2NDQ4NDYzMX0.CCiEC90rSRj76_OlaGCWjRo9fosYGPE6uRHfcankW-U";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const produkAPI = {
  async fetchNotes() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  async createNote(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },
  async updateNote(id, data) {
    try {
      const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating note:", error);
      throw error; // Menangani error dengan baik
    }
  },
  async deleteNote(id) {
  try {
    const response = await axios.delete(`${API_URL}?id=eq.${id}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error; // Menangani error jika gagal
  }
}
};

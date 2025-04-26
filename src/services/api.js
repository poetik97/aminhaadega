const API_BASE = import.meta.env.VITE_API_URL;

export async function fetchWines() {
  const response = await fetch(`${API_BASE}/wines`);
  if (!response.ok) throw new Error('Erro ao buscar vinhos');
  return response.json();
}

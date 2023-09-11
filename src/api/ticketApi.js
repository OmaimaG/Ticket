import axios from 'axios';

export const getAllTickets = async () => {
  try {
    // Récupérez le jeton depuis sessionStorage
    
    const token = localStorage.getItem('token');
    console.log(token);
    
    // Vérifiez si le jeton existe
    if (!token) {
      throw new Error('Access token is missing.'); // Gérez le cas où le jeton est manquant
    }

    const response = await axios.get('http://localhost:5000/ticket', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Si la requête réussit, retournez les données de la réponse
    return response.data;
  } catch (error) {
    // Si une erreur se produit, rejetez la promesse avec l'objet d'erreur
    throw error;
  }
};

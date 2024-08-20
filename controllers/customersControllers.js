const Customers = require('../models/customers');

// Fonction pour ajouter un client
const ajout_customers = async (req, res) => {
  try {
    // Vérifier si l'email ou le numéro de téléphone existe déjà
    const { mail_address, phone_number } = req.body;

    const existingClientByEmail = await Customers.findOne({ mail_address });
    const existingClientByPhone = await Customers.findOne({ phone_number });

    if (existingClientByEmail) {
      return res.status(400).json({ message: 'L\'email est déjà utilisé.' });
    }

    if (existingClientByPhone) {
      return res.status(400).json({ message: 'Le numéro de téléphone est déjà utilisé.' });
    }

    // Créer un nouveau client
    const newCustomers = new Customers(req.body);

    // Sauvegarder le client dans la base de données
    await newCustomers.save();

    // Répondre avec succès
    res.status(200).json({ message: 'Client ajouté avec succès.', customers: newCustomers });

  } catch (error) {
    // Gérer les erreurs
    console.error(error);
    res.status(400).json({ message: 'Erreur lors de l\'ajout du client.' });
  }
};

//Fonction pour recuperer les details d'un client 
const details_customers = async (req, res) => {
    try {
        const { phone_number } = req.params;
        const customers = await Customers.findOne({phone_number});
        if(!customers)
        {
            return res.status(400).json({ message: 'Client non trouvé.' });
        }
        res.status(200).json({ message: 'Client trouvé avec succès.', details_customers: customers });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des informations du client.' });
        }
};

module.exports = { ajout_customers, details_customers };
const petModel = require("../model/pet")

const petController = {
    index: (req, res) => {
        res.send(petModel.listarPets());
    },
    add: (req, res) => {
        let novoPet = req.params;
        petModel.adicionarPet(novoPet);
        res.send(`opa, ${novoPet.nome} foi adicionado com sucesso!`)
    },
    buscar: (req, res) => {
        let nomePet = req.params.nome;
        let petsEncontrados = petModel.buscarPet(nomePet);
        if (petsEncontrados.length > 0){
            res.send(`opa temos ${petsEncontrados.length} pets encontrados`)
        } else {
            res.send(`não encontramos nenhum pet com o nome ${nomePet}`)
        }
    }
};

module.exports = petController;

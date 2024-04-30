const Controller = require('./Controller.js');
const CursoServices = require('../services/CursoServices.js');
const { Op } = require('sequelize');

const cursoServices = new CursoServices();

class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }

  async pegaCursos(req, res) {
    const { data_inicial, data_final } = req.query;
    const where = {};

    //*Se existirem os parâmetros, cria uma prop {}
    data_inicial || data_final ? where.data_inicio = {} : null;
    //*Se existir data inicial, adiciona a prop gte
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
    //*Se existir data final, adiciona a prop lte
    data_final ? where.data_inicio[Op.lte] = data_final : null;

    try {
      const listaCursos = await cursoServices.pegaTodosOsRegistros(where);
      return res.status(200).json(listaCursos);
    } catch(erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = CursoController;
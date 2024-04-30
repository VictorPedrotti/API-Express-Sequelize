module.exports = (objetoParams) => {
  for (let propriedade in objetoParams) {
    //? Expressão regular para validar se o parametro contém Id ou id
    if (/Id|id/ .test(propriedade)) {
      //* Pega todos os parâmetros Id e transforma em valores numéricos
      objetoParams[propriedade] = Number(objetoParams[propriedade]);
    }
  }
  return objetoParams;
};



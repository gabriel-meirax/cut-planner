function status(request, response) {
  response.status(200).send({ chave: "Funcionando corretamente" });
}

export default status;

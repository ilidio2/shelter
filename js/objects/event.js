function Event(dia, mes, ano, hora, local, rua, cidade, criador) {
    this.date = new Date(ano, mes, dia, 0, 0, 0);
    this.hora = hora;
    this.local = local;
    this.rua = rua;
    this.cidade = cidade;
    this.criador = criador;
}
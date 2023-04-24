function Information() {
  return (
    <div className="Information bg-white w-[60%] mx-auto min-h-[400px] flex flex-row rounded-xl">
      <div className="Information-content flex flex-col w-[70%] rounded-l-xl bg-gray-200 pt-10">
        <div className="Information-head mx-auto mb-6">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form flex flex-col">
          <form action="" className="flex flex-col w-[60%] mx-auto">
            <input
              className="form-input"
              type="text"
              placeholder="Nombre completo"
              name="name"
            />
            <input
              className="form-input"
              type="text"
              placeholder="Correo Electronico"
              name="email"
            />
            <input
              className="form-input"
              type="text"
              placeholder="Direccion"
              name="addres"
            />
            <input
              className="form-input"
              type="text"
              placeholder="apto"
              name="apto"
            />
            <input
              className="form-input"
              type="text"
              placeholder="Ciudad"
              name="city"
            />
            <input
              className="form-input"
              type="text"
              placeholder="Pais"
              name="country"
            />
            <input
              className="form-input"
              type="text"
              placeholder="Estado"
              name="state"
            />
            <input
              className="form-input"
              type="text"
              placeholder="Codigo postal"
              name="cp"
            />
            <input
              className="form-input"
              type="text"
              placeholder="Telefono"
              name="phone"
            />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <div className="Information-next">pagar</div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>ITEM Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;

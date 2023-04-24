function Checkout() {
  return (
    <div className="Checkout bg-white w-[60%] mx-auto min-h-[400px] flex flex-row rounded-xl">
      <div className="Checkout-content bg-gray-300 w-[70%] pt-12 pl-20 flex-col rounded-l-xl">
        <h3 className="text-2xl font-bold">Lista de Pedidos:</h3>
        <div className="Checkout-item rounded-xl bg-white mr-20 my-5">
          <div className="Checkout-element flex flex-row justify-between h-16 items-center">
            <h4 className="ml-6 font-bold">ITEM name</h4>
            <span>$10</span>
            <button
              type="button"
              className="mr-8 bg-red-600 py-2 px-4 rounded-3xl"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
      <div className="w-1 bg-gray-800" />
      <div className="Checkout-sidebar mx-auto my-10 flex flex-col">
        <h3 className="text-2xl font-semibold">Precio Total: $10</h3>
        <button
          type="button"
          className="mt-4 bg-gray-800 px-4 py-2 rounded-3xl text-white"
        >
          Continuar pedido
        </button>
      </div>
    </div>
  );
}

export default Checkout;

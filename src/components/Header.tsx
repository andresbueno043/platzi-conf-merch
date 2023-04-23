function Header() {
  return (
    <nav className="bg-slate-800 h-14 flex items-center justify-center">
      <div className="flex w-[70%] justify-between items-center">
        <h1 className="text-xl font-bold text-white">PlatziConf Merch</h1>
        <button
          className="bg-slate-400 py-1 px-10 rounded-3xl text-white border-slate-950 border-4"
          type="button"
        >
          Checkout
        </button>
      </div>
    </nav>
  );
}

export default Header;

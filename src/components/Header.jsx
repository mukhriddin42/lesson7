const Header = () => {
  return (
    <div className="flex justify-between items-center px-16 py-6 shadow bg-white">
      <h2 className="text-2xl font-bold">Where in the world ?</h2>
      <button className="flex items-center gap-2 text-sm">
        <i className="bx bxs-moon"></i>Dark mode
      </button>
    </div>
  );
};

export default Header;

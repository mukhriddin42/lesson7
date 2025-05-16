import { useTranslation } from "react-i18next";

const Header = () => {
  const {t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    console.log(event.target.value);
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div className="flex fixed bg-white z-100 w-[100%] justify-between items-center px-16 py-6 shadow bg-white">
      <h2 className="text-2xl font-bold">{t('header-title')}</h2>
      <select
        className="px-4 py-1 bg-white border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700"
        name=""
        value={i18n.language}  //Joriy tilni ko'rsatish
        onChange={handleLanguageChange}
        id=""
      >
        <option value="uz">uz</option>
        <option value="en">en</option>
        <option value="ru">ru</option>
      </select>
      <button className="flex items-center gap-2 text-sm">
        <i className="bx bxs-moon"></i>Dark mode
      </button>
    </div>
  );
};

export default Header;

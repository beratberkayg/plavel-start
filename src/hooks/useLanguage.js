import { useSelector } from "react-redux";

const useLanguage = () => {
  const language = useSelector((state) => state.layout.language);

  return [language];
};

export default useLanguage;

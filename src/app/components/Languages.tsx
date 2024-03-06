"use client";

import { useLanguage } from "../contexts/ContextHooks";
import Btn from "./Btn";

const Languages = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="languages-container">
      <Btn>
        <div
          className={
            language === "ES" ? "languages es-active" : "languages en-active"
          }
        >
          <div
            tabIndex={0}
            role="button"
            onKeyDown={() => setLanguage("ES")}
            onClick={() => setLanguage("ES")}
            className="es"
          >
            ES
          </div>

          <div
            tabIndex={0}
            role="button"
            onKeyDown={() => setLanguage("EN")}
            onClick={() => setLanguage("EN")}
            className="en"
          >
            EN
          </div>
        </div>
      </Btn>
    </div>
  );
};

export default Languages;

"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/ja/zod.json";

translation.errors.invalid_type_received_undefined = "入力してください";
translation.errors.invalid_type_received_null = "入力してください";

export const ClientSideSetUp: React.FC = () => {
  i18n.use(initReactI18next).init({
    lng: "ja",
    resources: {
      ja: { zod: translation },
    },
  });
  z.setErrorMap(zodI18nMap);

  return null;
};

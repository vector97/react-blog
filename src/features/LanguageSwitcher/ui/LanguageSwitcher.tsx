import { cls } from "@shared/lib/classNames";
import { FC } from "react";
import { Button } from "@shared/ui/Button";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
    const { className } = props;

    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18next.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            className={cls("", {}, [className])}
            variant="clear"
            onClick={toggleLanguage}
        >
            {t("Язык")}
        </Button>
    );
};

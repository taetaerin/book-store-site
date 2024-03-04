import { useContext } from "react";
import { ThemeName } from "@/style/theme";
import { ThemeContext } from "@/context/themeContext";
import Button from "../common/Button";

interface Props {
    themeName: ThemeName;
    setThemeName: (themeName: ThemeName) => void;
}

export default function ThemeSwitcher() {
    const {themeName, toggleTheme} = useContext(ThemeContext)

    return <Button size="small" scheme="normal" onClick={toggleTheme}>{themeName}</Button>;
}

import {createRoot} from "react-dom/client";
import {App} from "@app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@shared/config/theme";

const root = createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
)

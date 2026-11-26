import { Linking } from "react-native";
import WebView from "react-native-webview";

function PageIBGE() {
    const URL_INICIAL = "https://www.ibge.gov.br/";

    const handleNavigation = (request) => {
        const { url, isTopFrame } = request;


        if (!isTopFrame) {
            return true;
        }


        const isAllowedDomain =
            url === "https://www.ibge.gov.br/" ||
            url.startsWith("/www.ibge.gov.br/") ||
            url.startsWith("/www.ibge.gov.br?");

        if (isAllowedDomain) {
            return true;
        }


        if (url.startsWith("https://")) {
            Linking.openURL(url).catch((err) =>
                console.warn("Não foi possível abrir o link:", err)
            );
        }

        return false;

    }

    return (
        <WebView
            source={{ uri: URL_INICIAL }}
            originWhitelist={["https://*"]}
            onShouldStartLoadWithRequest={handleNavigation}
            allowFileAccess={false}
            allowUniversalAccessFromFileURLs={false}
            mixedContentMode="never"
            javaScriptEnabled={true}
        />

    );
}

export default PageIBGE;
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";

function PagePoliticometro() {
    const URL_INICIAL = "https://www.politicometro.org/br?uf=pr&cidade=4117602";

    const handleNavigation = (request) => {
        const { url, isTopFrame } = request;

        //Permite carregamentos secundários internos (iframes de gráficos/vídeos)
        if (!isTopFrame) {
            return true;
        }

        //Valida se a navegação principal pertence ao domínio oficial
        const isAllowedDomain =
            url === "https://www.politicometro.org/br" ||
            url.startsWith("https://www.politicometro.org/br/") ||
            url.startsWith("https://www.politicometro.org/br?");

        if (isAllowedDomain) {
            return true;
        }

        //Se for link externo abre no navegador seguro do celular
        if (url.startsWith("https://")) {
            Linking.openURL(url).catch((err) =>
                console.warn("Não foi possível abrir o link:", err)
            );
        }

        // Bloqueia o carregamento dentro da WebView
        return false;
    };

    return (
        //A descrição de cada propriedade é a mesma q esta na documentação no GITHUB do react-native-webview
        <WebView
            source={{ uri: URL_INICIAL }}
            originWhitelist={["https://*"]} //define quais tipos de url podem ser carregadas, aqui, somente HTTPS
            onShouldStartLoadWithRequest={handleNavigation} //funcao permite ou bloqueia o carregamento de uma requisicaoncao 
            // Blindagens adicionais recomendadas:

            allowFileAccess={false} //Se true, isso permitirá o acesso ao sistema de arquivos por meio de URIs file://. O valor padrão é falso.
            allowUniversalAccessFromFileURLs={false} // o padrao ja eh false - define se o javascript executado no contexto de uma URL de esquema de arquivo deve ter permissao pra acessar conteudo de qualquer oigem
            mixedContentMode="never" //WebView não permitirá que uma origem segura carregue conteúdo de uma origem insegura.
            javaScriptEnabled={true} //habilita execucao de js na pagina
        />

    );
}



export default PagePoliticometro;
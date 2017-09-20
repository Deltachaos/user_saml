OC.L10N.register(
    "user_saml",
    {
    "Saved" : "Salvato",
    "X.509 certificate of the Service Provider" : "Certificato X.509 del fornitore di servizi",
    "Private key of the Service Provider" : "Chiave privata del fornitore di servizi",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Indica che il nameID della <samlp:logoutRequest> inviata da questo SP sarà cifrato.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Indica se i messaggi <samlp:AuthnRequest> inviati da questo SP saranno firmati. [I metadati del SP forniranno queste informazioni]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Indica se i messaggi <samlp:logoutRequest> inviati da questo SP saranno firmati.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Indica se i messaggi <samlp:logoutResponse> inviati da questo SP saranno firmati.",
    "Whether the metadata should be signed." : "Decidi se firmare o meno i metadati.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Indica la firma come requisiti per gli elementi <samlp:Response>, <samlp:LogoutRequest> e <samlp:LogoutResponse> ricevuti da questo SP.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Indica la firma come requisito per gli elementi <saml:Assertion> ricevuti da questo SP. [I metadati dello SP forniranno queste informazioni]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Indica la cifratura come requisito per gli elementi <saml:Assertion> ricevuti da questo SP.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Indica la presenza come requisito dell'elemento NameID nella SAMLResponse ricevuta da questo SP.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Indica la cifratura come requisito per il NameID ricevuto da questo SP.",
    "Indicates if the SP will validate all received XML." : "Indica se lo SP convaliderà tutti gli XML ricevuti.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "URL ADFS-Codifica i dati SAML come lettere minuscole, mentre il sistema utilizza, in modo predefinito, le lettere maiuscole. Abilitata per compatibilità con ADFS sulla verifica della firma.",
    "Attribute to map the UID to." : "Attributo a cui associare l'UID.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Consenti l'autenticazione solo se un account esiste in un altro motore. (ad es. LDAP)",
    "Attribute to map the displayname to." : "Attributo a cui associare il nome visualizzato.",
    "Attribute to map the email address to." : "Attributo a cui associare l'indirizzo di posta elettronica.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Utilizza autenticazione SAML per i client desktop di %s (richiede una nuova autenticazione degli utenti)",
    "SSO & SAML authentication" : "Autenticazione SSO e SAML",
    "Open documentation" : "Apri la documentazione",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Scegli se vuoi autenticarti utilizzando il fornitore SAML integratore in Nextcloud o se vuoi autenticarti utilizzando una variabile d'ambiente.",
    "Use built-in SAML authentication" : "Usa autenticazione SAML integrata",
    "Use environment variable" : "Usa variabile d'ambiente",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "Assicurati di configurare un utente amministrativo che possa accedere all'istanza di SSO. L'accesso con il tuo account normale %s non sarà più possibile.",
    "General" : "Generale",
    "Service Provider Data" : "Dati del fornitore di servizi",
    "If your Service Provider should use certificates you can optionally specify them here." : "Se il tuo fornitore di servizi utilizza i certificati, puoi specificarli qui.",
    "Show Service Provider settings…" : "Mostra impostazioni fornitore di servizi...",
    "Identity Provider Data" : "Dati del fornitore di identità",
    "Configure your IdP settings here." : "Configura qui le tue impostazioni IdP.",
    "Identifier of the IdP entity (must be a URI)" : "Identificatore dell'entità IdP (deve essere un URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "Destinazione dell'URL dell'Idp dove lo SP invierà il messaggio di richiesta di autenticazione",
    "Show optional Identity Provider settings…" : "Mostra impostazioni opzionali del fornitore di identità...",
    "URL Location of the IdP where the SP will send the SLO Request" : "Posizione dell'URL dell'IdP dove lo SP invierà la richiesta SLO",
    "Public X.509 certificate of the IdP" : "Certificato X.509 dell'IdP",
    "Attribute mapping" : "Associazione degli attributi",
    "If you want to optionally map attributes to the user you can configure these here." : "Se vuoi associare, in modo facoltativo, gli attributi all'utente, puoi configurarli qui.",
    "Show attribute mapping settings…" : "Mostra le impostazioni di associazione degli attributi...",
    "Security settings" : "Impostazioni di sicurezza",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Per una maggiore sicurezza, consigliamo di abilitare le seguenti impostazioni, se supportate dal tuo ambiente.",
    "Show security settings…" : "Mostra impostazioni di sicurezza...",
    "Signatures and encryption offered" : "Firme e cifratura offerte",
    "Signatures and encryption required" : "Firme e cifratura richieste",
    "Download metadata XML" : "Scarica XML metadati",
    "Metadata invalid" : "Metadati non validi",
    "Metadata valid" : "Metadati validi",
    "Account not provisioned." : "Account non generato.",
    "Your account is not provisioned, access to this service is thus not possible." : "Il tuo account non è stato generato, l'accesso a questo servizio è perciò impossibile",
    "Indicates if the SP will validate all received XMLs." : "Indica se lo SP convaliderà tutti gli XML ricevuti.",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "Consenti l'autenticazione solo se un account esiste in un altro motore. (ad es. LDAP)",
    "Show Service Provider settings ..." : "Mostra impostazioni fornitore di servizi...",
    "Show optional Identity Provider settings ..." : "Mostra impostazioni opzionali del fornitore di identità...",
    "Show security settings ..." : "Mostra impostazioni di sicurezza...",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "Se vuoi associare, in modo facoltativo, gli attributi SAML all'utente, puoi configurarli qui.",
    "Show attribute mapping settings ..." : "Mostra le impostazioni di associazione degli attributi..."
},
"nplurals=2; plural=(n != 1);");

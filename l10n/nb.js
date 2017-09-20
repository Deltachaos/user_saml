OC.L10N.register(
    "user_saml",
    {
    "Saved" : "Lagret",
    "X.509 certificate of the Service Provider" : "X.509 sertifikat for tjenesteleverandøren",
    "Private key of the Service Provider" : "Privat nøkkel for tjenesteleverandøren",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Forteller om <samlp:logoutRequest> av denne SPen er kryptert.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Forteller om <samlp:logoutRequest>-meldinger sendt av denne SP-en vil bli signert. [Metadataen til SP-en vil ha denne infoen å by på]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Forteller om <samlp:logoutRequest> av denne SPen er signert.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Forteller om <samlp:logoutResponse> av denne SP-en er signert.",
    "Whether the metadata should be signed." : "Om metadataene skal være signert.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Forteller om kravet om signering for <samlp:Response>, <samlp:LogoutRequest> og <samlp:LogoutResponse>-elementer mottatt av denne SP-en.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Forteller om kravet om signering for <saml:Assertion>-elementer mottatt av denne SP-en. [Metadataen til denne SP-en vil ha denne infoen å by på]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Forteller om kravet for om kryptering for <saml:Assertion>-elementer mottatt av denne SP-en.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Forteller om kravet om at dette NameID-elementet på SAMLResponse mottatt av denne SP-en skal være tilstede.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Forteller om kravet om at NameID mottatt av denne SP-en skal være kryptert.",
    "Indicates if the SP will validate all received XML." : "Forteller om SP-en skal validere all mottatt XML.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL-koder SAML-data som små bokstaver, og verktøyssettet bruker store bokstaver som forvalg. Skru på for ADFS-kompabilitet for signaturbekreftelse.",
    "Attribute to map the UID to." : "Attributt å binde UID til.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Bare tillat autentisering hvis en konto finnes på en annen bakende. (f.eks. LDAP)",
    "Attribute to map the displayname to." : "Attributt å binde visningsnavnet til.",
    "Attribute to map the email address to." : "Attributt å binde e-postadressen til.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Bruk SAML-auth for %s-skrivebordsklienter (krever ny autentisering av brukere)",
    "SSO & SAML authentication" : "SSO- og SAML-autentisering",
    "Open documentation" : "Åpne dokumentasjonen",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Velg om du vil identifisere deg med SAML-tilbyderen som er innebygget i Nextcloud eller om du vil du vil identifisere deg mot en miljøvariabel.",
    "Use built-in SAML authentication" : "Bruk innebygd SAML-autentisering",
    "Use environment variable" : "Bruk miljøvariabel",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "Sett opp en administrativ bruker som kan nå installasjonen via SSO. Innlogging med din vanlige %s-konto vil ikke være mulig lenger.",
    "General" : "Generelt",
    "Service Provider Data" : "Tjenesteleverandørdata",
    "If your Service Provider should use certificates you can optionally specify them here." : "Hvis din tjenesteleverandør skal bruke sertifikater kan du velge å spesifisere dem her.",
    "Show Service Provider settings…" : "Vis tjenesteleverandørinnstillinger…",
    "Identity Provider Data" : "Identitetstilbyder-data",
    "Configure your IdP settings here." : "Konfigurer dine IdP innstillinger her.",
    "Identifier of the IdP entity (must be a URI)" : "Identifikator for IdP-enheten (må være en URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL-mål for IdP der SP vil sende autentiseringsforespørselsmeldingen",
    "Show optional Identity Provider settings…" : "Vis valgfrie identitetstilbyderinnstillinger…",
    "URL Location of the IdP where the SP will send the SLO Request" : "URL-plassering for IdP der SP vil sende SLO-forespørselen",
    "Public X.509 certificate of the IdP" : "Offentlig X.509 sertificat for IdP",
    "Attribute mapping" : "Attributt-binding",
    "If you want to optionally map attributes to the user you can configure these here." : "Hvis du valgfritt ønsker å knytte attributter til brukeren kan du sette opp disse her.",
    "Show attribute mapping settings…" : "Vis attributttilnytningsinnstillinger…",
    "Security settings" : "Sikkerhetsinnstillinger",
    "For increased security we recommend enabling the following settings if supported by your environment." : "For økt sikkerhet anbefaler vi at du aktiverer følgende innstillinger hvis det er støttet i ditt systemlandskap.",
    "Show security settings…" : "Vis sikkerhetsinnstillinger…",
    "Signatures and encryption offered" : "Signaturer og kryptering er tilbudt",
    "Signatures and encryption required" : "Signaturer og kryptering er påkrevd",
    "Download metadata XML" : "Last ned XML med metadata",
    "Metadata invalid" : "Ugyldige metadata",
    "Metadata valid" : "Gyldige metadata",
    "Account not provisioned." : "Kontoen er ikke klargjort",
    "Your account is not provisioned, access to this service is thus not possible." : "Din konto er ikke klargjort, tilgang til denne tjenesten er ikke mulig akkurat nå.",
    "Indicates if the SP will validate all received XMLs." : "Forteller om SP-en skal validere all mottatt XML.",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "Bare tillat autentisering hvis en konto finnes på en annen bakende. (f.eks. LDAP)",
    "Show Service Provider settings ..." : "Vis tjenesteleverandørens innstillinger",
    "Show optional Identity Provider settings ..." : "Vis valgfrie identitetstilbyderinnstillinger…",
    "Show security settings ..." : "Vis sikkerhetsinnstillinger...",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "Hvis du valgfritt ønsker å knytte SAML-attributter til brukeren kan du sette opp disse her.",
    "Show attribute mapping settings ..." : "Vis attributttilnytningsinnstillinger…"
},
"nplurals=2; plural=(n != 1);");

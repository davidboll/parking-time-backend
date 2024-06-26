// @ts-ignore
import logo from "./extensions/parking-time-logo.png";

const config = {
  auth: {
    logo,
  },
  head: {
    favicon: logo,
  },
  menu: {
    logo,
  },

  locales: ["sv", "en"],

  translations: {
    sv: {
      "app.components.LeftMenu.navbrand.title": "ParkingTime",
      "Auth.form.welcome.subtitle": "Välkommen till ParkingTime Dashboard",
      "Auth.form.welcome.title": "Välkommen!",
      Analytics: "Analys",
      "Auth.components.Oops.text": "Ditt konto har blivit avstängt.",
      "Auth.components.Oops.text.admin":
        "Om detta är ett misstag, vänligen kontakta din administratör.",
      "Auth.components.Oops.title": "Hoppsan...",
      "Auth.form.active.label": "Aktiv",
      "Auth.form.button.forgot-password": "Skicka e-post",
      "Auth.form.button.go-home": "GÅ TILLBAKA HEM",
      "Auth.form.button.login": "Logga in",
      "Auth.form.button.login.providers.error":
        "Vi kan inte ansluta dig via den valda leverantören.",
      "Auth.form.button.login.strapi": "Logga in via Strapi",
      "Auth.form.button.password-recovery": "Återställ lösenord",
      "Auth.form.button.register": "Låt oss börja",
      "Auth.form.confirmPassword.label": "Bekräfta lösenord",
      "Auth.form.currentPassword.label": "Nuvarande lösenord",
      "Auth.form.email.label": "E-post",
      "Auth.form.email.placeholder": "t.ex. kai@doe.com",
      "Auth.form.error.blocked":
        "Ditt konto har blivit blockerat av administratören.",
      "Auth.form.error.code.provide": "Felaktig kod angiven.",
      "Auth.form.error.confirmed": "Din e-postadress är inte bekräftad.",
      "Auth.form.error.email.invalid": "Denna e-postadress är ogiltig.",
      "Auth.form.error.email.provide":
        "Vänligen ange ditt användarnamn eller din e-postadress.",
      "Auth.form.error.email.taken": "E-postadressen är redan upptagen.",
      "Auth.form.error.invalid": "Ogiltigt identifierare eller lösenord.",
      "Auth.form.error.params.provide": "Felaktiga parametrar angivna.",
      "Auth.form.error.password.format":
        "Ditt lösenord kan inte innehålla symbolen `$` mer än tre gånger.",
      "Auth.form.error.password.local":
        "Denna användare har aldrig satt ett lokalt lösenord, vänligen logga in via leverantören som användes vid kontoskapandet.",
      "Auth.form.error.password.matching": "Lösenorden stämmer inte överens.",
      "Auth.form.error.password.provide": "Vänligen ange ditt lösenord.",
      "Auth.form.error.ratelimit":
        "För många försök, vänligen försök igen om en minut.",
      "Auth.form.error.user.not-exist": "Denna e-postadress existerar inte.",
      "Auth.form.error.username.taken": "Användarnamnet är redan upptaget.",
      "Auth.form.firstname.label": "Förnamn",
      "Auth.form.firstname.placeholder": "t.ex. Kai",
      "Auth.form.forgot-password.email.label": "Ange din e-post",
      "Auth.form.forgot-password.email.label.success":
        "E-post skickades framgångsrikt till",
      "Auth.form.lastname.label": "Efternamn",
      "Auth.form.lastname.placeholder": "t.ex. Doe",
      "Auth.form.password.hide-password": "Dölj lösenord",
      "Auth.form.password.hint":
        "Måste vara minst 8 tecken, 1 versal, 1 gemen och 1 siffra",
      "Auth.form.password.show-password": "Visa lösenord",
      "Auth.form.register.news.label":
        "Håll mig uppdaterad om nya funktioner och kommande förbättringar (genom att göra detta accepterar du {terms} och {policy}).",
      "Auth.form.register.subtitle":
        "Uppgifterna används endast för att autentisera i Strapi. All sparad data lagras i din databas.",
      "Auth.form.rememberMe.label": "Kom ihåg mig",
      "Auth.form.username.label": "Användarnamn",
      "Auth.form.username.placeholder": "t.ex. Kai_Doe",
      "Auth.link.forgot-password": "Glömt ditt lösenord?",
      "Auth.link.ready": "Redo att logga in?",
      "Auth.link.signin": "Logga in",
      "Auth.link.signin.account": "Har du redan ett konto?",
      "Auth.login.sso.divider": "Eller logga in med",
      "Auth.login.sso.loading": "Laddar leverantörer...",
      "Auth.login.sso.subtitle": "Logga in på ditt konto via SSO",
      "Auth.privacy-policy-agreement.policy": "integritetspolicy",
      "Auth.privacy-policy-agreement.terms": "villkor",
      "Auth.reset-password.title": "Återställ lösenord",
      "Content Manager": "Innehållshanterare",
      "Content Type Builder": "Innehållstypbyggare",
      Documentation: "Dokumentation",
      Email: "E-post",
      "Files Upload": "Filuppladdning",
      "HomePage.helmet.title": "Startsida",
      "HomePage.roadmap": "Se vår färdplan",
      "HomePage.welcome.congrats": "Grattis!",
      "HomePage.welcome.congrats.content":
        "Du är inloggad som den första administratören. För att upptäcka de kraftfulla funktioner som Strapi erbjuder,",
      "HomePage.welcome.congrats.content.bold":
        "rekommenderar vi att du skapar din första samlingstyp.",
      "Media Library": "Media Library",
      "New entry": "Ny post",
      Password: "Lösenord",
      Provider: "Leverantör",
      ResetPasswordToken: "Återställ lösenord token",
      Role: "Roll",
      "Roles & Permissions": "Roller och behörigheter",
      "Roles.ListPage.notification.delete-all-not-allowed":
        "Vissa roller kunde inte tas bort eftersom de är associerade med användare",
      "Roles.ListPage.notification.delete-not-allowed":
        "En roll kan inte tas bort om den är associerad med användare",
      "Roles.RoleRow.select-all": "Välj {name} för massåtgärder",
      "Roles.RoleRow.user-count":
        "{number, plural, =0 {# användare} one {# användare} other {# användare}}",
      "Roles.components.List.empty.withSearch":
        "Det finns ingen roll som motsvarar sökningen ({search})...",
      "Settings.PageTitle": "Inställningar — {name}",
      "Settings.apiTokens.ListView.headers.createdAt": "Skapad den",
      "Settings.apiTokens.ListView.headers.description": "Beskrivning",
      "Settings.apiTokens.ListView.headers.lastUsedAt": "Senast använd",
      "Settings.apiTokens.ListView.headers.name": "Namn",
      "Settings.apiTokens.ListView.headers.type": "Token typ",
      "Settings.apiTokens.addFirstToken": "Lägg till din första API-token",
      "Settings.apiTokens.addNewToken": "Lägg till ny API-token",
      "Settings.apiTokens.create": "Skapa ny API-token",
      "Settings.apiTokens.createPage.BoundRoute.title": "Bunden rutt till",
      "Settings.apiTokens.createPage.permissions.description":
        "Endast åtgärder bundna av en rutt listas nedan.",
      "Settings.apiTokens.createPage.permissions.header.hint":
        "Välj applikationens åtgärder eller pluginets åtgärder och klicka på kugghjulsikonen för att visa den bundna rutten",
      "Settings.apiTokens.createPage.permissions.header.title":
        "Avancerade inställningar",
      "Settings.apiTokens.createPage.permissions.title": "Behörigheter",
      "Settings.apiTokens.createPage.title": "Skapa API-token",
      "Settings.apiTokens.description":
        "Lista över genererade tokens för att konsumera API:et",
      "Settings.apiTokens.emptyStateLayout": "Du har inget innehåll ännu...",
      "Settings.apiTokens.regenerate": "Regenerera",
      "Settings.apiTokens.title": "API-tokens",
      "Settings.apiTokens.lastHour": "senaste timmen",
      "Settings.application.customization": "Anpassning",
      "Settings.application.customization.auth-logo.carousel-hint":
        "Byt ut logotypen på inloggningssidorna",
      "Settings.application.customization.carousel-hint":
        "Byt ut adminpanelens logotyp (Max dimension: {dimension}x{dimension}, Max filstorlek: {size}KB)",
      "Settings.application.customization.carousel-slide.label":
        "Logotyp slide",
      "Settings.application.customization.carousel.auth-logo.title":
        "Inloggningslogotyp",
      "Settings.application.customization.carousel.change-action":
        "Byt logotyp",
      "Settings.application.customization.carousel.menu-logo.title":
        "Menylogotyp",
      "Settings.application.customization.carousel.reset-action":
        "Återställ logotyp",
      "Settings.application.customization.carousel.title": "Logotyp",
      "Settings.application.customization.menu-logo.carousel-hint":
        "Byt ut logotypen i huvudnavigeringen",
      "Settings.application.customization.modal.cancel": "Avbryt",
      "Settings.application.customization.modal.pending": "Väntande logotyp",
      "Settings.application.customization.modal.pending.card-badge": "bild",
      "Settings.application.customization.modal.pending.choose-another":
        "Välj en annan logotyp",
      "Settings.application.customization.modal.pending.subtitle":
        "Hantera den valda logotypen innan du laddar upp den",
      "Settings.application.customization.modal.pending.title":
        "Logotyp redo att laddas upp",
      "Settings.application.customization.modal.pending.upload":
        "Ladda upp logotyp",
      "Settings.application.customization.modal.tab.label":
        "Hur vill du ladda upp dina tillgångar?",
      "Settings.application.customization.modal.upload": "Ladda upp logotyp",
      "Settings.application.customization.modal.upload.cta.browse":
        "Bläddra bland filer",
      "Settings.application.customization.modal.upload.drag-drop":
        "Dra och släpp här eller",
      "Settings.application.customization.modal.upload.error-format":
        "Fel format uppladdat (endast accepterade format: jpeg, jpg, png, svg).",
      "Settings.application.customization.modal.upload.error-network":
        "Nätverksfel",
      "Settings.application.customization.modal.upload.error-size":
        "Den uppladdade filen är för stor (max dimension: {dimension}x{dimension}, max filstorlek: {size}KB)",
      "Settings.application.customization.modal.upload.file-validation":
        "Max dimension: {dimension}x{dimension}, Max filstorlek: {size}KB",
      "Settings.application.customization.modal.upload.from-computer":
        "Från dator",
      "Settings.application.customization.modal.upload.from-url": "Från URL",
      "Settings.application.customization.modal.upload.from-url.input-label":
        "URL",
      "Settings.application.customization.modal.upload.next": "Nästa",
      "Settings.application.customization.size-details":
        "Max dimension: {dimension}×{dimension}, Max filstorlek: {size}KB",
      "Settings.application.description": "Adminpanelens globala information",
      "Settings.application.edition-title": "nuvarande plan",
      "Settings.application.ee-or-ce":
        "{communityEdition, select, true {Community Edition} other {Enterprise Edition}}",
      "Settings.application.ee.admin-seats.add-seats":
        "{isHostedOnStrapiCloud, select, true {Lägg till platser} other {Kontakta försäljning}}",
      "Settings.application.ee.admin-seats.at-limit-tooltip":
        "Vid gränsen: lägg till platser för att bjuda in fler användare",
      "Settings.application.ee.admin-seats.count":
        "<text>{enforcementUserCount}</text>/{permittedSeats}",
      "Settings.application.get-help": "Få hjälp",
      "Settings.application.link-pricing": "Se alla prisplaner",
      "Settings.application.link-upgrade": "Uppgradera din adminpanel",
      "Settings.application.node-version": "node version",
      "Settings.application.strapi-version": "Strapi version",
      "Settings.application.strapiVersion": "Strapi version",
      "Settings.application.title": "Översikt",
      "Settings.error": "Fel",
      "Settings.global": "Globala inställningar",
      "Settings.permissions": "Adminpanel",
      "Settings.permissions.auditLogs.action": "Åtgärd",
      "Settings.permissions.auditLogs.admin.auth.success": "Admin inloggning",
      "Settings.permissions.auditLogs.admin.logout": "Admin utloggning",
      "Settings.permissions.auditLogs.component.create": "Skapa komponent",
      "Settings.permissions.auditLogs.component.delete": "Ta bort komponent",
      "Settings.permissions.auditLogs.component.update": "Uppdatera komponent",
      "Settings.permissions.auditLogs.content-type.create":
        "Skapa innehållstyp",
      "Settings.permissions.auditLogs.content-type.delete":
        "Ta bort innehållstyp",
      "Settings.permissions.auditLogs.content-type.update":
        "Uppdatera innehållstyp",
      "Settings.permissions.auditLogs.date": "Datum",
      "Settings.permissions.auditLogs.details": "Loggdetaljer",
      "Settings.permissions.auditLogs.entry.create":
        "Skapa post{model, select, undefined {} other { ({model})}}",
      "Settings.permissions.auditLogs.entry.delete":
        "Ta bort post{model, select, undefined {} other { ({model})}}",
      "Settings.permissions.auditLogs.entry.publish":
        "Publicera post {model, select, undefined {} other {({model})}}",
      "Settings.permissions.auditLogs.entry.unpublish":
        "Avpublicera post{model, select, undefined {} other { ({model})}}",
      "Settings.permissions.auditLogs.entry.update":
        "Uppdatera post{model, select, undefined {} other { ({model})}}",
      "Settings.permissions.auditLogs.filters.combobox.aria-label":
        "Sök och välj ett alternativ för att filtrera",
      "Settings.permissions.auditLogs.listview.header.subtitle":
        "Loggar över alla aktiviteter som hänt i din miljö",
      "Settings.permissions.auditLogs.not-available":
        "Revisionsloggar är endast tillgängliga som en del av en betald plan. Uppgradera för att få en sökbar och filtrerbar visning av alla aktiviteter.",
      "Settings.permissions.auditLogs.media.create": "Skapa media",
      "Settings.permissions.auditLogs.media.delete": "Ta bort media",
      "Settings.permissions.auditLogs.media.update": "Uppdatera media",
      "Settings.permissions.auditLogs.payload": "Payload",
      "Settings.permissions.auditLogs.permission.create": "Skapa behörighet",
      "Settings.permissions.auditLogs.permission.delete": "Ta bort behörighet",
      "Settings.permissions.auditLogs.permission.update":
        "Uppdatera behörighet",
      "Settings.permissions.auditLogs.role.create": "Skapa roll",
      "Settings.permissions.auditLogs.role.delete": "Ta bort roll",
      "Settings.permissions.auditLogs.role.update": "Uppdatera roll",
      "Settings.permissions.auditLogs.user": "Användare",
      "Settings.permissions.auditLogs.user.create": "Skapa användare",
      "Settings.permissions.auditLogs.user.delete": "Ta bort användare",
      "Settings.permissions.auditLogs.user.fullname": "{firstname} {lastname}",
      "Settings.permissions.auditLogs.user.update": "Uppdatera användare",
      "Settings.permissions.auditLogs.userId": "Användar-ID",
      "Settings.permissions.category":
        "Behörighetsinställningar för {category}",
      "Settings.permissions.category.plugins":
        "Behörighetsinställningar för {category} plugin",
      "Settings.permissions.conditions.anytime": "När som helst",
      "Settings.permissions.conditions.apply": "Använd",
      "Settings.permissions.conditions.can": "Kan",
      "Settings.permissions.conditions.conditions": "Villkor",
      "Settings.permissions.conditions.define-conditions": "Definiera villkor",
      "Settings.permissions.conditions.links": "Länkar",
      "Settings.permissions.conditions.no-actions":
        "Du måste först välja åtgärder (skapa, läsa, uppdatera, ...) innan du definierar villkor för dem.",
      "Settings.permissions.conditions.none-selected": "När som helst",
      "Settings.permissions.conditions.or": "ELLER",
      "Settings.permissions.conditions.when": "När",
      "Settings.permissions.select-all-by-permission":
        "Välj alla {label} behörigheter",
      "Settings.permissions.select-by-permission": "Välj {label} behörighet",
      "Settings.permissions.users.active": "Aktiv",
      "Settings.permissions.users.create": "Bjud in ny användare",
      "Settings.permissions.users.email": "E-post",
      "Settings.permissions.users.firstname": "Förnamn",
      "Settings.permissions.users.form.sso": "Anslut med SSO",
      "Settings.permissions.users.sso.provider.error":
        "Ett fel inträffade vid begäran om SSO-inställningarna",
      "Settings.permissions.users.form.sso.description":
        "När aktiverad (PÅ), kan användare logga in via SSO",
      "Settings.permissions.users.inactive": "Inaktiv",
      "Settings.permissions.users.lastname": "Efternamn",
      "Settings.permissions.users.listview.header.subtitle":
        "Alla användare som har tillgång till Strapi-adminpanelen",
      "Settings.permissions.users.roles": "Roller",
      "Settings.permissions.users.strapi-author": "Författare",
      "Settings.permissions.users.strapi-editor": "Redaktör",
      "Settings.permissions.users.strapi-super-admin": "Superadmin",
      "Settings.permissions.users.tabs.label": "Flikbehörigheter",
      "Settings.permissions.users.user-status": "Användarstatus",
      "Settings.permissions.users.username": "Användarnamn",
      "Settings.profile.form.notify.data.loaded": "Dina profildata har laddats",
      "Settings.profile.form.section.experience.clear.select":
        "Rensa det valda gränssnittsspråket",
      "Settings.profile.form.section.experience.here": "här",
      "Settings.profile.form.section.experience.interfaceLanguage":
        "Gränssnittsspråk",
      "Settings.profile.form.section.experience.interfaceLanguage.hint":
        "Detta visar endast ditt eget gränssnitt på det valda språket.",
      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preferensändringar gäller endast för dig. Mer information finns {here}.",
      "Settings.profile.form.section.experience.mode.hint":
        "Visar ditt gränssnitt i det valda läget.",
      "Settings.profile.form.section.experience.mode.label": "Gränssnittsläge",
      "Settings.profile.form.section.experience.mode.option-label":
        "{name} läge",
      "Settings.profile.form.section.experience.mode.option-system-label":
        "Använd systeminställningar",
      "Settings.profile.form.section.experience.title": "Upplevelse",
      "Settings.profile.form.section.helmet.title": "Användarprofil",
      "Settings.profile.form.section.profile.page.title": "Profilsida",
      "Settings.review-workflows.page.title": "Granskning av arbetsflöden",
      "Settings.review-workflows.page.subtitle":
        "{count, plural, one {# steg} other {# steg}}",
      "Settings.review-workflows.page.isLoading": "Arbetsflödet laddas",
      "Settings.review-workflows.page.delete.confirm.body":
        "Alla poster tilldelade borttagna steg kommer att flyttas till föregående steg. Är du säker på att du vill spara?",
      "Settings.review-workflows.stage.name.label": "Stegnamn",
      "Settings.review-workflows.not-available":
        "Granskning av arbetsflöden är endast tillgänglig som en del av en betald plan. Uppgradera för att skapa och hantera arbetsflöden.",
      "Settings.roles.create.description":
        "Definiera de rättigheter som ges till rollen",
      "Settings.roles.create.title": "Skapa en roll",
      "Settings.roles.created": "Roll skapad",
      "Settings.roles.edit.title": "Redigera en roll",
      "Settings.roles.form.button.users-with-role":
        "{number, plural, =0 {# användare} one {# användare} other {# användare}} med denna roll",
      "Settings.roles.form.created": "Skapad",
      "Settings.roles.form.description": "Namn och beskrivning av rollen",
      "Settings.roles.form.permission.property-label": "{label} behörigheter",
      "Settings.roles.form.permissions.attributesPermissions":
        "Fältbehörigheter",
      "Settings.roles.form.permissions.create": "Skapa",
      "Settings.roles.form.permissions.delete": "Ta bort",
      "Settings.roles.form.permissions.publish": "Publicera",
      "Settings.roles.form.permissions.read": "Läsa",
      "Settings.roles.form.permissions.update": "Uppdatera",
      "Settings.roles.list.button.add": "Lägg till ny roll",
      "Settings.roles.list.description": "Lista över roller",
      "Settings.roles.title.singular": "roll",
      "Settings.sso.description":
        "Konfigurera inställningarna för Single Sign-On-funktionen.",
      "Settings.sso.form.defaultRole.description":
        "Det kommer att koppla den nya autentiserade användaren till den valda rollen",
      "Settings.sso.form.defaultRole.description-not-allowed":
        "Du behöver ha behörighet att läsa administratörsroller",
      "Settings.sso.form.defaultRole.label": "Standardroll",
      "Settings.sso.form.localAuthenticationLock.label":
        "Lås lokal autentisering",
      "Settings.sso.form.localAuthenticationLock.description":
        "Välj de roller för vilka du vill inaktivera den lokala autentiseringen",
      "Settings.sso.form.registration.description":
        "Skapa ny användare vid SSO-inloggning om inget konto finns",
      "Settings.sso.form.registration.label": "Automatisk registrering",
      "Settings.sso.title": "Single Sign-On",
      "Settings.sso.not-available":
        "SSO är endast tillgängligt som en del av en betald plan. Uppgradera för att konfigurera ytterligare inloggnings- och registreringsmetoder för din administrationspanel.",
      "Settings.tokens.Button.cancel": "Avbryt",
      "Settings.tokens.Button.regenerate": "Regenerera",
      "Settings.tokens.ListView.headers.createdAt": "Skapad den",
      "Settings.tokens.ListView.headers.description": "Beskrivning",
      "Settings.tokens.ListView.headers.lastUsedAt": "Senast använd",
      "Settings.tokens.ListView.headers.name": "Namn",
      "Settings.tokens.RegenerateDialog.title": "Regenerera token",
      "Settings.tokens.copy.editMessage":
        "Av säkerhetsskäl kan du bara se din token en gång.",
      "Settings.tokens.copy.editTitle":
        "Denna token är inte längre tillgänglig.",
      "Settings.tokens.copy.lastWarning":
        "Se till att kopiera denna token, du kommer inte att kunna se den igen!",
      "Settings.tokens.duration.30-days": "30 dagar",
      "Settings.tokens.duration.7-days": "7 dagar",
      "Settings.tokens.duration.90-days": "90 dagar",
      "Settings.tokens.duration.expiration-date": "Utgångsdatum",
      "Settings.tokens.duration.unlimited": "Obegränsad",
      "Settings.tokens.form.description": "Beskrivning",
      "Settings.tokens.form.duration": "Tokenvaraktighet",
      "Settings.tokens.form.name": "Namn",
      "Settings.tokens.form.type": "Token typ",
      "Settings.tokens.notification.copied": "Token kopierad till urklipp.",
      "Settings.tokens.popUpWarning.message":
        "Är du säker på att du vill regenerera denna token?",
      "Settings.tokens.regenerate": "Regenerera",
      "Settings.tokens.types.custom": "Anpassad",
      "Settings.tokens.types.full-access": "Full tillgång",
      "Settings.tokens.types.read-only": "Endast läsbar",
      "Settings.transferTokens.ListView.headers.type": "Token typ",
      "Settings.transferTokens.addFirstToken":
        "Lägg till din första överföringstoken",
      "Settings.transferTokens.addNewToken": "Lägg till ny överföringstoken",
      "Settings.transferTokens.create": "Skapa ny överföringstoken",
      "Settings.transferTokens.createPage.title": "Skapa överföringstoken",
      "Settings.transferTokens.description":
        "Lista över genererade överföringstoken",
      "Settings.transferTokens.emptyStateLayout":
        "Du har inget innehåll ännu...",
      "Settings.transferTokens.title": "Överföringstoken",
      "Settings.webhooks.create": "Skapa en webhook",
      "Settings.webhooks.create.header": "Skapa ny header",
      "Settings.webhooks.created": "Webhook skapad",
      "Settings.webhooks.event.publish-tooltip":
        "Denna händelse finns endast för innehåll med Draft/Publish-system aktiverat",
      "Settings.webhooks.event.select": "Välj händelse",
      "Settings.webhooks.events.isLoading": "Händelser laddas",
      "Settings.webhooks.events.create": "Skapa",
      "Settings.webhooks.events.update": "Uppdatera",
      "Settings.webhooks.events.delete": "Ta bort webhook",
      "Settings.webhooks.form.events": "Händelser",
      "Settings.webhooks.form.headers": "Headers",
      "Settings.webhooks.form.url": "URL",
      "Settings.webhooks.headers.remove": "Ta bort header rad {number}",
      "Settings.webhooks.key": "Nyckel",
      "Settings.webhooks.list.button.add": "Skapa ny webhook",
      "Settings.webhooks.list.description": "Få POST-förändringsnotifikationer",
      "Settings.webhooks.list.empty.description": "Inga webhooks hittades",
      "Settings.webhooks.list.empty.link": "Se vår dokumentation",
      "Settings.webhooks.list.empty.title": "Det finns inga webhooks ännu",
      "Settings.webhooks.list.th.actions": "åtgärder",
      "Settings.webhooks.list.th.status": "status",
      "Settings.webhooks.list.loading.success": "Webhooks har laddats",
      "Settings.webhooks.singular": "webhook",
      "Settings.webhooks.title": "Webhooks",
      "Settings.webhooks.to.delete":
        "{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} valda",
      "Settings.webhooks.trigger": "Utlös",
      "Settings.webhooks.trigger.cancel": "Avbryt utlösning",
      "Settings.webhooks.trigger.pending": "Väntande…",
      "Settings.webhooks.trigger.save": "Spara för att utlösa",
      "Settings.webhooks.trigger.success": "Framgång!",
      "Settings.webhooks.trigger.success.label": "Utlösningen lyckades",
      "Settings.webhooks.trigger.test": "Test-utlösning",
      "Settings.webhooks.trigger.title": "Spara innan utlösning",
      "Settings.webhooks.value": "Värde",
      "Settings.webhooks.validation.name.required": "Namn krävs",
      "Settings.webhooks.validation.name.regex":
        "Namnet måste börja med en bokstav och bara innehålla bokstäver, siffror, mellanslag och understreck",
      "Settings.webhooks.validation.url.required": "URL krävs",
      "Settings.webhooks.validation.url.regex":
        "Värdet måste vara en giltig URL",
      "Settings.webhooks.validation.key": "Nyckel krävs",
      "Settings.webhooks.validation.value": "Värde krävs",
      "Usecase.back-end": "Back-end utvecklare",
      "Usecase.button.skip": "Hoppa över denna fråga",
      "Usecase.content-creator": "Innehållsskapare",
      "Usecase.front-end": "Front-end utvecklare",
      "Usecase.full-stack": "Full-stack utvecklare",
      "Usecase.input.work-type": "Vilken typ av arbete gör du?",
      "Usecase.notification.success.project-created":
        "Projektet har skapats framgångsrikt",
      "Usecase.other": "Annat",
      "Usecase.title": "Berätta lite mer om dig själv",
      Username: "Användarnamn",
      "Users & Permissions": "Användare och behörigheter",
      Users: "Användare",
      "Users.components.List.empty": "Det finns inga användare...",
      "Users.components.List.empty.withFilters":
        "Det finns inga användare med de applicerade filtren...",
      "Users.components.List.empty.withSearch":
        "Det finns inga användare som motsvarar sökningen ({search})...",
      "admin.pages.MarketPlacePage.sort.label": "Sortera efter",
      "admin.pages.MarketPlacePage.filters.categories": "Kategorier",
      "admin.pages.MarketPlacePage.filters.categoriesSelected":
        "{count, plural, =0 {Inga kategorier} one {# kategori} other {# kategorier}} valda",
      "admin.pages.MarketPlacePage.filters.collections": "Samlingar",
      "admin.pages.MarketPlacePage.filters.collectionsSelected":
        "{count, plural, =0 {Inga samlingar} one {# samling} other {# samlingar}} valda",
      "admin.pages.MarketPlacePage.helmet": "Marknadsplats — Plugins",
      "admin.pages.MarketPlacePage.missingPlugin.description":
        "Berätta för oss vilket plugin du letar efter så låter vi våra community-pluginutvecklare veta om de behöver inspiration!",
      "admin.pages.MarketPlacePage.missingPlugin.title":
        "Saknar du ett plugin?",
      "admin.pages.MarketPlacePage.offline.subtitle":
        "Du måste vara ansluten till Internet för att få tillgång till Strapi Market.",
      "admin.pages.MarketPlacePage.offline.title": "Du är offline",
      "admin.pages.MarketPlacePage.plugin.copy":
        "Kopiera installationskommando",
      "admin.pages.MarketPlacePage.plugin.copy.success":
        "Installationskommando redo att klistras in i din terminal",
      "admin.pages.MarketPlacePage.plugin.downloads":
        "Detta plugin har {downloadsCount} veckovis nedladdningar",
      "admin.pages.MarketPlacePage.plugin.githubStars":
        "Detta plugin har stjärnmärkts {starsCount} på GitHub",
      "admin.pages.MarketPlacePage.plugin.info": "Lär dig mer",
      "admin.pages.MarketPlacePage.plugin.info.label":
        "Lär dig mer om {pluginName}",
      "admin.pages.MarketPlacePage.plugin.info.text": "Mer",
      "admin.pages.MarketPlacePage.plugin.installed": "Installerad",
      "admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi":
        "Skapad av Strapi",
      "admin.pages.MarketPlacePage.plugin.tooltip.verified":
        "Plugin verifierad av Strapi",
      "admin.pages.MarketPlacePage.plugin.version":
        'Uppdatera din Strapi-version: "{strapiAppVersion}" till: "{versionRange}"',
      "admin.pages.MarketPlacePage.plugin.version.null":
        'Kan inte verifiera kompatibilitet med din Strapi-version: "{strapiAppVersion}"',
      "admin.pages.MarketPlacePage.plugins": "Plugins",
      "admin.pages.MarketPlacePage.provider.downloads":
        "Denna leverantör har {downloadsCount} veckovis nedladdningar",
      "admin.pages.MarketPlacePage.provider.githubStars":
        "Denna leverantör har stjärnmärkts {starsCount} på GitHub",
      "admin.pages.MarketPlacePage.providers": "Leverantörer",
      "admin.pages.MarketPlacePage.search.clear": "Rensa sökningen",
      "admin.pages.MarketPlacePage.search.empty":
        'Inget resultat för "{target}"',
      "admin.pages.MarketPlacePage.search.placeholder": "Sök",
      "admin.pages.MarketPlacePage.sort.alphabetical": "Alfabetisk ordning",
      "admin.pages.MarketPlacePage.sort.alphabetical.selected":
        "Sortera efter alfabetisk ordning",
      "admin.pages.MarketPlacePage.sort.githubStars": "Antal GitHub-stjärnor",
      "admin.pages.MarketPlacePage.sort.githubStars.selected":
        "Sortera efter GitHub-stjärnor",
      "admin.pages.MarketPlacePage.sort.newest": "Nyast",
      "admin.pages.MarketPlacePage.sort.newest.selected": "Sortera efter nyast",
      "admin.pages.MarketPlacePage.sort.npmDownloads": "Antal nedladdningar",
      "admin.pages.MarketPlacePage.sort.npmDownloads.selected":
        "Sortera efter npm-nedladdningar",
      "admin.pages.MarketPlacePage.submit.plugin.link": "Skicka in plugin",
      "admin.pages.MarketPlacePage.submit.provider.link":
        "Skicka in leverantör",
      "admin.pages.MarketPlacePage.subtitle": "Få mer ut av Strapi",
      "admin.pages.MarketPlacePage.tab-group.label":
        "Plugins och leverantörer för Strapi",
      anErrorOccurred: "Hoppsan! Något gick fel. Vänligen försök igen.",
      "app.component.CopyToClipboard.label": "Kopiera till urklipp",
      "app.component.search.label": "Sök efter {target}",
      "app.component.table.duplicate": "Duplicera {target}",
      "app.component.table.edit": "Redigera {target}",
      "app.component.table.read": "Läs {target}",
      "app.component.table.select.one-entry": "Välj {target}",
      "app.component.table.view": "{target} detaljer",
      "app.components.BlockLink.blog": "Blogg",
      "app.components.BlockLink.blog.content":
        "Läs de senaste nyheterna om Strapi och ekosystemet.",
      "app.components.BlockLink.cloud": "Strapi Cloud",
      "app.components.BlockLink.cloud.content":
        "En fullt komponerbar och samarbetsplattform för att öka ditt teams hastighet.",
      "app.components.BlockLink.code": "Kodexempel",
      "app.components.BlockLink.code.content":
        "Lär dig genom att testa riktiga projekt utvecklade av communityn.",
      "app.components.BlockLink.documentation.content":
        "Upptäck de grundläggande koncepten, guider och instruktioner.",
      "app.components.BlockLink.tutorial": "Handledning",
      "app.components.BlockLink.tutorial.content":
        "Följ steg-för-steg instruktioner för att använda och anpassa Strapi.",
      "app.components.Button.cancel": "Avbryt",
      "app.components.Button.confirm": "Bekräfta",
      "app.components.Button.reset": "Återställ",
      "app.components.ComingSoonPage.comingSoon": "Kommer snart",
      "app.components.ConfirmDialog.title": "Bekräftelse",
      "app.components.DownloadInfo.download": "Nedladdning pågår...",
      "app.components.DownloadInfo.text":
        "Detta kan ta en minut. Tack för ditt tålamod.",
      "app.components.EmptyAttributes.title": "Det finns inga fält ännu",
      "app.components.EmptyStateLayout.content-document":
        "Inget innehåll hittades",
      "app.components.EmptyStateLayout.content-permissions":
        "Du har inte behörighet att komma åt det innehållet",
      "app.components.GuidedTour.CM.create.content":
        "<p>Skapa och hantera allt innehåll här i Innehållshanteraren.</p><p>Ex: Om vi tar exemplet med en bloggsida vidare kan man skriva en artikel, spara och publicera den som man vill.</p><p>💡 Snabbt tips — Glöm inte att publicera det innehåll du skapar.</p>",
      "app.components.GuidedTour.CM.create.title": "⚡️ Skapa innehåll",
      "app.components.GuidedTour.CM.success.content":
        "<p>Fantastiskt, ett sista steg kvar!</p><b>🚀 Se innehåll i aktion</b>",
      "app.components.GuidedTour.CM.success.cta.title": "Testa API:et",
      "app.components.GuidedTour.CM.success.title": "Steg 2: Slutfört ✅",
      "app.components.GuidedTour.CTB.create.content":
        "<p>Samlingstyper hjälper dig att hantera flera poster, Enkeltyper är lämpliga för att hantera endast en post.</p> <p>Ex: För en bloggsida skulle artiklar vara en Samlingstyp medan en Startsida skulle vara en Enkeltyp.</p>",
      "app.components.GuidedTour.CTB.create.cta.title": "Bygg en samlingstyp",
      "app.components.GuidedTour.CTB.create.title":
        "🧠 Skapa en första samlingstyp",
      "app.components.GuidedTour.CTB.success.content":
        "<p>Bra jobbat!</p><b>⚡️ Vad vill du dela med världen?</b>",
      "app.components.GuidedTour.CTB.success.title": "Steg 1: Slutfört ✅",
      "app.components.GuidedTour.apiTokens.create.content":
        "<p>Generera en autentiseringstoken här och hämta innehållet du just skapade.</p>",
      "app.components.GuidedTour.apiTokens.create.cta.title":
        "Generera en API-token",
      "app.components.GuidedTour.apiTokens.create.title":
        "🚀 Se innehåll i aktion",
      "app.components.GuidedTour.apiTokens.success.content":
        "<p>Se innehåll i aktion genom att göra en HTTP-begäran:</p><ul><li><p>Till denna URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>Med rubriken: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>För fler sätt att interagera med innehåll, se <documentationLink>dokumentationen</documentationLink>.</p>",
      "app.components.GuidedTour.apiTokens.success.cta.title":
        "Gå tillbaka till startsidan",
      "app.components.GuidedTour.apiTokens.success.title":
        "Steg 3: Slutfört ✅",
      "app.components.GuidedTour.create-content": "Skapa innehåll",
      "app.components.GuidedTour.home.CM.title":
        "⚡️ Vad vill du dela med världen?",
      "app.components.GuidedTour.home.CTB.cta.title":
        "Gå till Innehållstypbyggaren",
      "app.components.GuidedTour.home.CTB.title": "🧠 Bygg innehållsstrukturen",
      "app.components.GuidedTour.home.apiTokens.cta.title": "Testa API:et",
      "app.components.GuidedTour.skip": "Hoppa över turen",
      "app.components.GuidedTour.title": "3 steg för att komma igång",
      "app.components.HomePage.button.blog": "Se mer på bloggen",
      "app.components.HomePage.community": "Gå med i communityn",
      "app.components.HomePage.community.content":
        "Diskutera med teammedlemmar, bidragsgivare och utvecklare på olika kanaler.",
      "app.components.HomePage.create": "Skapa din första innehållstyp",
      "app.components.HomePage.roadmap": "Se vår färdplan",
      "app.components.HomePage.welcome": "Välkommen ombord 👋",
      "app.components.HomePage.welcome.again": "Välkommen tillbaka 👋",
      "app.components.HomePage.welcomeBlock.content":
        "Grattis! Du är inloggad som den första administratören. För att upptäcka de kraftfulla funktioner som Strapi erbjuder, rekommenderar vi att du skapar din första innehållstyp!",
      "app.components.HomePage.welcomeBlock.content.again":
        "Vi hoppas att du gör framsteg med ditt projekt! Känn dig fri att läsa de senaste nyheterna om Strapi. Vi gör vårt bästa för att förbättra produkten baserat på din feedback.",
      "app.components.HomePage.welcomeBlock.content.issues": "problem.",
      "app.components.HomePage.welcomeBlock.content.raise": " eller höja ",
      "app.components.ImgPreview.hint":
        "Dra och släpp din fil i detta område eller {browse} för att ladda upp en fil",
      "app.components.ImgPreview.hint.browse": "bläddra",
      "app.components.InputFile.newFile": "Lägg till ny fil",
      "app.components.InputFileDetails.open": "Öppna i en ny flik",
      "app.components.InputFileDetails.originalName": "Ursprungligt namn:",
      "app.components.InputFileDetails.remove": "Ta bort denna fil",
      "app.components.InputFileDetails.size": "Storlek:",
      "app.components.InstallPluginPage.Download.description":
        "Det kan ta några sekunder att ladda ner och installera pluginet.",
      "app.components.InstallPluginPage.Download.title": "Nedladdning pågår...",
      "app.components.InstallPluginPage.description":
        "Förläng din app utan ansträngning.",
      "app.components.LeftMenu.collapse": "Kollapsa navigeringsmenyn",
      "app.components.LeftMenu.expand": "Expandera navigeringsmenyn",
      "app.components.LeftMenu.general": "Allmänt",
      "app.components.LeftMenu.logo.alt": "Applikationslogotyp",
      "app.components.LeftMenu.logout": "Logga ut",
      "app.components.LeftMenu.navbrand.workplace": "Arbetsplats",
      "app.components.LeftMenu.plugins": "Plugins",
      "app.components.LeftMenuFooter.help": "Hjälp",
      "app.components.LeftMenuFooter.poweredBy": "Drivs av ",
      "app.components.LeftMenuLinkContainer.collectionTypes": "Samlingstyper",
      "app.components.LeftMenuLinkContainer.configuration": "Konfigurationer",
      "app.components.LeftMenuLinkContainer.general": "Allmänt",
      "app.components.LeftMenuLinkContainer.noPluginsInstalled":
        "Inga plugins installerade ännu",
      "app.components.LeftMenuLinkContainer.plugins": "Plugins",
      "app.components.LeftMenuLinkContainer.singleTypes": "Enkeltyper",
      "app.components.ListPluginsPage.deletePlugin.description":
        "Det kan ta några sekunder att avinstallera pluginet.",
      "app.components.ListPluginsPage.deletePlugin.title": "Avinstallerar",
      "app.components.ListPluginsPage.description":
        "Lista över installerade plugins i projektet.",
      "app.components.ListPluginsPage.helmet.title": "Lista plugins",
      "app.components.Logout.logout": "Logga ut",
      "app.components.Logout.profile": "Profil",
      "app.components.MarketplaceBanner":
        "Upptäck plugins byggda av communityn och många fler fantastiska saker för att kickstarta ditt projekt, på Strapi Marketplace.",
      "app.components.MarketplaceBanner.image.alt": "En Strapi raketlogotyp",
      "app.components.MarketplaceBanner.link": "Kolla in det nu",
      "app.components.NotFoundPage.back": "Tillbaka till startsidan",
      "app.components.NotFoundPage.description": "Inte hittad",
      "app.components.NpsSurvey.banner-title":
        "Hur troligt är det att du skulle rekommendera Strapi till en vän eller kollega?",
      "app.components.NpsSurvey.feedback-response":
        "Tack så mycket för din feedback!",
      "app.components.NpsSurvey.feedback-question":
        "Har du några förslag på förbättringar?",
      "app.components.NpsSurvey.submit-feedback": "Skicka feedback",
      "app.components.NpsSurvey.dismiss-survey-label": "Avfärda undersökning",
      "app.components.NpsSurvey.no-recommendation": "Inte alls troligt",
      "app.components.NpsSurvey.happy-to-recommend": "Mycket troligt",
      "app.components.Official": "Officiell",
      "app.components.Onboarding.help.button": "Hjälpknapp",
      "app.components.Onboarding.label.completed": "% slutfört",
      "app.components.Onboarding.link.build-content":
        "Bygg en innehållsarkitektur",
      "app.components.Onboarding.link.manage-content":
        "Lägg till och hantera innehåll",
      "app.components.Onboarding.link.manage-media": "Hantera media",
      "app.components.Onboarding.link.more-videos": "Se fler videor",
      "app.components.Onboarding.title": "Kom igång videor",
      "app.components.PluginCard.Button.label.download": "Ladda ner",
      "app.components.PluginCard.Button.label.install": "Redan installerad",
      "app.components.PluginCard.PopUpWarning.install.impossible.autoReload.needed":
        "AutoReload-funktionen måste vara aktiverad. Vänligen starta din app med `yarn develop`.",
      "app.components.PluginCard.PopUpWarning.install.impossible.confirm":
        "Jag förstår!",
      "app.components.PluginCard.PopUpWarning.install.impossible.environment":
        "Av säkerhetsskäl kan ett plugin endast laddas ner i en utvecklingsmiljö.",
      "app.components.PluginCard.PopUpWarning.install.impossible.title":
        "Nedladdning är omöjlig",
      "app.components.PluginCard.compatible": "Kompatibel med din app",
      "app.components.PluginCard.compatibleCommunity":
        "Kompatibel med communityn",
      "app.components.PluginCard.more-details": "Mer detaljer",
      "app.components.ToggleCheckbox.off-label": "Falsk",
      "app.components.ToggleCheckbox.on-label": "Sann",
      "app.components.Users.MagicLink.connect":
        "Kopiera och dela denna länk för att ge tillgång till denna användare",
      "app.components.Users.MagicLink.connect.sso":
        "Skicka denna länk till användaren, den första inloggningen kan göras via en SSO-leverantör",
      "app.components.Users.ModalCreateBody.block-title.details":
        "Användardetaljer",
      "app.components.Users.ModalCreateBody.block-title.roles":
        "Användarens roller",
      "app.components.Users.ModalCreateBody.block-title.roles.description":
        "En användare kan ha en eller flera roller",
      "app.components.Users.SortPicker.button-label": "Sortera efter",
      "app.components.Users.SortPicker.sortby.email_asc": "E-post (A till Ö)",
      "app.components.Users.SortPicker.sortby.email_desc": "E-post (Ö till A)",
      "app.components.Users.SortPicker.sortby.firstname_asc":
        "Förnamn (A till Ö)",
      "app.components.Users.SortPicker.sortby.firstname_desc":
        "Förnamn (Ö till A)",
      "app.components.Users.SortPicker.sortby.lastname_asc":
        "Efternamn (A till Ö)",
      "app.components.Users.SortPicker.sortby.lastname_desc":
        "Efternamn (Ö till A)",
      "app.components.Users.SortPicker.sortby.username_asc":
        "Användarnamn (A till Ö)",
      "app.components.Users.SortPicker.sortby.username_desc":
        "Användarnamn (Ö till A)",
      "app.components.listPlugins.button": "Lägg till nytt plugin",
      "app.components.listPlugins.title.none": "Inga plugins installerade",
      "app.components.listPluginsPage.deletePlugin.error":
        "Ett fel inträffade vid avinstallation av plugin",
      "app.containers.App.notification.error.init":
        "Ett fel inträffade vid begäran av API:et",
      "app.containers.AuthPage.ForgotPasswordSuccess.text.contact-admin":
        "Om du inte får denna länk, vänligen kontakta din administratör.",
      "app.containers.AuthPage.ForgotPasswordSuccess.text.email":
        "Det kan ta några minuter att få din länk för lösenordsåterställning.",
      "app.containers.AuthPage.ForgotPasswordSuccess.title": "E-post skickad",
      "app.containers.Users.EditPage.form.active.label": "Aktiv",
      "app.containers.Users.EditPage.header.label": "Redigera {name}",
      "app.containers.Users.EditPage.header.label-loading":
        "Redigera användare",
      "app.containers.Users.EditPage.roles-bloc-title": "Tilldelade roller",
      "app.containers.Users.ModalForm.footer.button-success":
        "Bjud in användare",
      "app.links.configure-view": "Konfigurera vyn",
      "app.page.not.found":
        "Hoppsan! Vi kan inte hitta sidan du letar efter...",
      "app.static.links.cheatsheet": "CheatSheet",
      "app.utils.SelectOption.defaultMessage": " ",
      "app.utils.add-filter": "Lägg till filter",
      "app.utils.close-label": "Stäng",
      "app.utils.defaultMessage": " ",
      "app.utils.delete": "Radera",
      "app.utils.duplicate": "Duplicera",
      "app.utils.edit": "Redigera",
      "app.utils.errors.file-too-big.message": "Filen är för stor",
      "app.utils.filter-value": "Filtervärde",
      "app.utils.filters": "Filter",
      "app.utils.notify.data-loaded": "{target} har laddats",
      "app.utils.placeholder.defaultMessage": " ",
      "app.utils.publish": "Publicera",
      "app.utils.refresh": "Uppdatera",
      "app.utils.select-all": "Välj alla",
      "app.utils.select-field": "Välj fält",
      "app.utils.select-filter": "Välj filter",
      "app.utils.unpublish": "Avpublicera",
      "app.utils.published": "Publicerad",
      "app.utils.ready-to-publish": "Redo att publicera",
      clearLabel: "Rensa",
      "coming.soon":
        "Detta innehåll är för närvarande under konstruktion och kommer att vara tillbaka om några veckor!",
      "component.Input.error.validation.integer":
        "Värdet måste vara ett heltal",
      "components.AutoReloadBlocker.description":
        "Kör Strapi med ett av följande kommandon:",
      "components.AutoReloadBlocker.header":
        "Omstartsfunktionen krävs för detta plugin.",
      "components.ErrorBoundary.title": "Något gick fel...",
      "components.FilterOptions.FILTER_TYPES.$contains": "innehåller",
      "components.FilterOptions.FILTER_TYPES.$containsi":
        "innehåller (icke skiftlägeskänslig)",
      "components.FilterOptions.FILTER_TYPES.$endsWith": "slutar med",
      "components.FilterOptions.FILTER_TYPES.$endsWithi":
        "slutar med (icke skiftlägeskänslig)",
      "components.FilterOptions.FILTER_TYPES.$eq": "är",
      "components.FilterOptions.FILTER_TYPES.$eqi":
        "är (icke skiftlägeskänslig)",
      "components.FilterOptions.FILTER_TYPES.$gt": "är större än",
      "components.FilterOptions.FILTER_TYPES.$gte":
        "är större än eller lika med",
      "components.FilterOptions.FILTER_TYPES.$lt": "är mindre än",
      "components.FilterOptions.FILTER_TYPES.$lte":
        "är mindre än eller lika med",
      "components.FilterOptions.FILTER_TYPES.$ne": "är inte",
      "components.FilterOptions.FILTER_TYPES.$nei":
        "är inte (icke skiftlägeskänslig)",
      "components.FilterOptions.FILTER_TYPES.$notContains": "innehåller inte",
      "components.FilterOptions.FILTER_TYPES.$notContainsi":
        "innehåller inte (icke skiftlägeskänslig)",
      "components.FilterOptions.FILTER_TYPES.$notNull": "är inte null",
      "components.FilterOptions.FILTER_TYPES.$null": "är null",
      "components.FilterOptions.FILTER_TYPES.$startsWith": "börjar med",
      "components.FilterOptions.FILTER_TYPES.$startsWithi":
        "börjar med (icke skiftlägeskänslig)",
      "components.Input.error.attribute.key.taken": "Detta värde finns redan",
      "components.Input.error.attribute.sameKeyAndName": "Kan inte vara lika",
      "components.Input.error.attribute.taken": "Detta fältnamn finns redan",
      "components.Input.error.contain.lowercase":
        "Lösenordet måste innehålla minst en gemen bokstav",
      "components.Input.error.contain.number":
        "Lösenordet måste innehålla minst en siffra",
      "components.Input.error.contain.uppercase":
        "Lösenordet måste innehålla minst en versal bokstav",
      "components.Input.error.contentTypeName.taken": "Detta namn finns redan",
      "components.Input.error.custom-error": "{errorMessage} ",
      "components.Input.error.password.noMatch":
        "Lösenorden stämmer inte överens",
      "components.Input.error.validation.email":
        "Detta är en ogiltig e-postadress",
      "components.Input.error.validation.json":
        "Detta matchar inte JSON-formatet",
      "components.Input.error.validation.lowercase":
        "Värdet måste vara en sträng med gemener",
      "components.Input.error.validation.max":
        "Värdet är för högt (max: {max}).",
      "components.Input.error.validation.maxLength":
        "Värdet är för långt (max: {max}).",
      "components.Input.error.validation.min":
        "Värdet är för lågt (min: {min}).",
      "components.Input.error.validation.minLength":
        "Värdet är för kort (min: {min}).",
      "components.Input.error.validation.minSupMax": "Kan inte vara större",
      "components.Input.error.validation.regex": "Värdet matchar inte regex.",
      "components.Input.error.validation.required":
        "Detta värde är obligatoriskt.",
      "components.Input.error.validation.unique": "Detta värde används redan.",
      "components.Input.error.validation.email.withField":
        "{field} är en ogiltig e-postadress",
      "components.Input.error.validation.json.withField":
        "{field} matchar inte JSON-formatet",
      "components.Input.error.validation.lowercase.withField":
        "{field} måste vara en sträng med gemener",
      "components.Input.error.validation.max.withField": "{field} är för högt.",
      "components.Input.error.validation.maxLength.withField":
        "{field} är för långt.",
      "components.Input.error.validation.min.withField": "{field} är för lågt.",
      "components.Input.error.validation.minLength.withField":
        "{field} är för kort.",
      "components.Input.error.validation.minSupMax.withField":
        "{field} kan inte vara större",
      "components.Input.error.validation.regex.withField":
        "{field} matchar inte regex.",
      "components.Input.error.validation.required.withField":
        "{field} är obligatoriskt.",
      "components.Input.error.validation.unique.withField":
        "{field} används redan.",
      "components.InputSelect.option.placeholder": "Välj här",
      "components.ListRow.empty": "Det finns inga data att visa.",
      "components.NotAllowedInput.text": "Ingen behörighet att se detta fält",
      "components.OverlayBlocker.description":
        "Du använder en funktion som kräver att servern startas om. Vänligen vänta tills servern är igång.",
      "components.OverlayBlocker.description.serverError":
        "Servern borde ha startat om, vänligen kontrollera dina loggar i terminalen.",
      "components.OverlayBlocker.title": "Väntar på omstart...",
      "components.OverlayBlocker.title.serverError":
        "Omstarten tar längre tid än förväntat",
      "components.PageFooter.select": "Poster per sida",
      "components.ProductionBlocker.description":
        "Av säkerhetsskäl måste vi inaktivera detta plugin i andra miljöer.",
      "components.ProductionBlocker.header":
        "Detta plugin är endast tillgängligt i utvecklingsmiljö.",
      "components.ViewSettings.tooltip": "Visa inställningar",
      "components.TableHeader.sort": "Sortera efter {label}",
      "components.Blocks.modifiers.bold": "Fetstil",
      "components.Blocks.modifiers.italic": "Kursiv",
      "components.Blocks.modifiers.underline": "Understruken",
      "components.Blocks.modifiers.strikethrough": "Genomstruken",
      "components.Blocks.modifiers.code": "Inline kod",
      "components.Blocks.link": "Länk",
      "components.Blocks.expand": "Expandera",
      "components.Blocks.collapse": "Kollapsa",
      "components.Blocks.popover.text": "Text",
      "components.Blocks.popover.text.placeholder": "Ange länktext",
      "components.Blocks.popover.link": "Länk",
      "components.Blocks.popover.link.placeholder": "Klistra in länk",
      "components.Blocks.popover.link.error": "Vänligen ange en giltig länk",
      "components.Blocks.popover.save": "Spara",
      "components.Blocks.popover.cancel": "Avbryt",
      "components.Blocks.popover.remove": "Ta bort",
      "components.Blocks.popover.edit": "Redigera",
      "components.Blocks.blocks.selectBlock": "Välj ett block",
      "components.Blocks.blocks.text": "Text",
      "components.Blocks.blocks.heading1": "Rubrik 1",
      "components.Blocks.blocks.heading2": "Rubrik 2",
      "components.Blocks.blocks.heading3": "Rubrik 3",
      "components.Blocks.blocks.heading4": "Rubrik 4",
      "components.Blocks.blocks.heading5": "Rubrik 5",
      "components.Blocks.blocks.heading6": "Rubrik 6",
      "components.Blocks.blocks.code": "Kodblock",
      "components.Blocks.blocks.quote": "Citat",
      "components.Blocks.blocks.image": "Bild",
      "components.Blocks.blocks.unorderedList": "Punktlista",
      "components.Blocks.blocks.orderedList": "Numrerad lista",
      "components.Blocks.dnd.instruction":
        "För att omordna block, tryck på Kommando eller Kontroll tillsammans med Skift och upp- eller nedpiltangenterna",
      "components.Blocks.dnd.reorder":
        "{item}, flyttad. Ny position i redigeraren: {position}.",
      "components.Wysiwyg.ToggleMode.markdown-mode": "Markdown-läge",
      "components.Wysiwyg.ToggleMode.preview-mode": "Förhandsgranskningsläge",
      "components.Wysiwyg.collapse": "Kollapsa",
      "components.Wysiwyg.selectOptions.H1": "Titel H1",
      "components.Wysiwyg.selectOptions.H2": "Titel H2",
      "components.Wysiwyg.selectOptions.H3": "Titel H3",
      "components.Wysiwyg.selectOptions.H4": "Titel H4",
      "components.Wysiwyg.selectOptions.H5": "Titel H5",
      "components.Wysiwyg.selectOptions.H6": "Titel H6",
      "components.Wysiwyg.selectOptions.title": "Lägg till en titel",
      "components.WysiwygBottomControls.charactersIndicators": "tecken",
      "components.WysiwygBottomControls.fullscreen": "Expandera",
      "components.WysiwygBottomControls.uploadFiles":
        "Dra och släpp filer, klistra in från urklipp eller {browse}.",
      "components.WysiwygBottomControls.uploadFiles.browse": "välj dem",
      "components.pagination.go-to": "Gå till sida {page}",
      "components.pagination.go-to-next": "Gå till nästa sida",
      "components.pagination.go-to-previous": "Gå till föregående sida",
      "components.pagination.remaining-links": "Och {number} andra länkar",
      "components.popUpWarning.button.cancel": "Nej, avbryt",
      "components.popUpWarning.button.confirm": "Ja, bekräfta",
      "components.popUpWarning.message":
        "Är du säker på att du vill ta bort detta?",
      "components.popUpWarning.title": "Vänligen bekräfta",
      "content-manager.App.schemas.data-loaded":
        "Scheman har laddats framgångsrikt",
      "content-manager.ListViewTable.relation-loaded": "Relationer har laddats",
      "content-manager.ListViewTable.relation-loading": "Relationer laddas",
      "content-manager.ListViewTable.relation-more":
        "Denna relation innehåller fler enheter än vad som visas",
      "content-manager.EditRelations.title": "Relationella data",
      "content-manager.HeaderLayout.button.label-add-entry": "Skapa ny post",
      "content-manager.api.id": "API-ID",
      "content-manager.apiError.This attribute must be unique":
        "{field} måste vara unikt",
      "content-manager.components.AddFilterCTA.add": "Filter",
      "content-manager.components.AddFilterCTA.hide": "Filter",
      "content-manager.components.DragHandle-label": "Dra",
      "content-manager.components.DraggableAttr.edit":
        "Klicka för att redigera",
      "content-manager.components.DraggableCard.delete.field": "Ta bort {item}",
      "content-manager.components.DraggableCard.edit.field": "Redigera {item}",
      "content-manager.components.DraggableCard.move.field": "Flytta {item}",
      "content-manager.components.ListViewTable.row-line": "post rad {number}",
      "content-manager.components.DynamicZone.ComponentPicker-label":
        "Välj en komponent",
      "content-manager.components.DynamicZone.add-component":
        "Lägg till en komponent till {componentName}",
      "content-manager.components.DynamicZone.delete-label": "Ta bort {name}",
      "content-manager.components.DynamicZone.error-message":
        "Komponenten innehåller fel",
      "content-manager.components.DynamicZone.missing-components":
        "Det finns {number, plural, =0 {# saknade komponenter} one {# saknad komponent} other {# saknade komponenter}}",
      "content-manager.components.DynamicZone.move-down-label":
        "Flytta komponenten neråt",
      "content-manager.components.DynamicZone.move-up-label":
        "Flytta komponenten uppåt",
      "content-manager.components.DynamicZone.pick-compo": "Välj en komponent",
      "content-manager.components.DynamicZone.required": "Komponent krävs",
      "content-manager.components.EmptyAttributesBlock.button":
        "Gå till inställningssidan",
      "content-manager.components.EmptyAttributesBlock.description":
        "Du kan ändra dina inställningar",
      "content-manager.components.FieldItem.linkToComponentLayout":
        "Ställ in komponentens layout",
      "content-manager.components.FieldSelect.label": "Lägg till ett fält",
      "content-manager.components.FilterOptions.button.apply": "Använd",
      "content-manager.components.FiltersPickWrapper.PluginHeader.actions.apply":
        "Använd",
      "content-manager.components.FiltersPickWrapper.PluginHeader.actions.clearAll":
        "Rensa alla",
      "content-manager.components.FiltersPickWrapper.PluginHeader.description":
        "Ställ in villkoren som ska tillämpas för att filtrera posterna",
      "content-manager.components.FiltersPickWrapper.PluginHeader.title.filter":
        "Filter",
      "content-manager.components.FiltersPickWrapper.hide": "Dölj",
      "content-manager.components.Filters.usersSelect.label":
        "Sök och välj en användare att filtrera efter",
      "content-manager.components.LeftMenu.Search.label":
        "Sök efter en innehållstyp",
      "content-manager.components.LeftMenu.collection-types": "Samlingstyper",
      "content-manager.components.LeftMenu.single-types": "Enkeltyper",
      "content-manager.components.LimitSelect.itemsPerPage": "Poster per sida",
      "content-manager.components.NotAllowedInput.text":
        "Ingen behörighet att se detta fält",
      "content-manager.components.RelationInput.icon-button-aria-label": "Dra",
      "content-manager.components.RepeatableComponent.error-message":
        "Komponenten innehåller fel",
      "content-manager.components.Search.placeholder": "Sök efter en post...",
      "content-manager.components.Select.draft-info-title": "Status: Utkast",
      "content-manager.components.Select.publish-info-title":
        "Status: Publicerad",
      "content-manager.components.SettingsViewWrapper.pluginHeader.description.edit-settings":
        "Anpassa hur redigeringsvyn kommer att se ut.",
      "content-manager.components.SettingsViewWrapper.pluginHeader.description.list-settings":
        "Definiera inställningarna för listvyn.",
      "content-manager.components.SettingsViewWrapper.pluginHeader.title":
        "Konfigurera vyn — {name}",
      "content-manager.bulk-publish.already-published": "Redan publicerad",
      "content-manager.components.TableDelete.delete": "Radera alla",
      "content-manager.components.TableDelete.deleteSelected": "Radera valda",
      "content-manager.components.TableDelete.label":
        "{number, plural, one {# post} other {# poster}} valda",
      "content-manager.components.TableEmpty.withFilters":
        "Det finns inga {contentType} med de applicerade filtren...",
      "content-manager.components.TableEmpty.withSearch":
        "Det finns inga {contentType} som motsvarar sökningen ({search})...",
      "content-manager.components.TableEmpty.withoutFilter":
        "Det finns inga {contentType}...",
      "content-manager.components.empty-repeatable":
        "Inga poster ännu. Klicka på knappen nedan för att lägga till en.",
      "content-manager.components.notification.info.maximum-requirement":
        "Du har redan nått det maximala antalet fält",
      "content-manager.components.notification.info.minimum-requirement":
        "Ett fält har lagts till för att matcha minimikravet",
      "content-manager.components.repeatable.reorder.error":
        "Ett fel inträffade vid omordning av din komponents fält, vänligen försök igen",
      "content-manager.components.reset-entry": "Återställ post",
      "content-manager.components.uid.apply": "tillämpa",
      "content-manager.components.uid.available": "Tillgänglig",
      "content-manager.components.uid.regenerate": "Regenerera",
      "content-manager.components.uid.suggested": "föreslagen",
      "content-manager.components.uid.unavailable": "Inte tillgänglig",
      "content-manager.containers.Edit.Link.Layout": "Konfigurera layouten",
      "content-manager.containers.Edit.Link.Model": "Redigera samlingstypen",
      "content-manager.containers.Edit.addAnItem": "Lägg till ett objekt...",
      "content-manager.containers.Edit.clickToJump":
        "Klicka för att hoppa till posten",
      "content-manager.containers.Edit.delete": "Radera",
      "content-manager.containers.Edit.delete-entry": "Radera denna post",
      "content-manager.containers.Edit.editing": "Redigerar...",
      "content-manager.containers.Edit.information": "Information",
      "content-manager.containers.Edit.information.by": "Av",
      "content-manager.containers.Edit.information.created": "Skapad",
      "content-manager.containers.Edit.information.draftVersion":
        "utkastversion",
      "content-manager.containers.Edit.information.editing": "Redigerar",
      "content-manager.containers.Edit.information.lastUpdate":
        "Senaste uppdatering",
      "content-manager.containers.Edit.information.publishedVersion":
        "publicerad version",
      "content-manager.containers.Edit.pluginHeader.title.new": "Skapa en post",
      "content-manager.containers.Edit.reset": "Återställ",
      "content-manager.containers.Edit.returnList": "Återgå till lista",
      "content-manager.containers.Edit.seeDetails": "Detaljer",
      "content-manager.containers.Edit.submit": "Spara",
      "content-manager.containers.EditSettingsView.modal-form.edit-field":
        "Redigera fältet",
      "content-manager.containers.EditView.add.new-entry": "Lägg till en post",
      "content-manager.containers.EditView.notification.errors":
        "Formuläret innehåller några fel",
      "content-manager.containers.Home.introduction":
        "För att redigera dina poster gå till den specifika länken i vänstermenyn. Detta plugin har inte ett riktigt sätt att redigera inställningar och är fortfarande under aktiv utveckling.",
      "content-manager.containers.Home.pluginHeaderDescription":
        "Hantera dina poster genom ett kraftfullt och vackert gränssnitt.",
      "content-manager.containers.Home.pluginHeaderTitle": "Innehållshanterare",
      "content-manager.containers.List.draft": "Utkast",
      "content-manager.containers.List.errorFetchRecords": "Fel",
      "content-manager.containers.List.published": "Publicerad",
      "content-manager.containers.ListPage.displayedFields": "Visade fält",
      "content-manager.containers.ListPage.items":
        "{number, plural, =0 {poster} one {post} other {poster}}",
      "content-manager.containers.ListPage.table-headers.publishedAt": "Status",
      "content-manager.containers.ListPage.selectedEntriesModal.title":
        "Publicera poster",
      "content-manager.containers.ListPage.selectedEntriesModal.selectedCount":
        "<b>{alreadyPublishedCount}</b> {alreadyPublishedCount, plural, =0 {poster} one {post} other {poster}} redan publicerade. <b>{readyToPublishCount}</b> {readyToPublishCount, plural, =0 {poster} one {post} other {poster}} redo att publiceras. <b>{withErrorsCount}</b> {withErrorsCount, plural, =0 {poster} one {post} other {poster}} väntar på åtgärd.",
      "content-manager.containers.ListPage.selectedEntriesModal.publishedCount":
        "<b>{publishedCount}</b> {publishedCount, plural, =0 {poster} one {post} other {poster}} publicerade. <b>{withErrorsCount}</b> {withErrorsCount, plural, =0 {poster} one {post} other {poster}} väntar på åtgärd.",
      "content-manager.containers.ListPage.autoCloneModal.header": "Duplicera",
      "content-manager.containers.ListPage.autoCloneModal.title":
        "Denna post kan inte dupliceras direkt.",
      "content-manager.containers.ListPage.autoCloneModal.description":
        "En ny post kommer att skapas med samma innehåll, men du måste ändra följande fält för att spara den.",
      "content-manager.containers.ListPage.autoCloneModal.create": "Skapa",
      "content-manager.containers.ListPage.autoCloneModal.error.unique":
        "Identiska värden i ett unikt fält är inte tillåtna.",
      "content-manager.containers.ListPage.autoCloneModal.error.relation":
        "Duplicering av relationen kan ta bort den från den ursprungliga posten.",
      "content-manager.containers.ListSettingsView.modal-form.edit-label":
        "Redigera {fieldName}",
      "content-manager.containers.SettingPage.add.field":
        "Infoga ett annat fält",
      "content-manager.containers.SettingPage.add.relational-field":
        "Infoga ett annat relaterat fält",
      "content-manager.containers.SettingPage.attributes": "Attributfält",
      "content-manager.containers.SettingPage.attributes.description":
        "Definiera ordningen på attributen",
      "content-manager.containers.SettingPage.editSettings.description":
        "Dra och släpp fälten för att bygga layouten",
      "content-manager.containers.SettingPage.editSettings.entry.title":
        "Postens titel",
      "content-manager.containers.SettingPage.editSettings.entry.title.description":
        "Ställ in det visade fältet för din post",
      "content-manager.containers.SettingPage.editSettings.relation-field.description":
        "Ställ in det visade fältet i både redigerings- och listvyer",
      "content-manager.containers.SettingPage.editSettings.title":
        "Redigeringsvy (inställningar)",
      "content-manager.containers.SettingPage.layout": "Layout",
      "content-manager.containers.SettingPage.listSettings.description":
        "Konfigurera alternativen för denna samlingstyp",
      "content-manager.containers.SettingPage.listSettings.title":
        "Listvy (inställningar)",
      "content-manager.containers.SettingPage.pluginHeaderDescription":
        "Konfigurera de specifika inställningarna för denna samlingstyp",
      "content-manager.containers.SettingPage.relations": "Relaterade fält",
      "content-manager.containers.SettingPage.settings": "Inställningar",
      "content-manager.containers.SettingPage.view": "Visa",
      "content-manager.containers.SettingViewModel.pluginHeader.title":
        "Innehållshanterare — {name}",
      "content-manager.containers.SettingsPage.Block.contentType.description":
        "Konfigurera de specifika inställningarna",
      "content-manager.containers.SettingsPage.Block.contentType.title":
        "Samlingstyper",
      "content-manager.containers.SettingsPage.Block.generalSettings.description":
        "Konfigurera standardalternativen för dina samlingstyper",
      "content-manager.containers.SettingsPage.Block.generalSettings.title":
        "Allmänt",
      "content-manager.containers.SettingsPage.pluginHeaderDescription":
        "Konfigurera inställningarna för alla dina samlingstyper och grupper",
      "content-manager.containers.SettingsView.list.subtitle":
        "Konfigurera layouten och visningen av dina samlingstyper och grupper",
      "content-manager.dnd.cancel-item":
        "{item}, släppt. Omsortering avbruten.",
      "content-manager.dnd.drop-item":
        "{item}, släppt. Slutposition i listan: {position}.",
      "content-manager.dnd.grab-item":
        "{item}, greppat. Aktuell position i listan: {position}. Tryck på upp- och nedpil för att ändra position, mellanslag för att släppa, Escape för att avbryta.",
      "content-manager.dnd.instructions":
        "Tryck på mellanslag för att greppa och omordna",
      "content-manager.dnd.reorder":
        "{item}, flyttad. Ny position i listan: {position}.",
      "content-manager.edit-settings-view.link-to-ctb.components":
        "Redigera komponenten",
      "content-manager.edit-settings-view.link-to-ctb.content-types":
        "Redigera innehållstypen",
      "content-manager.emptyAttributes.button": "Gå till innehållstypbyggaren",
      "content-manager.emptyAttributes.description":
        "Lägg till ditt första fält till din samlingstyp",
      "content-manager.emptyAttributes.title": "Det finns inga fält ännu",
      "content-manager.error.attribute.key.taken": "Detta värde finns redan",
      "content-manager.error.attribute.sameKeyAndName": "Kan inte vara lika",
      "content-manager.error.attribute.taken": "Detta fältnamn finns redan",
      "content-manager.error.contentTypeName.taken": "Detta namn finns redan",
      "content-manager.error.model.fetch":
        "Ett fel inträffade vid hämtning av modellkonfigurationer.",
      "content-manager.error.record.create":
        "Ett fel inträffade vid skapande av post.",
      "content-manager.error.record.delete":
        "Ett fel inträffade vid radering av post.",
      "content-manager.error.record.fetch":
        "Ett fel inträffade vid hämtning av post.",
      "content-manager.error.record.update":
        "Ett fel inträffade vid uppdatering av post.",
      "content-manager.error.records.count":
        "Ett fel inträffade vid hämtning av postantal.",
      "content-manager.error.records.fetch":
        "Ett fel inträffade vid hämtning av poster.",
      "content-manager.error.schema.generation":
        "Ett fel inträffade vid schema generering.",
      "content-manager.error.validation.json": "Detta är inte en JSON",
      "content-manager.error.validation.max":
        "Värdet är för högt (max: {max}).",
      "content-manager.error.validation.maxLength":
        "Värdet är för långt (max: {max}).",
      "content-manager.error.validation.min":
        "Värdet är för lågt (min: {min}).",
      "content-manager.error.validation.minLength":
        "Värdet är för kort (min: {min}).",
      "content-manager.error.validation.minSupMax": "Kan inte vara större",
      "content-manager.error.validation.regex": "Värdet matchar inte regex.",
      "content-manager.error.validation.required":
        "Detta värde är obligatoriskt.",
      "content-manager.form.Input.bulkActions": "Aktivera massåtgärder",
      "content-manager.form.Input.defaultSort": "Standard sorteringsattribut",
      "content-manager.form.Input.description": "Beskrivning",
      "content-manager.form.Input.description.placeholder":
        "Visa namn i profilen",
      "content-manager.form.Input.editable": "Redigerbart fält",
      "content-manager.form.Input.filters": "Aktivera filter",
      "content-manager.form.Input.hint.character.unit":
        "{maxValue, plural, one { tecken} other { tecken}}",
      "content-manager.form.Input.hint.minMaxDivider": " / ",
      "content-manager.form.Input.hint.text":
        "{min, select, undefined {} other {min. {min}}}{divider}{max, select, undefined {} other {max. {max}}}{unit}{br}{description}",
      "content-manager.form.Input.label": "Etikett",
      "content-manager.form.Input.label.inputDescription":
        "Detta värde åsidosätter etiketten som visas i tabellhuvudet",
      "content-manager.form.Input.pageEntries": "Poster per sida",
      "content-manager.form.Input.pageEntries.inputDescription":
        "Obs: Du kan åsidosätta detta värde på inställningssidan för samlingstypen.",
      "content-manager.form.Input.placeholder": "Platshållare",
      "content-manager.form.Input.placeholder.placeholder":
        "Mitt fantastiska värde",
      "content-manager.form.Input.search": "Aktivera sökning",
      "content-manager.form.Input.search.field":
        "Aktivera sökning på detta fält",
      "content-manager.form.Input.sort.field":
        "Aktivera sortering på detta fält",
      "content-manager.form.Input.sort.order": "Standard sorteringsordning",
      "content-manager.form.Input.wysiwyg": "Visa som WYSIWYG",
      "content-manager.global.displayedFields": "Visade fält",
      "content-manager.groups": "Grupper",
      "content-manager.groups.numbered": "Grupper ({number})",
      "content-manager.header.name": "Innehåll",
      "content-manager.link-to-ctb": "Redigera modellen",
      "content-manager.models": "Samlingstyper",
      "content-manager.models.numbered": "Samlingstyper ({number})",
      "content-manager.notification.error.displayedFields":
        "Du behöver minst ett visat fält",
      "content-manager.notification.error.relationship.fetch":
        "Ett fel inträffade vid hämtning av relationer.",
      "content-manager.notification.info.SettingPage.disableSort":
        "Du behöver ha ett attribut med sortering tillåten",
      "content-manager.notification.info.minimumFields":
        "Du behöver ha minst ett fält visat",
      "content-manager.notification.upload.error":
        "Ett fel inträffade vid uppladdning av dina filer",
      "content-manager.pageNotFound": "Sidan hittades inte",
      "content-manager.pages.ListView.header-subtitle":
        "{number, plural, =0 {# poster} one {# post} other {# poster}} hittade",
      "content-manager.pages.NoContentType.button":
        "Skapa din första innehållstyp",
      "content-manager.pages.NoContentType.text":
        "Du har inget innehåll ännu, vi rekommenderar att du skapar din första innehållstyp.",
      "content-manager.permissions.not-allowed.create":
        "Du har inte tillåtelse att skapa ett dokument",
      "content-manager.permissions.not-allowed.update":
        "Du har inte tillåtelse att se detta dokument",
      "content-manager.plugin.description.long":
        "Snabbt sätt att se, redigera och radera data i din databas.",
      "content-manager.plugin.description.short":
        "Snabbt sätt att se, redigera och radera data i din databas.",
      "content-manager.popUpWarning.bodyMessage.contentType.delete":
        "Är du säker på att du vill radera innehållstypen?",
      "content-manager.popUpWarning.bodyMessage.contentType.delete.all":
        "Är du säker på att du vill radera dessa poster?",
      "content-manager.popUpWarning.bodyMessage.contentType.publish.all":
        "Är du säker på att du vill publicera dessa poster?",
      "content-manager.popUpWarning.bodyMessage.contentType.unpublish.all":
        "Är du säker på att du vill avpublicera dessa poster?",
      "content-manager.popUpWarning.warning.has-draft-relations.title":
        "Bekräftelse",
      "content-manager.popUpWarning.warning.publish-question":
        "Vill du fortfarande publicera?",
      "content-manager.popUpWarning.warning.unpublish":
        "Om du inte publicerar detta innehåll kommer det automatiskt att bli ett utkast.",
      "content-manager.popUpWarning.warning.unpublish-question":
        "Är du säker på att du inte vill publicera det?",
      "content-manager.popUpWarning.warning.updateAllSettings":
        "Detta kommer att ändra alla dina inställningar",
      "content-manager.popUpwarning.warning.has-draft-relations.button-confirm":
        "Ja, publicera",
      "content-manager.popUpwarning.warning.has-draft-relations.message":
        "<b>{count, plural, one { relationen är } other { relationerna är } }</b> inte publicerade ännu och kan leda till oväntat beteende.",
      "content-manager.popUpwarning.warning.bulk-has-draft-relations.message":
        "<b>{count} {count, plural, one { relation } other { relationer } } av {entities} { entities, plural, one { post } other { poster } } {count, plural, one { är } other { är } }</b> inte publicerade ännu och kan leda till oväntat beteende. ",
      "content-manager.popover.display-relations.label": "Visa relationer",
      "content-manager.relation.add": "Lägg till relation",
      "content-manager.relation.disconnect": "Ta bort",
      "content-manager.relation.isLoading": "Relationer laddas",
      "content-manager.relation.loadMore": "Ladda mer",
      "content-manager.relation.notAvailable": "Inga relationer tillgängliga",
      "content-manager.relation.publicationState.draft": "Utkast",
      "content-manager.relation.publicationState.published": "Publicerad",
      "content-manager.reviewWorkflows.stage.label": "Granskningssteg",
      "content-manager.select.currently.selected":
        "{count} för närvarande valda",
      "content-manager.success.record.delete": "Raderad",
      "content-manager.success.record.publish": "Publicerad",
      "content-manager.success.record.publishing": "Publicerar...",
      "content-manager.success.record.save": "Sparad",
      "content-manager.success.record.unpublish": "Avpublicerad",
      "content-manager.utils.data-loaded":
        "{number, plural, =1 {posten har} other {poster har}} laddats framgångsrikt",
      "content-manager.listView.validation.errors.title": "Åtgärd krävs",
      "content-manager.listView.validation.errors.message":
        "Vänligen se till att alla fält är giltiga innan du publicerar (obligatoriskt fält, min/max teckenlängd, etc.)",
      dark: "Mörk",
      "form.button.continue": "Fortsätt",
      "form.button.done": "Färdig",
      "global.actions": "Åtgärder",
      "global.auditLogs": "Granskningsloggar",
      "global.back": "Tillbaka",
      "global.cancel": "Avbryt",
      "global.change-password": "Byt lösenord",
      "global.close": "Stäng",
      "global.content-manager": "Innehållshanterare",
      "global.continue": "Fortsätt",
      "global.delete": "Radera",
      "global.delete-target": "Radera {target}",
      "global.description": "Beskrivning",
      "global.details": "Detaljer",
      "global.disabled": "Inaktiverad",
      "global.documentation": "Dokumentation",
      "global.enabled": "Aktiverad",
      "global.finish": "Avsluta",
      "global.marketplace": "Marknadsplats",
      "global.name": "Namn",
      "global.none": "Ingen",
      "global.password": "Lösenord",
      "global.plugins": "Plugins",
      "global.plugins.content-manager": "Innehållshanterare",
      "global.plugins.content-manager.description":
        "Snabbt sätt att se, redigera och radera data i din databas.",
      "global.plugins.content-type-builder": "Innehållstypbyggare",
      "global.plugins.content-type-builder.description":
        "Modellera datastrukturen i din API. Skapa nya fält och relationer på bara en minut. Filerna skapas och uppdateras automatiskt i ditt projekt.",
      "global.plugins.documentation": "Dokumentation",
      "global.plugins.documentation.description":
        "Skapa ett OpenAPI-dokument och visualisera din API med SWAGGER UI.",
      "global.plugins.email": "E-post",
      "global.plugins.email.description":
        "Konfigurera din applikation för att skicka e-post.",
      "global.plugins.graphql": "GraphQL",
      "global.plugins.graphql.description":
        "Lägger till GraphQL-slutpunkt med standard-API-metoder.",
      "global.plugins.i18n": "Internationalisering",
      "global.plugins.i18n.description":
        "Detta plugin möjliggör att skapa, läsa och uppdatera innehåll på olika språk, både från administratörspanelen och från API:et.",
      "global.plugins.sentry": "Sentry",
      "global.plugins.sentry.description":
        "Skicka Strapi-fel händelser till Sentry.",
      "global.plugins.upload": "Mediebibliotek",
      "global.plugins.upload.description": "Hantering av mediefiler.",
      "global.plugins.users-permissions": "Roller & behörigheter",
      "global.plugins.users-permissions.description":
        "Skydda din API med en fullständig autentiseringsprocess baserad på JWT. Detta plugin kommer också med en ACL-strategi som tillåter dig att hantera behörigheterna mellan användargrupper.",
      "global.profile": "Profil",
      "global.prompt.unsaved":
        "Är du säker på att du vill lämna denna sida? Alla dina ändringar kommer att förloras",
      "global.reset-password": "Återställ lösenord",
      "global.roles": "Roller",
      "global.save": "Spara",
      "global.search": "Sök",
      "global.see-more": "Se mer",
      "global.select": "Välj",
      "global.select-all-entries": "Välj alla poster",
      "global.settings": "Inställningar",
      "global.type": "Typ",
      "global.users": "Användare",
      "global.fullname": "{firstname} {lastname}",
      "global.learn-more": "Läs mer",
      light: "Ljus",
      "notification.contentType.relations.conflict":
        "Innehållstypen har motstridiga relationer",
      "notification.default.title": "Information:",
      "notification.ee.warning.at-seat-limit.title":
        "{licenseLimitStatus, select, OVER_LIMIT {Över} AT_LIMIT {Vid}} sittgräns ({currentUserCount}/{permittedSeats})",
      "notification.ee.warning.over-.message":
        "Lägg till platser för att {licenseLimitStatus, select, OVER_LIMIT {bjuda in} AT_LIMIT {återaktivera}} användare. Om du redan gjort det men det inte återspeglas i Strapi ännu, se till att starta om din app.",
      "notification.error": "Ett fel inträffade",
      "notification.error.invalid.configuration":
        "Du har en ogiltig konfiguration, kontrollera din serverlogg för mer information.",
      "notification.error.layout": "Kunde inte hämta layouten",
      "notification.error.tokennamenotunique":
        "Namnet har redan tilldelats en annan token",
      "notification.form.error.fields": "Formuläret innehåller några fel",
      "notification.form.success.fields": "Ändringar sparade",
      "notification.link-copied": "Länken kopierades till urklippet",
      "notification.permission.not-allowed-read":
        "Du har inte tillåtelse att se detta dokument",
      "notification.success.apitokencreated": "API-token skapad framgångsrikt",
      "notification.success.apitokenedited":
        "API-token redigerad framgångsrikt",
      "notification.success.delete": "Objektet har raderats",
      "notification.success.saved": "Sparad",
      "notification.success.title": "Framgång:",
      "notification.success.transfertokencreated":
        "Överföringstoken skapad framgångsrikt",
      "notification.success.transfertokenedited":
        "Överföringstoken redigerad framgångsrikt",
      "notification.version.update.message":
        "En ny version av Strapi är tillgänglig!",
      "notification.warning.404": "404 - Inte hittad",
      "notification.warning.title": "Varning:",
      or: "ELLER",
      "request.error.model.unknown": "Denna modell finns inte",
      selectButtonTitle: "Välj",
      skipToContent: "Hoppa till innehåll",
      submit: "Skicka",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};

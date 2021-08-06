import Providers from "next-auth/providers"

// $ExpectType EmailConfig
Providers.Email({
  server: "path/to/server",
  from: "path/from",
})

// $ExpectType EmailConfig
Providers.Email({
  server: {
    host: "host",
    port: 123,
    auth: {
      user: "foo",
      pass: "123",
    },
  },
  from: "path/from",
})

// $ExpectType CredentialsConfig<{ username: { label: string; type: string; }; password: { label: string; type: string; }; }>
Providers.Credentials({
  id: "login",
  name: "account",
  credentials: {
    username: {
      label: "Password",
      type: "password",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize({ username, password }) {
    return null
  },
})

// $ExpectType OAuthConfig<Profile>
Providers.Apple({
  clientId: "foo123",
  clientSecret: {
    appleId: "foo@icloud.com",
    teamId: "foo",
    privateKey: "123xyz",
    keyId: "1234",
  },
})

// $ExpectType OAuthConfig<Profile>
Providers.Twitter({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.Facebook({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.GitHub({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.GitHub({
  clientId: "foo123",
  clientSecret: "bar123",
  authorization: { params: { scope: "change:thing read:that" } },
})

// $ExpectType OAuthConfig<Profile>
Providers.GitLab({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.Slack({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.Google({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.Google({
  clientId: "foo123",
  clientSecret: "bar123",
  authorization: "https://foo.google.com",
})

// $ExpectType OAuthConfig<Profile>
Providers.Auth0({
  clientId: "foo123",
  clientSecret: "bar123",
  issuer: "https://foo.auth0.com",
})

// $ExpectType OAuthConfig<Profile>
Providers.Auth0({
  clientId: "foo123",
  clientSecret: "bar123",
  issuer: "https://foo.auth0.com",
  profile() {
    return {
      id: "foo123",
      name: "foo",
      email: "foo@bar.io",
      image: "https://foo.auth0.com/image/1.png",
    }
  },
})

// $ExpectType OAuthConfig<Profile>
Providers.IdentityServer4({
  id: "identity-server4",
  name: "IdentityServer4",
  authorization: { params: { scope: "change:thing read:that" } },
  issuer: "https://foo.is4.com",
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.Discord({
  clientId: "foo123",
  clientSecret: "bar123",
  authorization: { params: { scope: "identify" } },
})

// $ExpectType OAuthConfig<Profile>
Providers.Twitch({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.Okta({
  clientId: "foo123",
  clientSecret: "bar123",
  issuer: "https://foo.auth0.com",
})

// $ExpectType OAuthConfig<Profile>
Providers.OneLogin({
  clientId: "foo123",
  clientSecret: "bar123",
  issuer: "https://foo.onelogin.com",
})

// $ExpectType OAuthConfig<Profile>
Providers.BattleNet({
  clientId: "foo123",
  clientSecret: "bar123",
  region: "europe",
})

// $ExpectType OAuthConfig<Profile>
Providers.Box({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.Cognito({
  clientId: "foo123",
  clientSecret: "bar123",
  issuer: "https://foo.auth0.com",
})

// $ExpectType OAuthConfig<Profile>
Providers.Yandex({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.LinkedIn({
  clientId: "foo123",
  clientSecret: "bar123",
  authorization: { params: { scope: "r_emailaddress r_liteprofile" } },
})

// $ExpectType OAuthConfig<Profile>
Providers.Spotify({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.Spotify({
  clientId: "foo123",
  clientSecret: "bar123",
  authorization: { params: { scope: "user-read-email" } },
})

// $ExpectType OAuthConfig<Profile>
Providers.Reddit({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.AzureADB2C({
  clientId: "foo123",
  clientSecret: "bar123",
  authorization: { params: { scope: "offline_access User.Read" } },
  tenantId: "tenantId",
  idToken: true,
})

// $ExpectType OAuthConfig<Profile>
Providers.FusionAuth({
  name: "FusionAuth",
  issuer: "domain",
  clientId: "clientId",
  clientSecret: "clientSecret",
  tenantId: "tenantId",
})

// $ExpectType OAuthConfig<Profile>
Providers.FACEIT({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.Instagram({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.Kakao({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.Osso({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.Zoho({
  clientId: "foo123",
  clientSecret: "bar123",
})

// $ExpectType OAuthConfig<Profile>
Providers.Freshbooks({
  clientId: "foo123",
  clientSecret: "bar123",
})

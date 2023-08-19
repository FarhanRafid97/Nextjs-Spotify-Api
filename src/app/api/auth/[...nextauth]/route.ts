import axios from 'axios';
import NextAuth, { AuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import SpotifyProvider from 'next-auth/providers/spotify';

const scopes = [
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-read-currently-playing',
  'user-modify-playback-state',
  'user-read-private',
].join(',');

const param = {
  scope: scopes,
};
async function refreshAccessToken(token: JWT): Promise<JWT | null> {
  const refresh_token = token.refreshToken;
  const client_id = 'your_client_id';
  const client_secret = 'your_client_secret';

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    headers: {
      Authorization:
        'Basic ' +
        Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
        ).toString('base64'),
    },
    data: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token ?? '',
    }),
  };

  try {
    const { data } = await axios(authOptions);
    return {
      ...token,
      accessToken: data?.access_token ?? '',
      accessTokenExpires: Date.now() + data.expires_in * 1000,
    };
  } catch (error) {
    return null;
  }
}

const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID ?? '',
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET ?? '',
    }),
  ],

  callbacks: {
    async jwt({ token, account }): Promise<JWT> {
      refreshAccessToken(token);

      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = account.expires_at;
        return token;
      }

      if (
        token.accessTokenExpires &&
        Date.now() < token.accessTokenExpires * 1000
      ) {
        return token;
      }

      return (await refreshAccessToken(token)) ?? token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token;
      }

      return session;
    },
  },
});
export { handler as GET, handler as POST };

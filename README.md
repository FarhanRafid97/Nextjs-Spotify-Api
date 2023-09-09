# Spotify API Clone with Next.js and TypeScript

This is a simple web application that clones some basic Spotify functionality using the Spotify API. To get started, make sure you have a Spotify Developer account and obtain your `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` by creating a Spotify application on the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- A Spotify Developer account with your own `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET`.
- Basic knowledge of Next.js, TypeScript, and Node.js.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/spotify-clone.git
   ```

2. Change to the project directory:
   ```bash
   cd spotify-clone
   ```

## Configuration

1. Before running the application, you need to configure your environment variables. Create a .env.local file in the project root and add the following variables:
   ```bash
   SPOTIFY_CLIENT_ID="your_spotify_client_id"
   SPOTIFY_CLIENT_SECRET="your_spotify_client_secret"
   SPOTIFY_REFRESH_TOKEN="your_spotify_refresh_token"
   NEXT_PUBLIC_WEB_URL="http://localhost:3000"
   ```
2. how to get refresh token
   ```bash
   curl -H "Authorization: Basic <base64 encoded your_spotify_client_id:your_spotify_client_secret>"
   -d grant_type=authorization_code -d code=<code> -d redirect_uri=http%3A
   %2F%2Flocalhost:3000 https://accounts.spotify.com/api/token
   ```

## Running the Application

To run the application locally, follow these steps:

1. Install the project dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at http://localhost:3000.

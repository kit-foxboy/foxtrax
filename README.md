# Foxtrax Travel Logger

Foxtrax is a travel logger website made with Nuxt on Bun, TailwindCSS with DaisyUI components, and Supabase for the backend. It allows users to log their travels, share experiences, and explore destinations. It's meant for easy casual use with no email login required, but users can create an account to save their logs and access them from any device. By default, the site will assign a random passphrase to the user that they can pair with a display name in case their cache is cleared or they want to use a different device. Users can also create an account with email and password if they want to have a more permanent login but this can be done after the fact so the site focuses on ease of access. Naturally this means that spam and bots are a real concern so I'm looking into libraries to help with that in as non-obtrusive a way as possible. The site is also designed to be mobile-first and responsive, with a focus on performance and accessibility.

While I aim to make this a fully functional travel logger, the project is still in development and is ultimately a portfolio piece and test case for my personal website's tech stack. Basically not a thing I plan to support long term unless it becomes oddly popular. I'll maintain it as best as I can but I have a lot bigger things on my plate and this is just a fun side project. If you want to contribute or roll your own version, feel free to fork the repo and submit a pull request. I welcome any feedback or suggestions for improvement as I always like feedback and connecting with other devs.

This is a Nuxt stack test project. Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

While this works with Node, for security and speed, I prefer Bun (at least until we see how the rust rewrite with AI goes X3).

```bash

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash

# bun
bun run dev
```

## Production

Build the application for production:

```bash

# bun
bun run build
```

Locally preview production build:

```bash

# bun
bun run preview
```

## Attributions

Project strongly inspired by w3cj's <a href="https://github.com/w3cj/nuxt-travel-log">Travel Log Project</a>. I greatly appreciate the work that went into that project and it was a great starting point for me to learn from. I already knew Vue and Bun, but your thorough explanation of the ins and outs of Nuxt were invaluable. The <a href="https://www.youtube.com/watch?v=DK93dqmJJYg">YouTube video</a> by Syntax accompanying his starter was immensely helpful. CJ and the Syntax team have my thanks. As always, I also thank the entire family tree of open source developers that make projects as easy to set up and deploy. Those of you with libraries 10 dependencies deep are the true unsung heroes and deserve more accolades than you'll ever get.

### Photos

<a href="https://www.vecteezy.com/free-photos/old-map">Old Map Stock photos</a> by Vecteezy. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>

### Icons

<a href="https://icones.js.org/collection/streamline-plump">Streamline Plump</a> by antfu. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>

## AI Usage

I use local AI as autocomplete, occasional debugging assistant, and to do things like generate docblock comments or other non-coding templatized tasks. I do not use agentic AI and would appreciate you not use it for pull requests or other contributions. I don't want to morally grandstand and I understand that the industry is changing. Your choices are on your conscience and ethics, but I believe every project deserves a human in the driver's seat at all times. The use cases are there and I accept that it's just a part of software development now. I will likely end up using it more and more as time goes on simply to stay a developer who makes a living, but I refuse to cede total control as I feel it violates my responsibility to make good decisions and contributions to projects let alone the ethics of copyright and the environment. My personal and portfolio projects are to learn and to share that with others wanting to learn and own their own technology. One of my potential clients last week said they'd only hire me if I was cheaper than Claude tokens and that hurt. It hurt an awful lot. Technology is my passion and I refuse to devalue my work and education by equating someone using it judiciously and someone using it to cut corners. Software development is a craft and has real people with real feelings behind it, so please think about that when this subject comes up. Use the tools, don't be one.

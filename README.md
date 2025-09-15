# Ashish.dev
the folder structure is given below...

```
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   └── ...
│
├── docker/
│   ├── nginx.conf
│   └── mongo-init.js
│
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx
│   │   │   ├── blog/          # Blog routes (public)
│   │   │   ├── webinars/      # Webinar landing
│   │   │   └── resources/     # Public-facing Resource Hub pages
│   │   │
│   │   ├── (dashboard)/       # Authenticated dashboard
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── webinars/      # Host/manage webinars
│   │   │   ├── newsletter/    # Manage subscribers
│   │   │   ├── resources/     # Upload/manage resources
│   │   │   └── settings/
│   │   │
│   │   ├── api/               # API routes
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/route.ts
│   │   │   ├── blog/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/route.ts
│   │   │   ├── newsletter/
│   │   │   │   └── route.ts
│   │   │   ├── webinars/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/route.ts
│   │   │   ├── resources/     # <-- NEW
│   │   │   │   ├── route.ts   # List + create resources
│   │   │   │   └── [id]/route.ts # Read, update, delete
│   │   │   └── users/
│   │   │       └── route.ts
│   │   │
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── blog/
│   │   ├── newsletter/
│   │   ├── webinars/
│   │   └── resources/         # Components for resource hub
│   │
│   ├── hooks/
│   ├── lib/
│   │   ├── db/
│   │   │   └── mongo.ts
│   │   ├── auth/
│   │   ├── mailer.ts
│   │   └── logger.ts
│   │
│   ├── styles/
│   ├── types/
│   │   ├── blog.d.ts
│   │   ├── newsletter.d.ts
│   │   ├── webinar.d.ts
│   │   └── resource.d.ts      # <-- NEW type for resources
│   │
│   └── utils/
│       ├── formatDate.ts
│       ├── validators.ts
│       └── apiResponse.ts
│
├── tests/
│   ├── api/
│   └── components/
│
├── .dockerignore
├── .env.example
├── docker-compose.yml
├── Dockerfile
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md

```



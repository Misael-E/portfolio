# Misael Esperanzate

This portfolio website is built using Next.js, styled with Tailwind CSS, with content managed through Sanity, and deployed on Vercel. It showcases my professional work, skills, and projects.

## Features

-   Responsive design using Tailwind CSS.
-   Dynamic content management with Sanity.
-   Optimized for performance and SEO with Next.js 14+.
-   Easy deployment and hosting on Vercel.

## Prerequisites

-   Node.js
-   Git
-   Sanity CLI
-   Vercel Account

## Installation

### Clone the Repository

```
git clone https://github.com/Misael-E/portfolio-website.git

cd portfolio-website
```

### Install Dependencies

```
npm install
```

### Setting Up Sanity

1. Install Sanity CLI: `npm install -g @sanity/cli`
2. Initialize Sanity project: `sanity init`
3. Configure the Sanity project according to your needs.

## Running Locally

```
npm run dev
```

The site will be available at http://localhost:3000.

### Environment Variables

Create a .env.local file and add the following:

```
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=your_dataset_name
NEXT_PUBLIC_BASE_URL=http://localhost:3000/
```

## Building for Production

```
npm run build
```

## Deploying to Vercel

1. Push your code to a GitHub repository.
2. Sign in to Vercel and import your GitHub repository.
3. Follow the instructions to deploy your site.

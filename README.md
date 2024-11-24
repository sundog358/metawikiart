# 🌟 Meta Wiki Art Documentation Website 🌐

Welcome to the **Meta Wiki Art** documentation platform, built with [Docusaurus](https://docusaurus.io/), a modern static website generator! This project serves as an interactive space to explore **Linked Open Data** pipelines, resources, and use cases for books and artworks. 🖼️📚

---

## 🎯 Features

- **Interactive Docs**: Easy-to-navigate documentation for Linked Open Data and GLAM workflows.
- **Linked Open Data Ready**: Structured and interoperable content for global use.
- **Customizable & Scalable**: Flexible architecture to grow with your needs.

---

## 🚀 Getting Started

### 🛠️ Installation

To set up the project locally, follow these steps:

`$ npm install`

Ensure you have Node.js and npm installed before running the command.

🌐 Local Development
Start a development server to preview changes live:

`$ npm start`

This will:

Start a development server at http://localhost:3000.
Reflect changes live without restarting the server.
📦 Build
Generate the static content for production:

`$ npm run build`

The static content will be available in the build/ directory, ready for deployment.

### 🚢 Deployment

Using SSH:

Deploy the website via SSH:

`$ USE_SSH=true npm run deploy`

Without SSH:

For GitHub Pages deployment:

`$ GIT_USER=<Your GitHub username> npm run deploy`

This command builds the website and pushes the content to the gh-pages branch.

### 📂 Project Structure

Below is an overview of the key directories and their purposes:

```
MetaWikiArt/
├── docs/              # Markdown files for documentation
├── blog/              # Blog content for the project
├── src/               # Source files for components and pages
├── static/            # Static assets (images, icons, etc.)
├── docusaurus.config.js # Main configuration file
└── README.md          # Project README file
```

### 🛠️ Technologies Used

Docusaurus: Static site generator.
React: UI components.
Markdown: Content formatting.
npm: Dependency management.

### 🎨 Customization Highlights

Bright and Engaging Design: Inspired by the themes of art and culture.
Dynamic Metadata: Uses structured data formats (e.g., JSON-LD) for enhanced discoverability.
Interactive Components: Intuitive navigation and search capabilities.

### 📚 Resources

Meta Wiki Art Blog: Stay updated with our latest developments.
GLAM Linked Data Pipelines: Explore workflows and data structures.
Use Cases & Resources: Discover practical applications and tools.

### 🌟 Next Steps

Contribute: Submit pull requests for new features or documentation improvements.
Explore: Dive into the Linked Open Data pipelines and GLAM resources.
Feedback: Share your thoughts or report issues via GitHub Issues.

📖 Meta Wiki Art is part of the Sun & Rain Works initiative. Together, let's make cultural data more accessible and meaningful! 🌞🌧️

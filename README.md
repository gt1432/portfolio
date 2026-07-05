# G T Prashanth - Premium Developer Portfolio Website

A highly responsive, premium, and interactive personal portfolio website designed for software engineering internships, hackathons, and professional networking. This website displays education, skills, projects, certifications, accomplishments, and custom analytics dynamically loaded from the GitHub API.

## 🚀 Live Demo
- **GitHub Pages hosted site**: [https://gt1432.github.io/port](https://gt1432.github.io/port) (Placeholder - swap with your actual username and repository name)

---

## 🌟 Key Features

1. **Modern Premium Design (Glassmorphic Theme)**:
   - Built on a dark-theme-first palette using high-end blue and purple gradients.
   - Extensive use of glassmorphism CSS designs (translucent cards, backdrop blur filters, glowing borders, and drop shadows).
2. **Dynamic GitHub API Integrations**:
   - Automatically pulls public repositories from the GitHub API in real time.
   - Displays dynamic metrics such as stars, followers, public repos, and push activity.
   - Calculates and displays repository language distribution.
   - Integrates live repository statistics and streak cards.
3. **Flexible Single-file Configuration**:
   - All profile texts, skills, education tables, certifications, social media links, and custom projects are managed from a single configuration file: [config.js](file:///c:/Users/gt/.gemini/antigravity/port/config.js).
   - Easily modify the entire content of the site without touching complex HTML or CSS templates.
4. **Interactive Features**:
   - **Light / Dark Mode Toggle**: Smoothly transitions theme variables and saves preferences to local storage.
   - **Interactive Particles Background**: Responsive floating canvas node network connecting adjacent elements.
   - **Custom Typing Header**: Smooth, typing effect looping through engineering focus titles.
   - **Custom Mouse-Follow Cursor**: Custom glow ring and pointer overlay tracking mouse movements on desktop.
   - **Live Project Filtering & Searching**: Instantly query and filter projects by language or keyword tag.
   - **Project Detail Modals**: Interactive popup models presenting screenshots, tech badges, stats, and repositories.
   - **Scroll Progress & Observer**: Top progress indicator tracking reading depth; navbar links dynamically highlight on scroll crossing.
   - **Visitor Page Counter**: Local-storage persistent profile view count ticker.
5. **Contact Page (EmailJS Integrated)**:
   - Live contact form linked directly to EmailJS API with validation feedback and successful submission indicators.
6. **Timeline Integrations**:
   - Vertical timeline layouts for academic hackathons/experience and horizontal timeline decks for achievements.

---

## 🛠️ Technology Stack
- **Structure**: HTML5 (Semantic elements)
- **Styling**: CSS3 (Custom Variables, Flexbox, CSS Grid, Glassmorphic overlays)
- **Grid Framework**: Bootstrap 5.3.0
- **Logic**: Vanilla JavaScript (ES6+ Module layouts, Canvas APIs, Fetch REST Service, Intersection Observer)
- **Icon Kits**: FontAwesome 6 (Brand and developer iconography)
- **External Integration**: GitHub REST API & EmailJS Web Service

---

## 📂 Folder Structure

```text
port/
│
├── index.html        # Main HTML layout skeleton and section divisions
├── style.css         # Custom stylesheet (Variables, animations, responsiveness, glassmorphic elements)
├── config.js         # Single-source-of-truth configuration (Personal details, lists, project tags)
├── app.js            # Main JavaScript engine (API fetches, particle canvas, filters, forms)
├── resume.pdf        # Generated PDF resume document
└── README.md         # Documentation manual
```

---

## 💻 Running Locally

Since the application uses standard JavaScript, you can run and view it immediately without complex build steps:

1. **Direct File Open**:
   - Simply double-click `index.html` to open it in your browser. All dynamic elements and particle networks will render directly.
2. **Local Development Server (Recommended)**:
   - For an optimal local server setup (especially for testing CORS properties or local API queries), you can run a quick server using python, node, or VS Code Live Server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node/Npx
     npx http-server .
     ```
   - Open [http://localhost:8000](http://localhost:8000) in your web browser.

---

## ⚙️ How to Customize Your Portfolio

To update the content of your portfolio (for placements, new certifications, or changing contact coordinates), open [config.js](file:///c:/Users/gt/.gemini/antigravity/port/config.js) and edit the attributes inside the `CONFIG` object:

### Updating Contact & Social Handles
```javascript
profile: {
  name: "G T Prashanth",
  headline: "AI Developer | Full Stack Developer | Machine Learning Enthusiast",
  email: "your-email@gmail.com",
  phone: "+91 XXXXX XXXXX",
  githubUsername: "your-github-username" // The API queries this handle
}
```

### Adding New Certifications
Add a new object element to the `certifications` array inside `config.js`:
```javascript
{
  name: "New Certificate Title",
  issuer: "Academy Name",
  date: "2026",
  link: "Credential Verification Link",
  icon: "fa-solid fa-certificate"
}
```

### Customizing EmailJS Form submissions
1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Connect your Email Service and construct an email template (mapping `from_name`, `from_email`, `subject`, and `message` properties).
3. Copy your Service ID, Template ID, and Public Key, and update the config file:
```javascript
emailjs: {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY"
}
```

---

## 🌐 Deploying to GitHub Pages (Live Hosting)

Deploy your portfolio live for free in just a few steps:

1. **Create a GitHub Repository**:
   - Log in to GitHub and create a new repository (e.g., `port` or `portfolio`).
2. **Commit and Push Files**:
   - Initialize git in your local directory, add the files, commit, and push to your remote repository:
     ```bash
     git init
     git add .
     git commit -m "Initialize premium portfolio project"
     git branch -M main
     git remote add origin https://github.com/your-username/repo-name.git
     git push -u origin main
     ```
3. **Enable GitHub Pages**:
   - Navigate to the **Settings** tab of your repository on GitHub.
   - Go to the **Pages** menu from the left sidebar.
   - Under **Build and deployment**, select **Deploy from a branch** as the source.
   - Set the Branch to `main` (or `master`) and folder to `/ (root)`. Click **Save**.
4. **View Live Link**:
   - Your site will compile and deploy in about 1-2 minutes. The live link will be visible at the top of the Pages settings page!

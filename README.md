# ColdCopy

**Free cold email scorer & template library.** Score your email out of 100, get brutally honest feedback, and browse 30+ proven templates by industry.

[Live Demo](https://coldcopy.dev) · [Report Bug](https://github.com/alliedadvantage/coldcopy/issues) · [Request Feature](https://github.com/alliedadvantage/coldcopy/issues)

---

## What It Does

ColdCopy analyzes cold emails across six categories and provides a score out of 100 with specific, actionable tips to improve:

| Category | Points | What It Checks |
|----------|--------|----------------|
| **Subject Line** | 20 | Word count, personalization, spam triggers, question format, case |
| **Opening Line** | 15 | Personalization, I/You focus, brevity, research signals |
| **Body Copy** | 25 | Word count, Flesch-Kincaid reading level, paragraph structure, you/I ratio, value proposition, social proof |
| **Call to Action** | 20 | Single clear ask, friction level, time suggestion, question format |
| **Deliverability** | 10 | Spam trigger words, link count, caps/exclamation, images |
| **Bonus Points** | 10 | Personalization tokens, brevity, power words, conversational tone |

### Template Vault

30+ battle-tested cold email templates organized by:

- **Industry:** SaaS/Tech, Agency/Marketing, Real Estate, E-commerce, Recruiting, Financial Services, Consulting, General B2B
- **Goal:** Book a Meeting, Start a Conversation, Get a Referral, Re-engage, Partnership

Each template includes: subject line, full email body, 2 follow-up emails, and pro tips.

---

## Features

- 📊 **Instant scoring** — real-time analysis with category breakdowns
- 📝 **30+ templates** — proven cold emails organized by industry and goal
- 🎯 **Actionable tips** — specific feedback on every section of your email
- 🔒 **100% private** — everything runs client-side; your emails never leave your browser
- 📱 **Mobile-ready** — fully responsive, works on any device
- ⚡ **Instant load** — single HTML file, zero dependencies, no external requests
- 🐦 **Shareable scores** — one-click sharing to Twitter/X
- 🔍 **Filterable templates** — filter by industry, goal, or browse all

---

## Tech Stack

- **HTML5** — semantic markup with Schema.org structured data
- **CSS3** — custom properties, grid, flexbox, animations (no framework)
- **Vanilla JavaScript** — scoring engine, template rendering, DOM manipulation
- **Zero dependencies** — no npm, no CDN, no API calls, no build step

The entire application is a single `index.html` file (~95KB).

---

## Scoring Algorithm

The scorer uses research-backed criteria:

- **Flesch-Kincaid readability** — simplified syllable counting for grade-level estimation
- **Spam trigger detection** — 26 common spam words checked in subject and body
- **CTA friction analysis** — low-friction vs. high-friction call-to-action patterns
- **You/I ratio** — counts second-person vs. first-person pronouns
- **Power word detection** — 13 proven persuasion words
- **Personalization detection** — template tokens and research signals
- **Structure analysis** — paragraph count, word count, sentence structure

---

## Local Development

```bash
# Clone the repo
git clone https://github.com/alliedadvantage/coldcopy.git
cd coldcopy

# That's it. Open the file.
open index.html
# or
start index.html        # Windows
xdg-open index.html     # Linux
```

No build step. No dependencies. No package.json. Just open the HTML file.

### Local Server (optional)

If you want a proper dev server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# Then visit http://localhost:8000
```

---

## Project Structure

```
coldcopy/
├── index.html          # The entire application
├── README.md           # This file
└── launch-strategy.md  # GTM launch plan
```

---

## Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Ideas

- **New templates** — submit cold email templates that work. Include industry, goal, subject, body, 2 follow-ups, and 3 tips.
- **Scoring improvements** — new signals, better weighting, edge case handling
- **UI/UX enhancements** — animations, accessibility, design polish
- **Bug fixes** — find and fix issues
- **Translations** — help make ColdCopy available in other languages

### Template Submission Format

```javascript
{
  title: "Your Template Name",
  industry: "SaaS/Tech",           // or other industry
  goal: "Book a Meeting",          // or other goal
  score: 85,                       // your honest assessment
  subject: "Subject line with {{variables}}",
  body: `Email body here...`,
  followup1: `First follow-up...`,
  followup2: `Second follow-up...`,
  tips: [
    "Why this template works",
    "Key element to customize",
    "Common mistake to avoid"
  ]
}
```

---

## Roadmap

- [x] Email scorer with 6-category breakdown
- [x] 30+ templates with filtering
- [x] Score sharing (Twitter/X)
- [x] Email capture for playbook
- [ ] Pro tier ($19/mo) — AI-powered rewriting
- [ ] Team dashboards and shared template libraries
- [ ] Community-submitted templates with voting
- [ ] Chrome extension for scoring in Gmail/Outlook
- [ ] API for integrations
- [ ] Dynamic OG images with score
- [ ] Blog with SEO-targeted content

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

```
MIT License

Copyright (c) 2025 Allied Advantage

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Acknowledgments

- Cold email best practices from Josh Braun, Alex Berman, and the r/sales community
- Flesch-Kincaid readability research
- Spam trigger word databases from email deliverability experts
- Design inspiration from Linear.app and Vercel

---

**Built with ☕ by [Allied Advantage](https://alliedadvantage.co)**

# Task: Replicate BrainStorm AI Site

## 1. Overview
Replicate the target website `https://ki-f-r-kmu-smarte-l-sungen-f-r-sterreich-1097912478194.us-west1.run.app/` exactly using the extracted source code. The goal is a pixel-perfect clone with identical functionality (Gemini AI integration).

## 2. Technical Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (v4 compatible configuration)
- **Language:** TypeScript
- **AI Integration:** Google Gemini API (`@google/genai`)
- **Icons:** `lucide-react`

## 3. Extracted Components (from Source)
We have successfully extracted the following components via Base64 decoding:
- **Layout:** `Navbar`, `Footer`
- **Sections:** `Hero`, `Services`, `Process`, `WhyUs`, `Founder`, `TestimonialSlider`, `FAQ`, `Contact`
- **Features:** `AIAssistant` (Voice/Chat capability)
- **Data:** `constants` (Texts, Reviews, Steps)

## 4. Implementation Steps

### Phase 1: Setup
- [x] Initialize Next.js project in `web-app`
- [ ] Install dependencies: `lucide-react`, `@google/genai`, `clsx`, `tailwind-merge`, `tailwindcss-animate`
- [ ] Configure Tailwind (colors, animations from source)

### Phase 2: Reconstruction
- [ ] Create `scripts/reconstruct.py` to decode Base64 assets
- [ ] Run reconstruction script to populate `components/` and `utils/`
- [ ] Adapt `App.tsx` logic into `app/page.tsx`
- [ ] Set up `app/layout.tsx` with global styles and fonts

### Phase 3: AI Integration
- [ ] Set up API route for Email/Gemini if needed (`api/send-email`)
- [ ] Configure Environment Variables (`API_KEY`, `SMTP_*`)

### Phase 4: Verification
- [ ] Verify visual fidelity against screenshots (if available) or inferred design
- [ ] Test AI Assistant functionality
- [ ] Check mobile responsiveness

## 5. Constraints & Risks
- **Asset Links:** The source uses absolute URLs for images (`https://brainstorm-werbeagentur.at/...`). Check if these are accessible.
- **Backend:** The `send-email` function uses Nodemailer. We need to configure SMTP settings for it to work, or mock it.

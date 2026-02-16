# Daily Affirmations (The Aesthetic Habit) - Master Plan

## 1. Executive Summary & Core Philosophy
**Product Vision:** A "Visual Serenity" engine. We are not just displaying text; we are selling a 30-second mood shift. The app combines high-end visual design (Glassmorphism, 3D cards) with curated mental models to create a daily micro-habit.
**Core Objective:** Maximum retention through aesthetic pleasure and emotional relief.
**Key Metric:** "Daily Active Minutes" and "Share Rate" (Viral Loop).

---

## 2. User Experience (UX) Flow Strategy

### A. The "Mood First" Entry (Onboarding & Daily Open)
*   **Cold Start:** 
    *   Splash screen with breathing animation.
    *   Simple Question: "What brings you here?" (Options: Anxiety, Confidence, Heartbreak, Sleep).
    *   *Result:* The app configures the initial deck based on this selection.
*   **Returning User:** 
    *   Direct entry to "The Deck" (Main Feed).
    *   Background music fades in (optional toggle).

### B. The Core Loop ("The Deck")
*   **Interaction:** Vertical full-screen swap (TikTok style) or Horizontal Card Stack (Tinder style). *Decision: Vertical Scroll implies infinite content (better for binge-consuming).*
*   **Gestures:** 
    *   **Tap:** Hides UI for screenshot/immersive view.
    *   **Long Press:** Save to Favorites/Bookmark.
    *   **Swipe Right:** Share Quote (Instagram Story format).
*   **Visuals:** 
    *   Dynamic backgrounds that change based on time of day (Morning: Soft Sunrise; Night: Deep Midnight Blue).
    *   Glassmorphism overlays for text legibility.

### C. The "Studio" & Sharing
*   **Edit Mode:** Users can tap a "Palette" icon to change the font or background image of the current quote before sharing.
*   **Watermark:** All shared images include a subtle "Daily Affirmations" watermark to drive organic downloads.

---

## 3. Comprehensive Feature List

### Phase 1: MVP (The Engagement Engine)
1.  **Immersive Feed:** Infinite scroll of affirmation cards.
2.  **Haptic Feedback:** Subtle vibrations on scroll/snap to simulate physical cards.
3.  **Dynamic Backgrounds:** 4-5 high-quality video/gradient loops.
4.  **Category Filter:** Filter feed by "Love," "Health," "Wealth," "Anxiety."
5.  **One-Tap Share:** Generates a high-res image for Instagram/TikTok.
6.  **Favorites System:** Local storage of liked quotes.

### Phase 2: Retention & Habit Building
7.  **Smart Push Notifications:** 
    *   *Context Aware:* "Morning Boost" (8 AM) and "Sleep Peace" (10 PM).
    *   *Deep Linking:* Tapping notification opens that specific card.
8.  **Home Screen Widget:** Shows the "Quote of the Hour" (High retention driver).
9.  **Streak Counter:** "7 Days Mindful."
10. **Audio Ambience:** Integrated binaural beats or nature sounds.

### Phase 3: Monetization
11. **Premium Content:** Locked categories (e.g., "Manifesting Millions").
12. **Premium Visuals:** 4K Live Wallpapers.
13. **Remove Ads:** (If ad-supported model is chosen).

---

## 4. Technical Architecture

### Tech Stack
*   **Framework:** React Native (Expo SDK 50+) - *Best for rapid UI iteration.*
*   **Language:** TypeScript - *Type safety for data models.*
*   **Animations:** `react-native-reanimated` + `react-native-gesture-handler`.
*   **Navigation:** `expo-router` (File-based routing).
*   **State Management:** `zustand` (Lightweight, perfect for theme/settings).
*   **Storage (Local):** `react-native-mmkv` (Instant loading of favorites/settings).
*   **Backend/Data:** Supabase (PostgreSQL) or Static JSON (for MVP).

### Data Schema (JSON / Types)

#### `Affirmation` Model
```typescript
interface Affirmation {
  id: string;
  text: string;
  author?: string; // Optional
  category_id: string; // 'wealth', 'health', etc.
  theme_id?: string; // Specific background if curated
  metrics: {
    likes: number;
    shares: number;
  }
}
```

#### `Theme` Model
```typescript
interface Theme {
  id: string;
  type: 'video' | 'gradient' | 'image';
  uri: string; // Local asset or remote URL
  fontColor: string;
  blurIntensity: number; // For glassmorphism
}
```

---

## 5. Development Roadmap (Checklist)

### Milestone 1: Foundation & Navigation (Week 1)
- [ ] Initialize Expo project with TypeScript.
- [ ] Setup `expo-router` structure.
- [ ] Configure `reanimated` pipeline.
- [ ] Create shared components: `GlassCard`, `BackgroundContainer`.

### Milestone 2: The Core Loop (Week 2)
- [ ] specific "Swiper" or "Vertical List" component using `FlashList`.
- [ ] Implement data fetching (local JSON first).
- [ ] Add Haptics (`expo-haptics`) to scroll interactions.
- [ ] Build key categories.

### Milestone 3: Polish & Interaction (Week 3)
- [ ] "Tap to Share" functionality (`expo-view-shot` + `expo-sharing`).
- [ ] Favorites system using MMKV.
- [ ] Onboarding flow (Name input + Category selection).

### Milestone 4: Retention Features (Week 4)
- [ ] Local Notifications setup (`expo-notifications`).
- [ ] Basic Home Screen Widget (`expo-widgets` or equivalent config).
- [ ] App Icon alternatives (Aesthetic choices).

---

## 6. Visual Design System Guidelines

1.  **Typography:**
    *   *Headings:* Serif (e.g., Playfair Display) for elegance.
    *   *Body:* Sans-serif (e.g., Lato or Montserrat) for readability on glass.
2.  **Glassmorphism:**
    *   Background: White/Light Gray with opacity 0.1 - 0.3.
    *   Border: 1px Solid White with opacity 0.2.
    *   Blur: `BlurView` intensity 50-80.
    *   Shadow: Soft, diffuse drop shadows for depth.
3.  **Color Palette:**
    *   Avoid solid flat colors. Use mesh gradients.
    *   Key moods:
        *   *Morning:* Peach/Soft Blue.
        *   *Focus:* Deep Teal/Emerald.
        *   *Night:* Indigo/Violet.

---

## 7. API & Content Strategy (The "Brain")

We will start with a **Static-First Approach** for speed.
1.  **Content Repository:** A master `content.json` bundled with the app containing initial 100 quotes.
2.  **OTA Updates:** We can use `expo-updates` to push new JSON content without App Store review.
3.  **Future API:** Move to Supabase edge functions if content exceeds 1000+ items or requires dynamic user-generated content.

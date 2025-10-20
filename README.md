# IT-Legend Frontend Task — Course Page 

# [Live Demo On Netlify](https://it-legend.netlify.app/)
# [Live Demo On Vercel](https://it-legend-task-ten.vercel.app/courses/course-details-2)
**Applicant:** Abdalla Yahia (Abu Yahia)  
**Position:** Front-End Developer (Next.js)  
**Frameworks & Libraries:**  
`Next.js`, `TypeScript`, `Redux Toolkit`, `Tailwind CSS`, `plyr-react`, `react-icons`, `zod`, `sweetalert`, `react-toastify`.

---

## 📘 Project Overview  
This task is about building an **interactive course page** where each course displays its lessons, allows students to watch videos, open PDF files, take weekly exams, and track their overall progress.  
The progress and exam results are **stored in localStorage**, and the entire layout is **responsive** across all devices.

---

## 🎯 Main Features
- Display a course page with a list of **lessons**.
- Each lesson includes:
  - A **video player** (supports *Full Screen* and *Wide Mode*).
  - A **PDF file** that opens in a **floating tab/modal**.
- **Weekly exams** (3 in total), each with a different score weight.
- **Student progress tracking**:
  - Watching videos and opening PDFs give points.
  - Exam scores are added to total progress.
- **Motivational message** displayed based on current progress.
- **Comments and questions**:  
  Students can post comments on the course and send questions.
- Fully **responsive design** (mobile, tablet, desktop).

---

## 🧮 Points System

| Action | Points per Action | Max Total |
|:--------|:------------------|:-----------|
| Watch Video | 2 points | 30 points |
| Open PDF | 2 points | 30 points |
| **Exams:** |  |  |
| 1st Exam | 10 points | — |
| 2nd Exam | 20 points | — |
| Final Exam | 10 points | — |

**Total Possible Points: 100**

### Formula
```ts
totalProgress = min(viewedVideos * 2, 30)
              + min(openedPdfs * 2, 30)
              + exam1Score
              + exam2Score
              + exam3Score
```

🧱 Project Structure
```json
/src
  /app
    /course/[id]/page.tsx        // Main course page
  /components
    CourseHeader.tsx
    LessonList.tsx
    LessonItem.tsx
    VideoPlayer.tsx              // plyr-react implementation
    PdfFloatingTab.tsx           // floating tab / modal for PDFs
    ExamsPanel.tsx
    ProgressBadge.tsx
    MotivationMessage.tsx
    CommentsSection.tsx
    AskQuestionForm.tsx
  /store
    store.ts
    courseSlice.ts
    persistenceMiddleware.ts     // save & load from localStorage
  /lib
    scoring.ts                   // progress calculation
    localStorageKeys.ts
    sampleData.ts
  /styles
    globals.css                  // tailwind imports
  /types
    index.d.ts
  /utils
    validators.ts                // zod schemas
```

⚙️ Installation & Setup
```js
# Clone the repository
git clone <repo-url>
cd <project-folder>

# Install dependencies
pnpm install
# or
npm install
# or
yarn install

# Run in development mode
pnpm dev
# or
npm run dev
```
# Visit
http://localhost:3000

## Additional Commands

```js
pnpm build     # build for production
pnpm start     # run production build
pnpm lint      # lint code (if ESLint configured)
pnpm test      # run tests (if configured)
```
🧩 Technical Notes
🗂 State Management (Redux Toolkit)

courseSlice stores:

Course info, lessons, active video, watched lessons, opened PDFs.

Exam results and progress percentage.

Comments and questions.

Progress is persisted automatically to localStorage.

💾 LocalStorage Structure

```json
{
  "courseId": "course-123",
  "viewedVideos": ["lesson-1","lesson-3"],
  "openedPdfs": ["lesson-2"],
  "exams": {
    "exam1": 8,
    "exam2": 15,
    "exam3": 9
  },
  "lastUpdated": "2025-10-16T12:00:00.000Z"
}
```

🎥 Video Player

Uses plyr-react with support for:

Fullscreen mode.

Wide mode (responsive width using Tailwind).

When a video is played for the first time, it adds the lesson ID to the watched list and updates progress.

📄 PDF Floating Tab

Opens inside a modal/floating tab using <iframe src={pdfUrl} />.

When a PDF is opened, that lesson ID is added to the openedPdfs list.

💬 Comments & Questions

Stored locally in localStorage.

On submission, shows confirmation via react-toastify or sweetalert.

✅ Validation

Uses zod to validate forms, comments, and exam inputs.

💅 Responsiveness

Built entirely with Tailwind CSS.

Works seamlessly on mobile, tablet, and desktop.

Uses grid/flex layout with responsive classes (sm, md, lg, xl).

🧠 Reviewer Checklist

 Lessons list renders correctly on all screens.

 Video player supports fullscreen and wide mode.

 PDF modal opens correctly and counts towards progress.

 Progress updates automatically when videos/PDFs/exams are completed.

 Exams update total progress based on the scoring system.

 Motivational message changes dynamically by progress percentage.

 Comments and questions persist in localStorage.

 Redux Toolkit is properly used for state management.

 Validation handled with zod.

 Notifications handled with react-toastify or sweetalert.

 Fully responsive layout with Tailwind.

💬 Motivational Messages by Progress %
Progress Range	Message
0–24%	“Great start! Keep going, every step counts 💪”
25–49%	“Good progress — stay consistent 🚀”
50–79%	“Awesome work! You’re moving fast 🔥”
80–99%	“Almost there! Finish strong ✅”
100%	“Congratulations! You’ve completed the course 🎉”

🧪 Sample Data

```js
export const sampleCourse = {
  id: 'course-123',
  title: 'React + Next.js Practical Course',
  lessons: [
    { id: 'lesson-1', title: 'Introduction', videoUrl: '...', pdfUrl: '...' },
    { id: 'lesson-2', title: 'Setup & Basics', videoUrl: '...', pdfUrl: '...' },
  ],
  exams: [
    { id: 'exam1', week: 1, maxScore: 10 },
    { id: 'exam2', week: 2, maxScore: 20 },
    { id: 'exam3', week: 3, maxScore: 10 },
  ]
};

```

🚀 Future Improvements

Sync progress and comments to a backend API.

Support multi-user progress tracking.

Load video/PDF content from a CDN (e.g., Cloudinary).

Add testing (Jest + RTL) for logic and components.

Create an Admin dashboard for managing comments & exams.

🧾 Summary

This project demonstrates a modern, interactive learning experience using Next.js and TypeScript.
It includes:

Video and PDF handling,

Exam progress tracking,

Dynamic motivational feedback,

Comment and question management,

And full offline persistence via localStorage.

The implementation showcases solid frontend architecture, clean UI, and state synchronization with Redux Toolkit and Tailwind CSS.

## 👨‍💻 Developer

**This project was fully developed by Abdalla Yahia as a frontend technical task for IT-Legend company.**

- The entire frontend development, including state management and UI logic, was built independently using **Next.js**, **TypeScript**, and **Redux Toolkit**.
- The project was designed to demonstrate advanced frontend architecture, responsive design, and interactive user experience.
- All logic related to student progress, exams, motivational messages, and floating PDF/video views was implemented from scratch.

📍 **Location:** Beni-Suef, Egypt  
📧 **Email:** abdallayahia75@gmail.com  
🔗 **LinkedIn:** [linkedin.com/in/abdalla-yahia](https://linkedin.com/in/abdalla-yahia)  
💻 **GitHub:** [github.com/abdalla-yahia](https://github.com/abdalla-yahia)  
📱 **Phone:** +2012-111-00554

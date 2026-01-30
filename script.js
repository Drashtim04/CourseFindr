// DOM Elements
const authModal = document.getElementById('auth-modal');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const closeBtn = document.querySelector('.close');
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const userProfile = document.getElementById('user-profile');
const usernameDisplay = document.getElementById('username-display');
const logoutBtn = document.getElementById('logout-btn');
const loginError = document.getElementById('login-error');
const signupError = document.getElementById('signup-error');

// New Section Elements
const recommendedSection = document.getElementById('recommended-section');
const recommendedGrid = document.getElementById('recommended-grid');
const userInterestsDisplay = document.getElementById('user-interests-display');

// Filter Elements
const priceFilter = document.getElementById('price-filter');
const durationFilter = document.getElementById('duration-filter');
const searchInput = document.getElementById('search-input');
const courseGrid = document.getElementById('courses-grid');
const loadingIndicator = document.getElementById('loading');
const noResults = document.getElementById('no-results');
const resultsCount = document.getElementById('results-count');

// Mock Data (Expanded with more metadata)
const courses = [
    {
        id: 1,
        title: "Complete Python Bootcamp: From Zero to Hero",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: 19.99,
        duration: 35,
        difficulty: "beginner",
        instructor: "John Smith",
        rating: 4.7,
        ratingCount: 152000,
        category: "Python",
        url: "https://www.udemy.com/course/complete-python-bootcamp/",
        tags: ["programming", "python", "data science", "automation"]
    },
    {
        id: 2,
        title: "The Web Developer Bootcamp 2024",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: 24.99,
        duration: 63,
        difficulty: "beginner",
        category: "Web Development",
        instructor: "Colt Steele",
        rating: 4.8,
        ratingCount: 205000,
        url: "https://www.udemy.com/course/the-web-developer-bootcamp/",
        tags: ["web development", "html", "css", "javascript"]
    },
    {
        id: 3,
        title: "Machine Learning A-Z: Python & R in Data Science",
        image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: 29.99,
        duration: 44,
        difficulty: "intermediate",
        category: "Data Science",
        instructor: "Kirill Eremenko",
        rating: 4.5,
        ratingCount: 135000,
        url: "https://www.udemy.com/course/machinelearning/",
        tags: ["data science", "machine learning", "python", "ai"]
    },
    {
        id: 4,
        title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: 19.99,
        duration: 48,
        difficulty: "intermediate",
        category: "Web Development",
        instructor: "Maximilian Schwarzmüller",
        rating: 4.6,
        ratingCount: 128000,
        url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
        tags: ["web development", "javascript", "react", "frontend"]
    },
    {
        id: 5,
        title: "Advanced CSS and Sass: Flexbox, Grid, Animations",
        image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: 16.99,
        duration: 28,
        difficulty: "advanced",
        category: "Design",
        instructor: "Jonas Schmedtmann",
        rating: 4.8,
        ratingCount: 42000,
        url: "https://www.udemy.com/course/advanced-css-and-sass/",
        tags: ["web development", "css", "design"]
    },
    {
        id: 6,
        title: "Data Analysis with Pandas and Python",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: 12.99,
        duration: 12,
        difficulty: "beginner",
        category: "Data Science",
        instructor: "Boris Paskhaver",
        rating: 4.6,
        ratingCount: 15000,
        url: "https://www.udemy.com/course/data-analysis-with-pandas/",
        tags: ["data science", "python", "pandas", "analytics"]
    },
    {
        id: 7,
        title: "UI/UX Design Masterclass",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: 89.99,
        duration: 24,
        difficulty: "beginner",
        category: "Design",
        instructor: "Joe Natoli",
        rating: 4.5,
        ratingCount: 12000,
        url: "#",
        tags: ["design", "ui/ux", "wireframing"]
    },
    {
        id: 8,
        title: "JavaScript: The Advanced Concepts",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: 0,
        duration: 22,
        difficulty: "advanced",
        category: "Web Development",
        instructor: "Andrei Neagoie",
        rating: 4.8,
        ratingCount: 35000,
        url: "#",
        tags: ["web development", "javascript", "es6"]
    },
    {
        id: 9,
        title: "Project Management Professional (PMP)",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: 99.99,
        duration: 35,
        difficulty: "advanced",
        category: "Business",
        instructor: "Joseph Phillips",
        rating: 4.7,
        ratingCount: 40000,
        url: "https://www.udemy.com/course/pmp-exam-prep-seminar/",
        tags: ["business", "management", "pmp", "certification"]
    },
    {
        id: 10,
        title: "Photography Masterclass: A Complete Guide",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: 19.99,
        duration: 22,
        difficulty: "beginner",
        category: "Lifestyle",
        instructor: "Phil Ebiner",
        rating: 4.7,
        ratingCount: 55000,
        url: "https://www.udemy.com/course/photography-masterclass-complete-guide-to-photography/",
        tags: ["photography", "art", "creative", "lifestyle"]
    },
    {
        id: 11,
        title: "Graphic Design Bootcamp: Photoshop, Illustrator, InDesign",
        image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: 24.99,
        duration: 15,
        difficulty: "beginner",
        category: "Design",
        instructor: "Derrick Mitchell",
        rating: 4.6,
        ratingCount: 18000,
        url: "https://www.udemy.com/course/graphic-design-bootcamp/",
        tags: ["design", "graphic design", "photoshop", "illustrator"]
    },
    {
        id: 12,
        title: "The Complete Investment Banking Course 2024",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: 34.99,
        duration: 14,
        difficulty: "advanced",
        category: "Business",
        instructor: "365 Careers",
        rating: 4.5,
        ratingCount: 30000,
        url: "https://www.udemy.com/course/the-complete-investment-banking-course-2016/",
        tags: ["business", "finance", "investment", "banking"]
    }
];

// App State
let currentUser = null;
let savedCourses = new Set(); // Use Set for O(1) lookups

// --- AI/ML Recommendations Data (Generated by Python Script) ---
const aiRecommendations = {
    "category_cold_start": {
        "web development": [2, 11, 6, 10, 4],
        "data science": [1, 3, 20, 19, 22],
        "business": [17, 13, 18, 21, 22],
        "design": [16, 19, 5, 20, 21],
        "lifestyle": [20, 22, 21, 19, 18]
    }
};

// --- Initialization ---
function init() {
    loadUser();
    loadBookmarks();
    renderCourses();
    setupEventListeners();
}

function loadUser() {
    const saved = localStorage.getItem('currentUser');
    if (saved) {
        currentUser = JSON.parse(saved);
        updateUIForLoggedInUser();
    }
}

function loadBookmarks() {
    const saved = localStorage.getItem('bookmarks');
    if (saved) {
        savedCourses = new Set(JSON.parse(saved));
    }
}

// --- UI Updates ---
function updateUIForLoggedInUser() {
    loginBtn.classList.add('hidden');
    signupBtn.classList.add('hidden');
    userProfile.classList.remove('hidden');
    usernameDisplay.textContent = currentUser.username;

    // Show Recommendations
    if (currentUser.interest) {
        recommendedSection.classList.remove('hidden');
        userInterestsDisplay.textContent = currentUser.interest;
        renderRecommendations(currentUser.interest);
    }
}

function updateUIForLoggedOutUser() {
    loginBtn.classList.remove('hidden');
    signupBtn.classList.remove('hidden');
    userProfile.classList.add('hidden');
    recommendedSection.classList.add('hidden');
}

// --- Course Rendering ---
function renderCourses(filters = {}) {
    loadingIndicator.classList.remove('hidden');
    courseGrid.innerHTML = '';
    noResults.classList.add('hidden');

    // Simulate Network Delay
    setTimeout(() => {
        const filtered = filterCourses(courses, filters);

        resultsCount.textContent = `Showing ${filtered.length} courses`;
        loadingIndicator.classList.add('hidden');

        if (filtered.length === 0) {
            noResults.classList.remove('hidden');
            return;
        }

        filtered.forEach(course => {
            courseGrid.appendChild(createCourseCard(course));
        });
    }, 400);
}

function renderRecommendations(interest) {
    recommendedGrid.innerHTML = '';

    // AI Recommendation Logic
    // Uses the pre-calculated recommendations from our Python script (TF-IDF/Cosine Similarity)
    let recommended = [];
    const interestLower = interest.toLowerCase();

    // Check if we have ML-generated recommendations for this interest
    if (aiRecommendations.category_cold_start[interestLower]) {
        const recommendedIds = aiRecommendations.category_cold_start[interestLower];
        // innovative O(1) lookup map for courses could be used here, but find is okay for small N
        recommended = recommendedIds.map(id => courses.find(c => c.id === id)).filter(Boolean);
    } else {
        // Fallback to simple filtering if no ML data found
        recommended = courses.filter(c => {
            return c.tags.some(t => t.includes(interestLower)) ||
                c.category.toLowerCase().includes(interestLower);
        }).slice(0, 3);
    }

    if (recommended.length > 0) {
        recommended.forEach(course => {
            recommendedGrid.appendChild(createCourseCard(course));
        });
    } else {
        recommendedSection.classList.add('hidden');
    }
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    const isBookmarked = savedCourses.has(course.id);

    // Dynamic Badge based on stats
    let badge = '';
    if (course.rating >= 4.8) badge = '<span class="badge" style="background:#ff9f1c; color:#fff;">Bestseller</span>';
    else if (course.price === 0) badge = '<span class="badge" style="background:#2ec4b6; color:#fff;">Free</span>';

    card.innerHTML = `
        <div class="image-container">
            <img src="${course.image}" alt="${course.title}" class="course-image" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x160?text=Course+Image';">
            ${badge}
            <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" 
                    onclick="toggleBookmark(event, ${course.id})">
                <i class="fas fa-heart"></i>
            </button>
        </div>
        <div class="course-content" onclick="window.open('${course.url}', '_blank')">
            <div class="course-category">${course.category}</div>
            <h3 class="course-title">${course.title}</h3>
            <div class="instructor">
                <i class="fas fa-user-circle"></i>
                ${course.instructor}
            </div>
            <div class="meta-row">
                <div class="rating">
                    ${course.rating} <span>(${formatCount(course.ratingCount)})</span>
                </div>
                <div class="price">${course.price === 0 ? 'Free' : '$' + course.price}</div>
            </div>
        </div>
    `;
    return card;
}

// --- Logic ---
function filterCourses(allCourses, filters) {
    return allCourses.filter(course => {
        // Search
        const search = searchInput.value.toLowerCase();
        if (search && !course.title.toLowerCase().includes(search) &&
            !course.tags.some(t => t.includes(search))) return false;

        // Price
        const priceVal = priceFilter.value;
        if (priceVal === 'free' && course.price > 0) return false;
        if (priceVal === 'paid' && course.price === 0) return false;

        // Duration
        const durVal = durationFilter.value;
        if (durVal === 'short' && course.duration > 3) return false;
        if (durVal === 'medium' && (course.duration < 3 || course.duration > 6)) return false;
        if (durVal === 'long' && course.duration < 6) return false;

        // Difficulty
        const diffInputs = document.querySelectorAll('input[name="difficulty"]:checked');
        if (diffInputs.length > 0 && diffInputs[0].value !== 'all') {
            if (course.difficulty !== diffInputs[0].value) return false;
        }

        return true;
    });
}

function toggleBookmark(e, id) {
    e.stopPropagation(); // Prevent card click
    const btn = e.currentTarget;

    if (savedCourses.has(id)) {
        savedCourses.delete(id);
        btn.classList.remove('active');
        // Show removed toast?
    } else {
        savedCourses.add(id);
        btn.classList.add('active');
        // Animation?
    }

    localStorage.setItem('bookmarks', JSON.stringify([...savedCourses]));
}

function formatCount(num) {
    return num > 999 ? (num / 1000).toFixed(1) + 'k' : num;
}

function resetFilters() {
    searchInput.value = '';
    priceFilter.value = 'all';
    durationFilter.value = 'all';
    document.querySelector('input[name="difficulty"][value="all"]').checked = true;
    renderCourses();
}

// --- Event Listeners ---
function setupEventListeners() {
    // Auth Modal
    loginBtn.addEventListener('click', () => {
        authModal.classList.remove('hidden');
        showLoginTab();
    });

    signupBtn.addEventListener('click', () => {
        authModal.classList.remove('hidden');
        showSignupTab();
    });

    closeBtn.addEventListener('click', () => authModal.classList.add('hidden'));

    // Tabs
    loginTab.addEventListener('click', showLoginTab);
    signupTab.addEventListener('click', showSignupTab);

    // Auth Forms
    signupForm.addEventListener('submit', handleSignup);
    loginForm.addEventListener('submit', handleLogin);
    logoutBtn.addEventListener('click', handleLogout);

    // Filters
    [priceFilter, durationFilter, searchInput].forEach(el =>
        el.addEventListener('input', () => renderCourses())
    );

    document.querySelectorAll('input[name="difficulty"]').forEach(el =>
        el.addEventListener('change', () => renderCourses())
    );
}

// --- Auth Handlers ---
function showLoginTab() {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
}

function showSignupTab() {
    loginTab.classList.remove('active');
    signupTab.classList.add('active');
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Get Selected Interest
    const interestEl = document.querySelector('input[name="interest"]:checked');
    const interest = interestEl ? interestEl.value : null;

    if (!interest) {
        signupError.textContent = "Please select an interest";
        return;
    }

    const newUser = { username: name, email, password, interest };

    // Save (Mock DB)
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(u => u.email === email)) {
        signupError.textContent = "Email already exists";
        return;
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Auto Login
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    currentUser = newUser;

    authModal.classList.add('hidden');
    updateUIForLoggedInUser();
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUser = user;
        authModal.classList.add('hidden');
        updateUIForLoggedInUser();
        loginError.textContent = '';
    } else {
        loginError.textContent = "Invalid credentials";
    }
}

function handleLogout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    updateUIForLoggedOutUser();
}

// Run
window.addEventListener('DOMContentLoaded', init);